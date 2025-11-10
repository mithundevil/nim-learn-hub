import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { 
  Users, 
  UserCheck, 
  DollarSign, 
  TrendingUp,
  BookOpen,
  Settings,
  FileText,
  CreditCard
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const AdminDashboard = () => {
  const navItems = [
    { icon: TrendingUp, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: BookOpen, label: "Mentors", href: "/admin/mentors" },
    { icon: FileText, label: "Reports", href: "/admin/reports" },
    { icon: CreditCard, label: "Payments", href: "/admin/payments" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  const stats = [
    { title: "Total Students", value: 248, icon: Users, trend: { value: 12, positive: true } },
    { title: "Active Mentors", value: 18, icon: UserCheck, trend: { value: 5, positive: true } },
    { title: "Avg. Attendance", value: "89%", icon: TrendingUp, trend: { value: 3, positive: true } },
    { title: "Revenue (Month)", value: "₹4.2L", icon: DollarSign, trend: { value: 18, positive: true } },
  ];

  const recentEnrollments = [
    { name: "Rahul Sharma", course: "Full Stack Development", date: "2024-01-15", status: "Pending" },
    { name: "Priya Patel", course: "Data Science", date: "2024-01-14", status: "Approved" },
    { name: "Amit Kumar", course: "UI/UX Design", date: "2024-01-14", status: "Approved" },
    { name: "Sneha Reddy", course: "Digital Marketing", date: "2024-01-13", status: "Pending" },
  ];

  const batchPerformance = [
    { batch: "Batch FSW-24A", students: 35, avgAttendance: 92, tasksCompleted: 88 },
    { batch: "Batch DSC-24B", students: 28, avgAttendance: 87, tasksCompleted: 85 },
    { batch: "Batch UXD-24A", students: 32, avgAttendance: 90, tasksCompleted: 91 },
  ];

  return (
    <DashboardLayout role="admin" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage NIM Academy operations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Recent Enrollments & Batch Performance */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Enrollments */}
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle>Recent Enrollments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentEnrollments.map((enrollment, index) => (
                  <div key={index} className="flex items-center justify-between pb-4 border-b last:border-0">
                    <div>
                      <p className="font-medium">{enrollment.name}</p>
                      <p className="text-sm text-muted-foreground">{enrollment.course}</p>
                      <p className="text-xs text-muted-foreground">{enrollment.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      enrollment.status === "Approved" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {enrollment.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Batch Performance */}
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle>Batch Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {batchPerformance.map((batch, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{batch.batch}</p>
                      <p className="text-sm text-muted-foreground">{batch.students} students</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Attendance</span>
                        <span className="font-medium">{batch.avgAttendance}%</span>
                      </div>
                      <Progress value={batch.avgAttendance} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Tasks Completed</span>
                        <span className="font-medium">{batch.tasksCompleted}%</span>
                      </div>
                      <Progress value={batch.tasksCompleted} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
