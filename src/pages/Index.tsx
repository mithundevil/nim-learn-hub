import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, TrendingUp, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
            <GraduationCap className="w-10 h-10 text-accent-foreground" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            NIM Academy
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform Your Learning Journey with Our Complete Education Management System
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            onClick={() => navigate("/login")}
          >
            Access Portal
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Comprehensive Learning Ecosystem
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Shield}
              title="Admin Control"
              description="Complete oversight of students, mentors, and operations with powerful analytics"
            />
            <FeatureCard
              icon={BookOpen}
              title="Student Portal"
              description="Access classes, assignments, and track your progress in real-time"
            />
            <FeatureCard
              icon={Users}
              title="Mentor Dashboard"
              description="Manage batches, upload content, and provide personalized feedback"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Parent View"
              description="Monitor your child's performance and attendance transparently"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join hundreds of students and mentors in our trusted learning platform
          </p>
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => navigate("/login")}
          >
            Login Now
          </Button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => (
  <div className="glass p-6 rounded-xl border-white/20 text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
      <Icon className="w-8 h-8 text-accent" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;
