import DashboardLayout from "@/components/layout/DashboardLayout";
import { TrendingUp, Users, BookOpen, FileText, CreditCard, Settings, Award, Download, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatsCard from "@/components/dashboard/StatsCard";

const Certificates = () => {
  const navItems = [
    { icon: TrendingUp, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: BookOpen, label: "Mentors", href: "/admin/mentors" },
    { icon: FileText, label: "Reports", href: "/admin/reports" },
    { icon: CreditCard, label: "Payments", href: "/admin/payments" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  const stats = [
    { title: "Total Issued", value: "156", icon: Award },
    { title: "Pending Approval", value: "12", icon: Clock },
    { title: "This Month", value: "18", icon: CheckCircle },
  ];

  const pendingCertificates = [
    { studentId: "ST001", name: "Rahul Sharma", course: "Full Stack Development", attendance: 92, tasksCompleted: "22/22", eligible: true },
    { studentId: "ST005", name: "Vikram Singh", course: "Full Stack Development", attendance: 88, tasksCompleted: "22/22", eligible: true },
    { studentId: "ST006", name: "Anjali Verma", course: "Data Science", attendance: 90, tasksCompleted: "20/20", eligible: true },
  ];

  return (
    <DashboardLayout role="admin" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Certificate Management</h1>
            <p className="text-muted-foreground">Approve and issue course completion certificates</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Award className="mr-2 h-4 w-4" />
            View Templates
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Eligibility Criteria */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Certificate Eligibility Criteria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">Attendance ≥ 88%</p>
                  <p className="text-sm text-muted-foreground">Minimum required</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">All Tasks Completed</p>
                  <p className="text-sm text-muted-foreground">100% submission</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium">No Pending Dues</p>
                  <p className="text-sm text-muted-foreground">Full payment</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Pending Certificate Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Tasks</TableHead>
                  <TableHead>Eligible</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingCertificates.map((student) => (
                  <TableRow key={student.studentId}>
                    <TableCell className="font-medium">{student.studentId}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.course}</TableCell>
                    <TableCell>{student.attendance}%</TableCell>
                    <TableCell>{student.tasksCompleted}</TableCell>
                    <TableCell>
                      <Badge variant="default">Eligible</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">Preview</Button>
                        <Button className="bg-accent hover:bg-accent/90" size="sm">
                          Approve & Issue
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Certificates */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Recently Issued Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-accent" />
                    <div>
                      <p className="font-medium">Priya Patel - Data Science</p>
                      <p className="text-sm text-muted-foreground">Issued on Jan 14, 2024 • Certificate ID: CERT2024{i}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-3 w-3" />
                    Download
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

export default Certificates;
