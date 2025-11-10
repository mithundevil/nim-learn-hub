import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { 
  Users, 
  BookOpen, 
  CheckCircle, 
  MessageCircle,
  Calendar,
  FileText,
  BarChart3
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const MentorDashboard = () => {
  const navItems = [
    { icon: BarChart3, label: "Dashboard", href: "/mentor" },
    { icon: Users, label: "My Batches", href: "/mentor/batches" },
    { icon: CheckCircle, label: "Attendance", href: "/mentor/attendance" },
    { icon: FileText, label: "Tasks", href: "/mentor/tasks" },
    { icon: MessageCircle, label: "Student Chat", href: "/mentor/chat" },
    { icon: BookOpen, label: "Reports", href: "/mentor/reports" },
  ];

  const stats = [
    { title: "Total Students", value: "45", icon: Users },
    { title: "Active Batches", value: "2", icon: BookOpen },
    { title: "Avg. Attendance", value: "90%", icon: CheckCircle },
    { title: "Pending Reviews", value: "8", icon: FileText },
  ];

  const upcomingClasses = [
    { title: "React Advanced Patterns", batch: "FSW-24A", time: "Today, 4:00 PM", students: 25 },
    { title: "Project Review Session", batch: "FSW-24A", time: "Tomorrow, 10:00 AM", students: 25 },
    { title: "Final Assessment", batch: "FSW-24B", time: "Jan 18, 3:00 PM", students: 20 },
  ];

  const batchPerformance = [
    { batch: "FSW-24A", students: 25, avgAttendance: 92, tasksCompleted: 88 },
    { batch: "FSW-24B", students: 20, avgAttendance: 87, tasksCompleted: 85 },
  ];

  return (
    <DashboardLayout role="mentor" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome, Dr. Arun Singh! 👋</h1>
          <p className="text-muted-foreground">Manage your batches and student progress</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upcoming Classes */}
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Upcoming Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.map((classItem, index) => (
                  <div key={index} className="p-4 rounded-lg bg-secondary/50 border border-border">
                    <div className="space-y-1">
                      <p className="font-medium">{classItem.title}</p>
                      <p className="text-sm text-muted-foreground">{classItem.batch} • {classItem.students} students</p>
                      <p className="text-sm text-accent">{classItem.time}</p>
                    </div>
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

        {/* Recent Student Messages */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent" />
              Recent Student Messages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                  <div>
                    <p className="font-medium">Rahul Sharma (ST001)</p>
                    <p className="text-sm text-muted-foreground">Need help with Redux state management...</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                  <button className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-md hover:bg-accent/90">
                    Reply
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MentorDashboard;
