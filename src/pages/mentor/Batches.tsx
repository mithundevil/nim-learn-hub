import DashboardLayout from "@/components/layout/DashboardLayout";
import { Users, BookOpen, CheckCircle, MessageCircle, FileText, BarChart3, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Batches = () => {
  const navItems = [
    { icon: BarChart3, label: "Dashboard", href: "/mentor" },
    { icon: Users, label: "My Batches", href: "/mentor/batches" },
    { icon: CheckCircle, label: "Attendance", href: "/mentor/attendance" },
    { icon: FileText, label: "Tasks", href: "/mentor/tasks" },
    { icon: MessageCircle, label: "Student Chat", href: "/mentor/chat" },
    { icon: BookOpen, label: "Reports", href: "/mentor/reports" },
  ];

  const batches = [
    { id: "FSW-24A", name: "Full Stack Web Development - Batch A", students: 25, course: "Full Stack Development", startDate: "Dec 1, 2023" },
    { id: "FSW-24B", name: "Full Stack Web Development - Batch B", students: 20, course: "Full Stack Development", startDate: "Jan 5, 2024" },
  ];

  const studentsData = {
    "FSW-24A": [
      { id: "ST001", name: "Rahul Sharma", attendance: 92, tasksCompleted: "18/22", avgScore: 90, status: "Active" },
      { id: "ST005", name: "Vikram Singh", attendance: 88, tasksCompleted: "17/22", avgScore: 85, status: "Active" },
      { id: "ST008", name: "Anjali Verma", attendance: 95, tasksCompleted: "20/22", avgScore: 93, status: "Active" },
    ],
  };

  return (
    <DashboardLayout role="mentor" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Batches</h1>
          <p className="text-muted-foreground">View and manage your assigned batches</p>
        </div>

        {/* Batches Overview */}
        <div className="grid gap-6 md:grid-cols-2">
          {batches.map((batch) => (
            <Card key={batch.id} className="glass border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{batch.id}</span>
                  <Badge variant="default">{batch.students} Students</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">{batch.name}</p>
                    <p className="text-sm text-muted-foreground">{batch.course}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Started: {batch.startDate}</p>
                  <Button className="w-full bg-accent hover:bg-accent/90">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Batch FSW-24A Details */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Batch FSW-24A - Student List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Tasks</TableHead>
                  <TableHead>Avg. Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {studentsData["FSW-24A"].map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.attendance}%</TableCell>
                    <TableCell>{student.tasksCompleted}</TableCell>
                    <TableCell>{student.avgScore}%</TableCell>
                    <TableCell>
                      <Badge variant="default">{student.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Batches;
