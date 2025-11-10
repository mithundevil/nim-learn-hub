import DashboardLayout from "@/components/layout/DashboardLayout";
import { BookOpen, Video, FileText, MessageCircle, Download, Upload, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tasks = () => {
  const navItems = [
    { icon: BookOpen, label: "Dashboard", href: "/student" },
    { icon: Video, label: "Live Classes", href: "/student/classes" },
    { icon: FileText, label: "Assignments", href: "/student/tasks" },
    { icon: Download, label: "Resources", href: "/student/resources" },
    { icon: MessageCircle, label: "Chat with Mentor", href: "/student/chat" },
  ];

  const pendingTasks = [
    { title: "Build a Todo App with React Hooks", deadline: "Jan 18, 2024", daysLeft: 3, description: "Create a functional todo application using React Hooks" },
    { title: "Redux State Management Project", deadline: "Jan 20, 2024", daysLeft: 5, description: "Implement Redux in a shopping cart application" },
  ];

  const submittedTasks = [
    { title: "API Integration Assignment", submittedOn: "Jan 15, 2024", status: "Under Review" },
    { title: "CSS Flexbox Layout Challenge", submittedOn: "Jan 12, 2024", status: "Graded", marks: 95 },
  ];

  const completedTasks = [
    { title: "JavaScript Fundamentals Quiz", completedOn: "Jan 10, 2024", marks: 88 },
    { title: "HTML5 Semantic Elements Project", completedOn: "Jan 8, 2024", marks: 92 },
    { title: "CSS Grid Layout Assignment", completedOn: "Jan 5, 2024", marks: 85 },
  ];

  return (
    <DashboardLayout role="student" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Assignments & Tasks</h1>
          <p className="text-muted-foreground">View and submit your assignments</p>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">Pending ({pendingTasks.length})</TabsTrigger>
            <TabsTrigger value="submitted">Submitted ({submittedTasks.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({completedTasks.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingTasks.map((task, index) => (
              <Card key={index} className="glass border-white/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle>{task.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      <Clock className="mr-1 h-3 w-3" />
                      {task.daysLeft} days left
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Deadline: {task.deadline}</p>
                    <Button className="bg-accent hover:bg-accent/90">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Submission
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="submitted" className="space-y-4">
            {submittedTasks.map((task, index) => (
              <Card key={index} className="glass border-white/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">Submitted on {task.submittedOn}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {task.marks && (
                        <div className="text-center">
                          <p className="text-2xl font-bold text-accent">{task.marks}</p>
                          <p className="text-xs text-muted-foreground">marks</p>
                        </div>
                      )}
                      <Badge variant={task.status === "Graded" ? "default" : "secondary"}>
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {completedTasks.map((task, index) => (
              <Card key={index} className="glass border-white/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">Completed on {task.completedOn}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">{task.marks}</p>
                        <p className="text-xs text-muted-foreground">marks</p>
                      </div>
                      <Button variant="outline">View Feedback</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Tasks;
