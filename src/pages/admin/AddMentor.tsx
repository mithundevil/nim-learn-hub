import DashboardLayout from "@/components/layout/DashboardLayout";
import { TrendingUp, Users, BookOpen, FileText, CreditCard, Settings, Save, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddMentor = () => {
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
    toast.success("Mentor added successfully! Credentials sent via email.");
    setTimeout(() => navigate("/admin/mentors"), 1500);
  };

  const handleCancel = () => {
    navigate("/admin/mentors");
  };

  return (
    <DashboardLayout role="admin" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Add New Mentor</h1>
            <p className="text-muted-foreground">Register a new mentor to the academy</p>
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
                    <Input id="email" type="email" placeholder="mentor@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="qualification">Highest Qualification *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phd">Ph.D.</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Input id="experience" type="number" placeholder="5" min="0" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Biography</Label>
                  <Textarea id="bio" placeholder="Brief introduction about the mentor" rows={3} />
                </div>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle>Professional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Area of Specialization *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialization" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fullstack">Full Stack Development</SelectItem>
                        <SelectItem value="datascience">Data Science</SelectItem>
                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                        <SelectItem value="marketing">Digital Marketing</SelectItem>
                        <SelectItem value="mobile">Mobile App Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employmentType">Employment Type *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fulltime">Full-time</SelectItem>
                        <SelectItem value="parttime">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Skills & Expertise *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {["React", "Node.js", "Python", "JavaScript", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Docker"].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox id={skill} />
                        <label htmlFor={skill} className="text-sm font-medium cursor-pointer">
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                    <Input id="linkedIn" type="url" placeholder="https://linkedin.com/in/..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub Profile</Label>
                    <Input id="github" type="url" placeholder="https://github.com/..." />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assignment & Compensation */}
            <Card className="glass border-white/20">
              <CardHeader>
                <CardTitle>Assignment & Compensation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="joinDate">Joining Date *</Label>
                    <Input id="joinDate" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxBatches">Maximum Batches to Assign</Label>
                    <Input id="maxBatches" type="number" placeholder="3" min="1" max="10" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="salary">Monthly Salary (₹)</Label>
                    <Input id="salary" type="number" placeholder="50000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bankAccount">Bank Account Number</Label>
                    <Input id="bankAccount" placeholder="XXXX XXXX XXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea id="notes" placeholder="Any special notes or requirements" rows={3} />
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
                Add Mentor
              </Button>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddMentor;
