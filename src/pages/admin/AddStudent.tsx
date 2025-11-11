import DashboardLayout from "@/components/layout/DashboardLayout";
import { TrendingUp, Users, BookOpen, FileText, CreditCard, Settings, Save, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddStudent = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { icon: TrendingUp, label: "Dashboard", href: "/admin" },
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: BookOpen, label: "Mentors", href: "/admin/mentors" },
    { icon: FileText, label: "Reports", href: "/admin/reports" },
    { icon: CreditCard, label: "Payments", href: "/admin/payments" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Student added successfully! Credentials sent via email.");
    setTimeout(() => navigate("/admin/students"), 1500);
  };

  const handleCancel = () => {
    navigate("/admin/students");
  };

  return (
    <DashboardLayout role="admin" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Add New Student</h1>
            <p className="text-muted-foreground">Register a new student to the academy</p>
          </div>
          <Button variant="ghost" onClick={handleCancel}>
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            {/* Personal Information */}
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter last name" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="student@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input id="dob" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter full address" rows={3} />
                </div>
              </CardContent>
            </Card>

            {/* Course Information */}
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="course">Select Course *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fullstack">Full Stack Development</SelectItem>
                        <SelectItem value="datascience">Data Science</SelectItem>
                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                        <SelectItem value="marketing">Digital Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="batch">Assign Batch *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select batch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fsw-24a">FSW-24A (Morning)</SelectItem>
                        <SelectItem value="fsw-24b">FSW-24B (Evening)</SelectItem>
                        <SelectItem value="dsc-24a">DSC-24A (Morning)</SelectItem>
                        <SelectItem value="uxd-24a">UXD-24A (Afternoon)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mentor">Assign Mentor *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mentor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mt001">Dr. Arun Singh</SelectItem>
                        <SelectItem value="mt002">Prof. Meera Kapoor</SelectItem>
                        <SelectItem value="mt003">Ms. Sneha Reddy</SelectItem>
                        <SelectItem value="mt004">Mr. Rajesh Kumar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Course Start Date *</Label>
                    <Input id="startDate" type="date" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parent/Guardian Information */}
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle>Parent/Guardian Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input id="parentName" placeholder="Enter name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="father">Father</SelectItem>
                        <SelectItem value="mother">Mother</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentEmail">Parent Email</Label>
                    <Input id="parentEmail" type="email" placeholder="parent@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentPhone">Parent Phone Number *</Label>
                    <Input id="parentPhone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="courseFee">Course Fee (₹) *</Label>
                    <Input id="courseFee" type="number" placeholder="50000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentMode">Payment Mode *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full">Full Payment</SelectItem>
                        <SelectItem value="emi">EMI (Monthly)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="discount">Discount (%)</Label>
                    <Input id="discount" type="number" placeholder="0" min="0" max="100" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" className="bg-accent hover:bg-accent/90">
                <Save className="mr-2 h-4 w-4" />
                Add Student
              </Button>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddStudent;
