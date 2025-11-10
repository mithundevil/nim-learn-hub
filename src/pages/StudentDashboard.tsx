import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Video,
  FileText,
  MessageCircle,
  Download,
  Calendar
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const StudentDashboard = () => {
  const navItems = [
    { icon: BookOpen, label: "Dashboard", href: "/student" },
    { icon: Video, label: "Live Classes", href: "/student/classes" },
    { icon: FileText, label: "Assignments", href: "/student/assignments" },
    { icon: Download, label: "Resources", href: "/student/resources" },
    { icon: MessageCircle, label: "Chat with Mentor", href: "/student/chat" },
  ];

  const stats = [
    { title: "Attendance", value: "92%", icon: CheckCircle },
    { title: "Tasks Completed", value: "18/22", icon: FileText },
    { title: "Pending Tasks", value: "4", icon: Clock },
    { title: "Course Progress", value: "68%", icon: BookOpen },
  ];

  const upcomingClasses = [
    { title: "React Advanced Patterns", mentor: "Dr. Arun Singh", time: "Today, 4:00 PM", duration: "1.5 hrs", link: "#" },
    { title: "State Management with Redux", mentor: "Prof. Meera Kapoor", time: "Tomorrow, 10:00 AM", duration: "2 hrs", link: "#" },
    { title: "Project Discussion", mentor: "Dr. Arun Singh", time: "Jan 18, 3:00 PM", duration: "1 hr", link: "#" },
  ];

  const recentTasks = [
    { title: "Build a Todo App with React Hooks", deadline: "Jan 18, 2024", status: "pending", marks: null },
    { title: "API Integration Assignment", deadline: "Jan 15, 2024", status: "submitted", marks: null },
    { title: "CSS Flexbox Layout Challenge", deadline: "Jan 12, 2024", status: "graded", marks: 95 },
  ];

  const courseTopic = [
    { topic: "JavaScript Fundamentals", progress: 100, status: "completed" },
    { topic: "React Basics", progress: 100, status: "completed" },
    { topic: "React Hooks & Context", progress: 80, status: "in-progress" },
    { topic: "State Management", progress: 45, status: "in-progress" },
    { topic: "API Integration", progress: 0, status: "not-started" },
  ];

  return (
    <DashboardLayout role="student" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome, Rahul! 👋</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Upcoming Classes - 2 columns */}
          <Card className="glass border-white/20 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-accent" />
                Upcoming Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingClasses.map((classItem, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 border border-border">
                    <div className="space-y-1">
                      <p className="font-medium">{classItem.title}</p>
                      <p className="text-sm text-muted-foreground">{classItem.mentor}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {classItem.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {classItem.duration}
                        </span>
                      </div>
                    </div>
                    <Button variant="default" className="bg-accent hover:bg-accent/90">
                      Join Class
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Course Progress - 1 column */}
          <Card className="glass border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                Course Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courseTopic.map((topic, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{topic.topic}</p>
                      <Badge variant={
                        topic.status === "completed" ? "default" : 
                        topic.status === "in-progress" ? "secondary" : 
                        "outline"
                      }>
                        {topic.progress}%
                      </Badge>
                    </div>
                    <Progress value={topic.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Tasks */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              Recent Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTasks.map((task, index) => (
                <div key={index} className="flex items-center justify-between pb-4 border-b last:border-0">
                  <div className="space-y-1">
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground">Deadline: {task.deadline}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {task.marks && (
                      <div className="text-right">
                        <p className="text-2xl font-bold text-accent">{task.marks}</p>
                        <p className="text-xs text-muted-foreground">marks</p>
                      </div>
                    )}
                    <Badge variant={
                      task.status === "graded" ? "default" :
                      task.status === "submitted" ? "secondary" :
                      "outline"
                    }>
                      {task.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
