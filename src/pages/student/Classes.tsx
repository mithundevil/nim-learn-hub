import DashboardLayout from "@/components/layout/DashboardLayout";
import { BookOpen, Video, FileText, MessageCircle, Download, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Classes = () => {
  const navItems = [
    { icon: BookOpen, label: "Dashboard", href: "/student" },
    { icon: Video, label: "Live Classes", href: "/student/classes" },
    { icon: FileText, label: "Assignments", href: "/student/tasks" },
    { icon: Download, label: "Resources", href: "/student/resources" },
    { icon: MessageCircle, label: "Chat with Mentor", href: "/student/chat" },
  ];

  const upcomingClasses = [
    { title: "React Advanced Patterns", mentor: "Dr. Arun Singh", time: "Today, 4:00 PM", duration: "1.5 hrs", link: "#", status: "upcoming" },
    { title: "State Management with Redux", mentor: "Prof. Meera Kapoor", time: "Tomorrow, 10:00 AM", duration: "2 hrs", link: "#", status: "scheduled" },
    { title: "Project Discussion", mentor: "Dr. Arun Singh", time: "Jan 18, 3:00 PM", duration: "1 hr", link: "#", status: "scheduled" },
  ];

  const recordings = [
    { title: "React Hooks Deep Dive", date: "Jan 14, 2024", duration: "1.5 hrs", views: 45 },
    { title: "Component Lifecycle", date: "Jan 13, 2024", duration: "2 hrs", views: 52 },
    { title: "Context API & useReducer", date: "Jan 11, 2024", duration: "1.5 hrs", views: 48 },
  ];

  const materials = [
    { title: "React Hooks Cheat Sheet", type: "PDF", size: "2.5 MB" },
    { title: "Redux Toolkit Documentation", type: "PDF", size: "3.8 MB" },
    { title: "Project Starter Code", type: "ZIP", size: "12 MB" },
  ];

  return (
    <DashboardLayout role="student" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Live Classes</h1>
          <p className="text-muted-foreground">Join classes, watch recordings, and access materials</p>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Classes</TabsTrigger>
            <TabsTrigger value="recordings">Recordings</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingClasses.map((classItem, index) => (
              <Card key={index} className="glass border-white/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Video className="h-5 w-5 text-accent" />
                        <h3 className="text-lg font-semibold">{classItem.title}</h3>
                        <Badge variant={classItem.status === "upcoming" ? "default" : "secondary"}>
                          {classItem.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{classItem.mentor}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {classItem.time}
                        </span>
                        <span>Duration: {classItem.duration}</span>
                      </div>
                    </div>
                    <Button className="bg-accent hover:bg-accent/90" size="lg">
                      Join Class
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="recordings" className="space-y-4">
            {recordings.map((recording, index) => (
              <Card key={index} className="glass border-white/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{recording.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{recording.date}</span>
                        <span>Duration: {recording.duration}</span>
                        <span>{recording.views} views</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button className="bg-accent hover:bg-accent/90">Watch Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="materials" className="space-y-4">
            {materials.map((material, index) => (
              <Card key={index} className="glass border-white/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-accent" />
                      <div>
                        <p className="font-semibold">{material.title}</p>
                        <p className="text-sm text-muted-foreground">{material.type} • {material.size}</p>
                      </div>
                    </div>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
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

export default Classes;
