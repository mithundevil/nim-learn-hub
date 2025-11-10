import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { User, BookOpen, CheckCircle, FileText, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ParentDashboard = () => {
  const navItems = [
    { icon: User, label: "Dashboard", href: "/parent" },
    { icon: CheckCircle, label: "Attendance", href: "/parent/attendance" },
    { icon: FileText, label: "Reports", href: "/parent/reports" },
    { icon: MessageCircle, label: "Mentor Feedback", href: "/parent/feedback" },
  ];

  const stats = [
    { title: "Attendance", value: "92%", icon: CheckCircle },
    { title: "Tasks Completed", value: "18/22", icon: FileText },
    { title: "Overall Progress", value: "68%", icon: BookOpen },
  ];

  return (
    <DashboardLayout role="parent" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Student Progress - Rahul Sharma</h1>
          <p className="text-muted-foreground">Monitor your child's learning journey</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Course Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["JavaScript Fundamentals", "React Basics", "React Hooks"].map((topic, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{topic}</span>
                    <span className="text-sm font-bold">{100 - index * 20}%</span>
                  </div>
                  <Progress value={100 - index * 20} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ParentDashboard;
