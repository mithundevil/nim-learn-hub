import DashboardLayout from "@/components/layout/DashboardLayout";
import { Home, Calendar, FileText, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const ParentAttendance = () => {
  const navItems = [
    { icon: Home, label: "Dashboard", href: "/parent" },
    { icon: Calendar, label: "Attendance", href: "/parent/attendance" },
    { icon: FileText, label: "Reports", href: "/parent/reports" },
    { icon: MessageSquare, label: "Mentor Feedback", href: "/parent/feedback" },
  ];

  const attendanceData = [
    { date: "2025-01-10", subject: "Full Stack Development", status: "Present", duration: "1.5 hrs" },
    { date: "2025-01-09", subject: "React Advanced Concepts", status: "Present", duration: "1.5 hrs" },
    { date: "2025-01-08", subject: "Node.js Backend", status: "Present", duration: "1.5 hrs" },
    { date: "2025-01-07", subject: "Database Design", status: "Absent", duration: "0 hrs" },
    { date: "2025-01-06", subject: "API Development", status: "Present", duration: "1.5 hrs" },
  ];

  const studentInfo = {
    name: "Rahul Sharma",
    id: "ST001",
    course: "Full Stack Development",
    batch: "FSW-24A",
    totalClasses: 45,
    attended: 41,
    percentage: 91,
  };

  return (
    <DashboardLayout role="parent" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Attendance Tracker</h1>
          <p className="text-muted-foreground">Monitor your child's class attendance</p>
        </div>

        {/* Student Info & Stats */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-lg">Student Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{studentInfo.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ID:</span>
                  <span className="font-medium">{studentInfo.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Batch:</span>
                  <span className="font-medium">{studentInfo.batch}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-lg">Overall Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">{studentInfo.percentage}%</div>
                  <p className="text-sm text-muted-foreground">
                    {studentInfo.attended} / {studentInfo.totalClasses} Classes
                  </p>
                </div>
                <Progress value={studentInfo.percentage} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-lg">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Present:</span>
                  <Badge variant="default">{studentInfo.attended}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Absent:</span>
                  <Badge variant="destructive">{studentInfo.totalClasses - studentInfo.attended}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Certificate Eligible:</span>
                  <Badge variant={studentInfo.percentage >= 88 ? "default" : "outline"}>
                    {studentInfo.percentage >= 88 ? "Yes" : "No"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attendance History */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Recent Attendance History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {attendanceData.map((record, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                  <div className="space-y-1">
                    <p className="font-medium">{record.subject}</p>
                    <p className="text-sm text-muted-foreground">{record.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{record.duration}</span>
                    <Badge variant={record.status === "Present" ? "default" : "destructive"}>
                      {record.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ParentAttendance;
