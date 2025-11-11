import DashboardLayout from "@/components/layout/DashboardLayout";
import { TrendingUp, Users, BookOpen, FileText, CreditCard, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react";

const Students = () => {
  const navItems = [
    { icon: TrendingUp, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: BookOpen, label: "Mentors", href: "/admin/mentors" },
    { icon: FileText, label: "Reports", href: "/admin/reports" },
    { icon: CreditCard, label: "Payments", href: "/admin/payments" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  const students = [
    { id: "ST001", name: "Rahul Sharma", course: "Full Stack Development", batch: "FSW-24A", status: "Active", attendance: 92, mentor: "Dr. Arun Singh" },
    { id: "ST002", name: "Priya Patel", course: "Data Science", batch: "DSC-24B", status: "Active", attendance: 87, mentor: "Prof. Meera Kapoor" },
    { id: "ST003", name: "Amit Kumar", course: "UI/UX Design", batch: "UXD-24A", status: "Active", attendance: 90, mentor: "Ms. Sneha Reddy" },
    { id: "ST004", name: "Sneha Reddy", course: "Digital Marketing", batch: "DM-24C", status: "Pending", attendance: 0, mentor: "Not Assigned" },
    { id: "ST005", name: "Vikram Singh", course: "Full Stack Development", batch: "FSW-24A", status: "Active", attendance: 88, mentor: "Dr. Arun Singh" },
  ];

  return (
    <DashboardLayout role="admin" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Students Management</h1>
            <p className="text-muted-foreground">Manage all registered students</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90" onClick={() => window.location.href = '/admin/students/add'}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Student
          </Button>
        </div>

        {/* Search & Filter */}
        <Card className="glass border-white/20">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name, ID, or course..." className="pl-9" />
              </div>
              <Button variant="outline">Filter by Batch</Button>
              <Button variant="outline">Filter by Status</Button>
            </div>
          </CardContent>
        </Card>

        {/* Students Table */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>All Students ({students.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Batch</TableHead>
                  <TableHead>Mentor</TableHead>
                  <TableHead>Attendance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.id}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.course}</TableCell>
                    <TableCell>{student.batch}</TableCell>
                    <TableCell>{student.mentor}</TableCell>
                    <TableCell>{student.attendance}%</TableCell>
                    <TableCell>
                      <Badge variant={student.status === "Active" ? "default" : "outline"}>
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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

export default Students;
