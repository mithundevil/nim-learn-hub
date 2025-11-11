import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import NotFound from "./pages/NotFound";

// Admin Pages
import Students from "./pages/admin/Students";
import Mentors from "./pages/admin/Mentors";
import Payments from "./pages/admin/Payments";
import Reports from "./pages/admin/Reports";
import Certificates from "./pages/admin/Certificates";
import AdminSettings from "./pages/admin/AdminSettings";

// Student Pages
import Classes from "./pages/student/Classes";
import Tasks from "./pages/student/Tasks";
import StudentChat from "./pages/student/StudentChat";
import StudentPayments from "./pages/student/StudentPayments";
import StudentReport from "./pages/student/StudentReport";
import StudentCertificate from "./pages/student/StudentCertificate";

// Mentor Pages
import MentorDashboard from "./pages/mentor/MentorDashboard";
import Batches from "./pages/mentor/Batches";
import Attendance from "./pages/mentor/Attendance";
import MentorTasks from "./pages/mentor/MentorTasks";
import MentorChat from "./pages/mentor/MentorChat";
import MentorReports from "./pages/mentor/MentorReports";

// Parent Pages
import ParentDashboard from "./pages/parent/ParentDashboard";
import ParentAttendance from "./pages/parent/ParentAttendance";
import ParentReports from "./pages/parent/ParentReports";
import ParentFeedback from "./pages/parent/ParentFeedback";

// Admin Sub-Pages
import AddStudent from "./pages/admin/AddStudent";
import AddMentor from "./pages/admin/AddMentor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/mentors" element={<Mentors />} />
          <Route path="/admin/payments" element={<Payments />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/certificates" element={<Certificates />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          
          {/* Student Routes */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/student/classes" element={<Classes />} />
          <Route path="/student/tasks" element={<Tasks />} />
          <Route path="/student/resources" element={<Classes />} />
          <Route path="/student/chat" element={<StudentChat />} />
          <Route path="/student/payments" element={<StudentPayments />} />
          <Route path="/student/report" element={<StudentReport />} />
          <Route path="/student/certificate" element={<StudentCertificate />} />
          
          {/* Mentor Routes */}
          <Route path="/mentor" element={<MentorDashboard />} />
          <Route path="/mentor/batches" element={<Batches />} />
          <Route path="/mentor/attendance" element={<Attendance />} />
          <Route path="/mentor/tasks" element={<MentorTasks />} />
          <Route path="/mentor/chat" element={<MentorChat />} />
          <Route path="/mentor/reports" element={<MentorReports />} />
          
          {/* Parent Routes */}
          <Route path="/parent" element={<ParentDashboard />} />
          <Route path="/parent/attendance" element={<ParentAttendance />} />
          <Route path="/parent/reports" element={<ParentReports />} />
          <Route path="/parent/feedback" element={<ParentFeedback />} />
          
          {/* Admin Sub-Pages */}
          <Route path="/admin/students/add" element={<AddStudent />} />
          <Route path="/admin/mentors/add" element={<AddMentor />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
