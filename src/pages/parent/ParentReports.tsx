import DashboardLayout from "@/components/layout/DashboardLayout";
import { Home, Calendar, FileText, MessageSquare, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const ParentReports = () => {
  const navItems = [
    { icon: Home, label: "Dashboard", href: "/parent" },
    { icon: Calendar, label: "Attendance", href: "/parent/attendance" },
    { icon: FileText, label: "Reports", href: "/parent/reports" },
    { icon: MessageSquare, label: "Mentor Feedback", href: "/parent/feedback" },
  ];

  const weeklyReports = [
    { week: "Week 4 - Jan 2025", attendance: 95, tasksCompleted: 4, tasksTotal: 4, performance: "Excellent", date: "2025-01-10" },
    { week: "Week 3 - Jan 2025", attendance: 90, tasksCompleted: 3, tasksTotal: 4, performance: "Good", date: "2025-01-03" },
    { week: "Week 2 - Dec 2024", attendance: 88, tasksCompleted: 4, tasksTotal: 4, performance: "Excellent", date: "2024-12-27" },
    { week: "Week 1 - Dec 2024", attendance: 92, tasksCompleted: 3, tasksTotal: 4, performance: "Good", date: "2024-12-20" },
  ];

  const performanceMetrics = {
    attendance: 91,
    taskCompletion: 87,
    averageGrade: "A",
    totalTopics: 45,
    completedTopics: 41,
  };

  return (
    <DashboardLayout role="parent" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Performance Reports</h1>
            <p className="text-muted-foreground">Track your child's academic progress</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Download className="mr-2 h-4 w-4" />
            Download Full Report
          </Button>
        </div>

        {/* Performance Overview */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Attendance Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{performanceMetrics.attendance}%</div>
              <Progress value={performanceMetrics.attendance} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Task Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{performanceMetrics.taskCompletion}%</div>
              <Progress value={performanceMetrics.taskCompletion} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Average Grade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{performanceMetrics.averageGrade}</div>
              <p className="text-sm text-muted-foreground mt-2">Excellent Performance</p>
            </CardContent>
          </Card>

          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">Topics Covered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">
                {performanceMetrics.completedTopics}/{performanceMetrics.totalTopics}
              </div>
              <Progress value={(performanceMetrics.completedTopics / performanceMetrics.totalTopics) * 100} className="mt-2 h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Weekly Reports */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Weekly Performance Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{report.week}</h3>
                      <Badge variant={report.performance === "Excellent" ? "default" : "secondary"}>
                        {report.performance}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Attendance: </span>
                        <span className="font-medium">{report.attendance}%</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Tasks: </span>
                        <span className="font-medium">{report.tasksCompleted}/{report.tasksTotal}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Date: </span>
                        <span className="font-medium">{report.date}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-4">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strengths & Areas for Improvement */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle>Strengths</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Consistent attendance and punctuality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Excellent task submission rate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Strong problem-solving skills in React concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Active participation in class discussions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle>Areas for Improvement</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Could improve code documentation practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>More practice needed in backend optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Time management during project deadlines</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ParentReports;
