import DashboardLayout from "@/components/layout/DashboardLayout";
import { Users, BookOpen, CheckCircle, MessageCircle, FileText, BarChart3, Upload, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MentorTasks = () => {
  const navItems = [
    { icon: BarChart3, label: "Dashboard", href: "/mentor" },
    { icon: Users, label: "My Batches", href: "/mentor/batches" },
    { icon: CheckCircle, label: "Attendance", href: "/mentor/attendance" },
    { icon: FileText, label: "Tasks", href: "/mentor/tasks" },
    { icon: MessageCircle, label: "Student Chat", href: "/mentor/chat" },
    { icon: BookOpen, label: "Reports", href: "/mentor/reports" },
  ];

  const assignedTasks = [
    { title: "React Hooks Assignment", batch: "FSW-24A", assigned: "Jan 10, 2024", deadline: "Jan 18, 2024", submissions: "18/25" },
    { title: "Redux State Management Project", batch: "FSW-24A", assigned: "Jan 12, 2024", deadline: "Jan 20, 2024", submissions: "5/25" },
  ];

  const pendingReviews = [
    { student: "Rahul Sharma", task: "API Integration Assignment", submittedOn: "Jan 15, 2024", batch: "FSW-24A" },
    { student: "Vikram Singh", task: "CSS Flexbox Layout", submittedOn: "Jan 14, 2024", batch: "FSW-24A" },
    { student: "Anjali Verma", task: "JavaScript ES6 Features", submittedOn: "Jan 14, 2024", batch: "FSW-24A" },
  ];

  return (
    <DashboardLayout role="mentor" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Tasks & Assignments</h1>
            <p className="text-muted-foreground">Upload tasks and review student submissions</p>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Upload className="mr-2 h-4 w-4" />
            Upload New Task
          </Button>
        </div>

        <Tabs defaultValue="assigned" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="assigned">Assigned Tasks</TabsTrigger>
            <TabsTrigger value="reviews">Pending Reviews ({pendingReviews.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="assigned" className="space-y-4">
            {assignedTasks.map((task, index) => (
              <Card key={index} className="glass border-white/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{task.title}</h3>
                        <Badge variant="default">{task.batch}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Assigned: {task.assigned}</span>
                        <span>Deadline: {task.deadline}</span>
                      </div>
                      <p className="text-sm">
                        Submissions: <span className="font-bold text-accent">{task.submissions}</span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">Edit</Button>
                      <Button className="bg-accent hover:bg-accent/90">View Submissions</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            {pendingReviews.map((review, index) => (
              <Card key={index} className="glass border-white/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold">{review.student}</h3>
                        <Badge variant="secondary">{review.batch}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.task}</p>
                      <p className="text-sm text-muted-foreground">Submitted on {review.submittedOn}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button className="bg-accent hover:bg-accent/90">Grade</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Task Upload Template */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Upload New Assignment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Click "Upload New Task" to create and assign a new task to your students. 
                You can upload files, set deadlines, and specify submission requirements.
              </p>
              <div className="flex gap-2">
                <Button className="bg-accent hover:bg-accent/90">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload New Task
                </Button>
                <Button variant="outline">View Templates</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MentorTasks;
