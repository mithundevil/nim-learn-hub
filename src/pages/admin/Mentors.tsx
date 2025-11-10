import DashboardLayout from "@/components/layout/DashboardLayout";
import { TrendingUp, Users, BookOpen, FileText, CreditCard, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, UserPlus } from "lucide-react";

const Mentors = () => {
  const navItems = [
    { icon: TrendingUp, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: BookOpen, label: "Mentors", href: "/admin/mentors" },
    { icon: FileText, label: "Reports", href: "/admin/reports" },
    { icon: CreditCard, label: "Payments", href: "/admin/payments" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  const mentors = [
    { id: "MT001", name: "Dr. Arun Singh", specialization: "Full Stack Development", batches: 2, students: 45, rating: 4.8 },
    { id: "MT002", name: "Prof. Meera Kapoor", specialization: "Data Science", batches: 1, students: 28, rating: 4.9 },
    { id: "MT003", name: "Ms. Sneha Reddy", specialization: "UI/UX Design", batches: 1, students: 32, rating: 4.7 },
    { id: "MT004", name: "Mr. Rajesh Kumar", specialization: "Digital Marketing", batches: 1, students: 25, rating: 4.6 },
  ];

  return (
    <DashboardLayout role="admin" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Mentors Management</h1>
            <p className="text-muted-foreground">Manage mentors and batch assignments</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Plus className="mr-2 h-4 w-4" />
            Add New Mentor
          </Button>
        </div>

        {/* Search */}
        <Card className="glass border-white/20">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search mentors by name or specialization..." className="pl-9" />
            </div>
          </CardContent>
        </Card>

        {/* Mentors Table */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>All Mentors ({mentors.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mentor ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Batches</TableHead>
                  <TableHead>Total Students</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mentors.map((mentor) => (
                  <TableRow key={mentor.id}>
                    <TableCell className="font-medium">{mentor.id}</TableCell>
                    <TableCell>{mentor.name}</TableCell>
                    <TableCell>{mentor.specialization}</TableCell>
                    <TableCell>{mentor.batches}</TableCell>
                    <TableCell>{mentor.students}</TableCell>
                    <TableCell>
                      <Badge variant="default">⭐ {mentor.rating}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Assign Batch
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
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

export default Mentors;
