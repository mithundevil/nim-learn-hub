import DashboardLayout from "@/components/layout/DashboardLayout";
import { BookOpen, Video, FileText, MessageCircle, Download, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const StudentChat = () => {
  const navItems = [
    { icon: BookOpen, label: "Dashboard", href: "/student" },
    { icon: Video, label: "Live Classes", href: "/student/classes" },
    { icon: FileText, label: "Assignments", href: "/student/tasks" },
    { icon: Download, label: "Resources", href: "/student/resources" },
    { icon: MessageCircle, label: "Chat with Mentor", href: "/student/chat" },
  ];

  const messages = [
    { sender: "mentor", name: "Dr. Arun Singh", text: "Hi Rahul! How can I help you today?", time: "10:30 AM" },
    { sender: "student", text: "I'm having trouble understanding React Context API", time: "10:32 AM" },
    { sender: "mentor", name: "Dr. Arun Singh", text: "Sure! Let me explain. Context API is used for state management across components without prop drilling.", time: "10:33 AM" },
    { sender: "student", text: "Could you share some examples?", time: "10:35 AM" },
    { sender: "mentor", name: "Dr. Arun Singh", text: "Absolutely! I'll upload a detailed example in the class materials section. Check it out.", time: "10:36 AM" },
  ];

  return (
    <DashboardLayout role="student" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Chat with Mentor</h1>
          <p className="text-muted-foreground">Ask questions and get help from your mentor</p>
        </div>

        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent" />
              Dr. Arun Singh - Full Stack Development Mentor
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Chat Messages */}
            <div className="space-y-4 mb-4 h-[500px] overflow-y-auto p-4 bg-secondary/20 rounded-lg">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${message.sender === "student" ? "flex-row-reverse" : ""}`}
                >
                  <Avatar>
                    <AvatarFallback>
                      {message.sender === "mentor" ? "AS" : "RS"}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`flex flex-col ${message.sender === "student" ? "items-end" : ""}`}>
                    {message.sender === "mentor" && (
                      <p className="text-sm font-medium mb-1">{message.name}</p>
                    )}
                    <div
                      className={`rounded-lg p-3 max-w-md ${
                        message.sender === "student"
                          ? "bg-accent text-accent-foreground"
                          : "bg-card"
                      }`}
                    >
                      <p>{message.text}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex gap-2">
              <Input placeholder="Type your message..." />
              <Button className="bg-accent hover:bg-accent/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Help Topics */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Quick Help Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-3">
              {["Assignment Help", "Technical Doubt", "Project Guidance", "Course Material", "Attendance Query", "Other"].map((topic) => (
                <Button key={topic} variant="outline">
                  {topic}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentChat;
