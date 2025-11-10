import DashboardLayout from "@/components/layout/DashboardLayout";
import { Users, BookOpen, CheckCircle, MessageCircle, FileText, BarChart3, Download, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MentorReports = () => {
  const navItems = [
    { icon: BarChart3, label: "Dashboard", href: "/mentor" },
    { icon: Users, label: "My Batches", href: "/mentor/batches" },
    { icon: CheckCircle, label: "Attendance", href: "/mentor/attendance" },
    { icon: FileText, label: "Tasks", href: "/mentor/tasks" },
    { icon: MessageCircle, label: "Student Chat", href: "/mentor/chat" },
    { icon: BookOpen, label: "Reports", href: "/mentor/reports" },
  ];

  const batchStats = [
    { batch: "FSW-24A", students: 25, avgAttendance: 92, tasksCompleted: 88, avgScore: 87 },
    { batch: "FSW-24B", students: 20, avgAttendance: 87, tasksCompleted: 85, avgScore: 84 },
  ];

  return (
    <DashboardLayout role="mentor" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Reports & Feedback</h1>
            <p className="text-muted-foreground">Submit weekly reports and student feedback</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Download className="mr-2 h-4 w-4" />
            Download Batch Report
          </Button>
        </div>

        {/* Batch Performance Summary */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Batch Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {batchStats.map((batch, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{batch.batch}</h3>
                    <span className="text-sm text-muted-foreground">{batch.students} students</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Attendance</span>
                        <span className="font-medium">{batch.avgAttendance}%</span>
                      </div>
                      <Progress value={batch.avgAttendance} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Tasks</span>
                        <span className="font-medium">{batch.tasksCompleted}%</span>
                      </div>
                      <Progress value={batch.tasksCompleted} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Avg. Score</span>
                        <span className="font-medium">{batch.avgScore}%</span>
                      </div>
                      <Progress value={batch.avgScore} className="h-2" />
                    </div>
                  </div>
                  {index < batchStats.length - 1 && <div className="border-t border-border mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submit Weekly Report */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-accent" />
              Submit Weekly Report
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Select Batch</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fsw-24a">FSW-24A</SelectItem>
                    <SelectItem value="fsw-24b">FSW-24B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Week Period</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select week" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="week11">Week 11 - Jan 15-21, 2024</SelectItem>
                    <SelectItem value="week10">Week 10 - Jan 8-14, 2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Topics Covered This Week</Label>
              <Textarea placeholder="List all topics and concepts covered..." rows={3} />
            </div>

            <div className="space-y-2">
              <Label>Challenges Faced</Label>
              <Textarea placeholder="Mention any challenges students faced..." rows={3} />
            </div>

            <div className="space-y-2">
              <Label>Overall Batch Performance</Label>
              <Textarea placeholder="Provide feedback on overall batch performance..." rows={4} />
            </div>

            <Button className="bg-accent hover:bg-accent/90">
              <Upload className="mr-2 h-4 w-4" />
              Submit Report
            </Button>
          </CardContent>
        </Card>

        {/* Previous Reports */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Previous Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { week: "Week 10 - Jan 8-14, 2024", batch: "FSW-24A", submitted: "Jan 14, 2024" },
                { week: "Week 9 - Jan 1-7, 2024", batch: "FSW-24A", submitted: "Jan 7, 2024" },
                { week: "Week 10 - Jan 8-14, 2024", batch: "FSW-24B", submitted: "Jan 14, 2024" },
              ].map((report, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                  <div>
                    <p className="font-medium">{report.batch} - {report.week}</p>
                    <p className="text-sm text-muted-foreground">Submitted on {report.submitted}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MentorReports;
