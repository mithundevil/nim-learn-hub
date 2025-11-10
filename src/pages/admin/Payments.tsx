import DashboardLayout from "@/components/layout/DashboardLayout";
import { TrendingUp, Users, BookOpen, FileText, CreditCard, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import { DollarSign, CheckCircle, AlertCircle, Clock } from "lucide-react";

const Payments = () => {
  const navItems = [
    { icon: TrendingUp, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: BookOpen, label: "Mentors", href: "/admin/mentors" },
    { icon: FileText, label: "Reports", href: "/admin/reports" },
    { icon: CreditCard, label: "Payments", href: "/admin/payments" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  const stats = [
    { title: "Total Revenue", value: "₹4.2L", icon: DollarSign },
    { title: "Paid", value: "₹3.8L", icon: CheckCircle },
    { title: "Pending", value: "₹28K", icon: Clock },
    { title: "Overdue", value: "₹12K", icon: AlertCircle },
  ];

  const payments = [
    { id: "PAY001", studentId: "ST001", name: "Rahul Sharma", amount: "₹45,000", method: "Full Payment", status: "Paid", date: "2024-01-10" },
    { id: "PAY002", studentId: "ST002", name: "Priya Patel", amount: "₹15,000", method: "EMI (1/3)", status: "Paid", date: "2024-01-12" },
    { id: "PAY003", studentId: "ST003", name: "Amit Kumar", amount: "₹15,000", method: "EMI (2/3)", status: "Pending", date: "2024-01-15" },
    { id: "PAY004", studentId: "ST005", name: "Vikram Singh", amount: "₹15,000", method: "EMI (1/3)", status: "Overdue", date: "2024-01-08" },
  ];

  return (
    <DashboardLayout role="admin" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Payment Management</h1>
            <p className="text-muted-foreground">Track and manage student payments</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Search & Filter */}
        <Card className="glass border-white/20">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by student name or payment ID..." className="pl-9" />
              </div>
              <Button variant="outline">Filter by Status</Button>
              <Button variant="outline">Filter by Date</Button>
            </div>
          </CardContent>
        </Card>

        {/* Payments Table */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>All Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment ID</TableHead>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.studentId}</TableCell>
                    <TableCell>{payment.name}</TableCell>
                    <TableCell>{payment.amount}</TableCell>
                    <TableCell>{payment.method}</TableCell>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>
                      <Badge variant={
                        payment.status === "Paid" ? "default" :
                        payment.status === "Pending" ? "secondary" :
                        "destructive"
                      }>
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        Send Reminder
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

export default Payments;
