-- Fix security linter warnings

-- Add RLS policies for mentors table
CREATE POLICY "Mentors can view their own data"
  ON public.mentors FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Mentors can update their own data"
  ON public.mentors FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all mentors"
  ON public.mentors FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Students can view mentors"
  ON public.mentors FOR SELECT
  USING (public.has_role(auth.uid(), 'student'));

-- Add RLS policies for batches table
CREATE POLICY "Students can view their batch"
  ON public.batches FOR SELECT
  USING (
    id IN (
      SELECT batch_id FROM public.students WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Mentors can view and manage their batches"
  ON public.batches FOR ALL
  USING (
    mentor_id IN (
      SELECT id FROM public.mentors WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all batches"
  ON public.batches FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Fix handle_updated_at function to have proper search_path
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;