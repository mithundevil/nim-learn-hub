import DashboardLayout from "@/components/layout/DashboardLayout";
import { Users, BookOpen, CheckCircle, MessageCircle, FileText, BarChart3, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Attendance = () => {
  const navItems = [
    { icon: BarChart3, label: "Dashboard", href: "/mentor" },
    { icon: Users, label: "My Batches", href: "/mentor/batches" },
    { icon: CheckCircle, label: "Attendance", href: "/mentor/attendance" },
    { icon: FileText, label: "Tasks", href: "/mentor/tasks" },
    { icon: MessageCircle, label: "Student Chat", href: "/mentor/chat" },
    { icon: BookOpen, label: "Reports", href: "/mentor/reports" },
  ];

  const students = [
    { id: "ST001", name: "Rahul Sharma", present: true },
    { id: "ST005", name: "Vikram Singh", present: true },
    { id: "ST008", name: "Anjali Verma", present: false },
    { id: "ST012", name: "Priya Patel", present: true },
    { id: "ST015", name: "Amit Kumar", present: true },
  ];

  return (
    <DashboardLayout role="mentor" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Mark Attendance</h1>
          <p className="text-muted-foreground">Track and manage student attendance</p>
        </div>

        {/* Attendance Form */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Today's Attendance - Jan 15, 2024
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Select Batch</Label>
                <Select defaultValue="fsw-24a">
                  <SelectTrigger>
                    <SelectValue placeholder="Select batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fsw-24a">FSW-24A - Full Stack Development</SelectItem>
                    <SelectItem value="fsw-24b">FSW-24B - Full Stack Development</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Session</Label>
                <Select defaultValue="morning">
                  <SelectTrigger>
                    <SelectValue placeholder="Select session" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (10:00 AM - 12:00 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (2:00 PM - 4:00 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Student List (FSW-24A)</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Mark All Present</Button>
                  <Button variant="outline" size="sm">Mark All Absent</Button>
                </div>
              </div>

              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.id}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id={student.id} defaultChecked={student.present} />
                    <Label htmlFor={student.id} className="cursor-pointer">Present</Label>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Button className="bg-accent hover:bg-accent/90">Submit Attendance</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>

        {/* Attendance History */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Recent Attendance Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "Jan 14, 2024", batch: "FSW-24A", present: 23, total: 25, percentage: 92 },
                { date: "Jan 13, 2024", batch: "FSW-24A", present: 24, total: 25, percentage: 96 },
                { date: "Jan 12, 2024", batch: "FSW-24B", present: 18, total: 20, percentage: 90 },
              ].map((record, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                  <div>
                    <p className="font-medium">{record.date} - {record.batch}</p>
                    <p className="text-sm text-muted-foreground">
                      {record.present}/{record.total} students present
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">{record.percentage}%</p>
                    <p className="text-xs text-muted-foreground">Attendance</p>
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

export default Attendance;
