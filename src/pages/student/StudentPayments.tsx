import DashboardLayout from "@/components/layout/DashboardLayout";
import { BookOpen, Video, FileText, MessageCircle, Download, CreditCard, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import StatsCard from "@/components/dashboard/StatsCard";

const StudentPayments = () => {
  const navItems = [
    { icon: BookOpen, label: "Dashboard", href: "/student" },
    { icon: Video, label: "Live Classes", href: "/student/classes" },
    { icon: FileText, label: "Assignments", href: "/student/tasks" },
    { icon: Download, label: "Resources", href: "/student/resources" },
    { icon: MessageCircle, label: "Chat with Mentor", href: "/student/chat" },
  ];

  const stats = [
    { title: "Total Fees", value: "₹45,000", icon: CreditCard },
    { title: "Paid", value: "₹30,000", icon: CheckCircle },
    { title: "Pending", value: "₹15,000", icon: Clock },
  ];

  const paymentHistory = [
    { date: "Jan 10, 2024", amount: "₹15,000", method: "EMI Payment 1/3", status: "Paid", transactionId: "TXN001" },
    { date: "Dec 10, 2023", amount: "₹15,000", method: "EMI Payment 2/3", status: "Paid", transactionId: "TXN002" },
  ];

  return (
    <DashboardLayout role="student" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Payment & Fees</h1>
          <p className="text-muted-foreground">Manage your course payments and dues</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Payment Progress */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Payment Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Course: Full Stack Development</span>
                <span className="text-sm font-medium">67% Paid</span>
              </div>
              <Progress value={67} className="h-3" />
            </div>
            <p className="text-sm text-muted-foreground">
              You have paid 2 out of 3 installments. Next payment of ₹15,000 is due on Feb 10, 2024.
            </p>
          </CardContent>
        </Card>

        {/* Upcoming Payment */}
        <Card className="glass border-white/20 border-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Upcoming Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-lg font-semibold">EMI Payment 3/3</p>
                <p className="text-3xl font-bold text-accent">₹15,000</p>
                <p className="text-sm text-muted-foreground">Due Date: Feb 10, 2024</p>
              </div>
              <Button className="bg-accent hover:bg-accent/90" size="lg">
                Pay Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentHistory.map((payment, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="space-y-1">
                    <p className="font-medium">{payment.method}</p>
                    <p className="text-sm text-muted-foreground">{payment.date}</p>
                    <p className="text-xs text-muted-foreground">Transaction ID: {payment.transactionId}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-lg font-bold">{payment.amount}</p>
                    <Badge variant="default">{payment.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium mb-2">Accepted Payment Methods</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-accent" />
                    <span className="text-sm">Credit/Debit Card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-accent" />
                    <span className="text-sm">UPI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-accent" />
                    <span className="text-sm">Net Banking</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Need Help?</p>
                <Button variant="outline" className="w-full">Contact Support</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentPayments;
