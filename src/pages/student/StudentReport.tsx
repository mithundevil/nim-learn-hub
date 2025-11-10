import DashboardLayout from "@/components/layout/DashboardLayout";
import { BookOpen, Video, FileText, MessageCircle, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const StudentReport = () => {
  const navItems = [
    { icon: BookOpen, label: "Dashboard", href: "/student" },
    { icon: Video, label: "Live Classes", href: "/student/classes" },
    { icon: FileText, label: "Assignments", href: "/student/tasks" },
    { icon: Download, label: "Resources", href: "/student/resources" },
    { icon: MessageCircle, label: "Chat with Mentor", href: "/student/chat" },
  ];

  const weeklyReports = [
    { week: "Week 10 - Jan 8-14, 2024", attendance: 100, tasksCompleted: 3, avgScore: 92 },
    { week: "Week 9 - Jan 1-7, 2024", attendance: 85, tasksCompleted: 2, avgScore: 88 },
    { week: "Week 8 - Dec 25-31, 2023", attendance: 90, tasksCompleted: 3, avgScore: 90 },
  ];

  return (
    <DashboardLayout role="student" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Performance Reports</h1>
            <p className="text-muted-foreground">View and download your progress reports</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Download className="mr-2 h-4 w-4" />
            Download Full Report
          </Button>
        </div>

        {/* Overall Performance */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Overall Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Attendance</span>
                  <span className="text-sm font-bold">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Tasks Completed</span>
                  <span className="text-sm font-bold">18/22</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Average Score</span>
                  <span className="text-sm font-bold">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mentor Feedback */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Latest Mentor Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-secondary/50 border border-border">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">Dr. Arun Singh</p>
                <Badge variant="default">Week 10</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                "Excellent progress this week! Rahul demonstrated strong understanding of React Hooks and completed all assignments with high quality. Keep up the great work!"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Reports */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Weekly Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyReports.map((report, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">{report.week}</h3>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-3 w-3" />
                      PDF
                    </Button>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Attendance</p>
                      <p className="text-2xl font-bold text-accent">{report.attendance}%</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Tasks Completed</p>
                      <p className="text-2xl font-bold text-accent">{report.tasksCompleted}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Avg. Score</p>
                      <p className="text-2xl font-bold text-accent">{report.avgScore}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Progress */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Skills Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { skill: "JavaScript", progress: 95 },
                { skill: "React", progress: 85 },
                { skill: "Redux", progress: 70 },
                { skill: "Node.js", progress: 60 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.skill}</span>
                    <span className="text-sm font-bold">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentReport;
