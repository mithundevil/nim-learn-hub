import DashboardLayout from "@/components/layout/DashboardLayout";
import { BookOpen, Video, FileText, MessageCircle, Download, Award, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const StudentCertificate = () => {
  const navItems = [
    { icon: BookOpen, label: "Dashboard", href: "/student" },
    { icon: Video, label: "Live Classes", href: "/student/classes" },
    { icon: FileText, label: "Assignments", href: "/student/tasks" },
    { icon: Download, label: "Resources", href: "/student/resources" },
    { icon: MessageCircle, label: "Chat with Mentor", href: "/student/chat" },
  ];

  const eligibilityCriteria = [
    { criterion: "Attendance ≥ 88%", current: 92, required: 88, met: true },
    { criterion: "All Tasks Completed", current: "18/22", required: "22/22", met: false },
    { criterion: "No Pending Dues", current: "₹15,000 Pending", required: "₹0", met: false },
  ];

  return (
    <DashboardLayout role="student" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Course Certificate</h1>
          <p className="text-muted-foreground">Track your progress towards course completion certificate</p>
        </div>

        {/* Certificate Status */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-accent" />
              Certificate Eligibility Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center p-6">
                <Award className="h-20 w-20 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Certificate Not Yet Available</h3>
                <p className="text-muted-foreground">
                  Complete all requirements below to unlock your certificate
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Overall Progress</span>
                  <span className="font-bold">68%</span>
                </div>
                <Progress value={68} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eligibility Criteria */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Certificate Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {eligibilityCriteria.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="flex items-center gap-3">
                    {item.met ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <XCircle className="h-6 w-6 text-destructive" />
                    )}
                    <div>
                      <p className="font-medium">{item.criterion}</p>
                      <p className="text-sm text-muted-foreground">
                        Current: {item.current} • Required: {item.required}
                      </p>
                    </div>
                  </div>
                  <Badge variant={item.met ? "default" : "destructive"}>
                    {item.met ? "Met" : "Pending"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Certificate Preview */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Certificate Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-[1.414/1] bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg border-2 border-accent p-8 flex flex-col items-center justify-center text-center">
              <Award className="h-16 w-16 text-accent mb-4" />
              <h2 className="text-3xl font-bold mb-2">Certificate of Completion</h2>
              <p className="text-xl mb-4">Full Stack Development</p>
              <p className="text-muted-foreground mb-6">
                This certificate will be unlocked when you meet all requirements
              </p>
              <div className="space-y-2">
                <p className="text-sm">Issued to: <span className="font-bold">Rahul Sharma</span></p>
                <p className="text-sm">Student ID: <span className="font-bold">ST001</span></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Required */}
        <Card className="glass border-white/20 border-accent">
          <CardHeader>
            <CardTitle>Action Required</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm">To receive your certificate, you need to:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-destructive" />
                  Complete 4 remaining assignments
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-destructive" />
                  Clear pending payment of ₹15,000
                </li>
              </ul>
              <div className="flex gap-2 mt-4">
                <Button className="bg-accent hover:bg-accent/90">View Pending Tasks</Button>
                <Button variant="outline">Make Payment</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentCertificate;
