import DashboardLayout from "@/components/layout/DashboardLayout";
import { Users, BookOpen, CheckCircle, MessageCircle, FileText, BarChart3, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const MentorChat = () => {
  const navItems = [
    { icon: BarChart3, label: "Dashboard", href: "/mentor" },
    { icon: Users, label: "My Batches", href: "/mentor/batches" },
    { icon: CheckCircle, label: "Attendance", href: "/mentor/attendance" },
    { icon: FileText, label: "Tasks", href: "/mentor/tasks" },
    { icon: MessageCircle, label: "Student Chat", href: "/mentor/chat" },
    { icon: BookOpen, label: "Reports", href: "/mentor/reports" },
  ];

  const studentChats = [
    { id: "ST001", name: "Rahul Sharma", lastMessage: "I'm having trouble understanding React Context API", time: "10:35 AM", unread: 2 },
    { id: "ST005", name: "Vikram Singh", lastMessage: "Could you review my assignment?", time: "Yesterday", unread: 0 },
    { id: "ST008", name: "Anjali Verma", lastMessage: "Thank you for the explanation!", time: "2 days ago", unread: 0 },
  ];

  const messages = [
    { sender: "student", name: "Rahul Sharma", text: "Hi Sir! How can I help you today?", time: "10:30 AM" },
    { sender: "mentor", text: "Hi Rahul! I see you have a question about Context API?", time: "10:32 AM" },
    { sender: "student", name: "Rahul Sharma", text: "Yes, I'm having trouble understanding React Context API", time: "10:33 AM" },
    { sender: "mentor", text: "Sure! Let me explain. Context API is used for state management across components without prop drilling.", time: "10:35 AM" },
  ];

  return (
    <DashboardLayout role="mentor" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Student Chats</h1>
          <p className="text-muted-foreground">Respond to student queries and provide guidance</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Chat List */}
          <Card className="glass border-white/20 lg:col-span-1">
            <CardHeader>
              <CardTitle>Active Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {studentChats.map((chat) => (
                  <div
                    key={chat.id}
                    className="p-3 rounded-lg bg-secondary/50 border border-border hover:bg-secondary/70 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{chat.name}</p>
                          <p className="text-xs text-muted-foreground">{chat.id}</p>
                        </div>
                      </div>
                      {chat.unread > 0 && (
                        <Badge variant="default" className="h-5 min-w-5 text-xs">
                          {chat.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                    <p className="text-xs text-muted-foreground mt-1">{chat.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Chat */}
          <Card className="glass border-white/20 lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-accent" />
                Rahul Sharma (ST001) - FSW-24A
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="space-y-4 mb-4 h-[500px] overflow-y-auto p-4 bg-secondary/20 rounded-lg">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${message.sender === "mentor" ? "flex-row-reverse" : ""}`}
                  >
                    <Avatar>
                      <AvatarFallback>
                        {message.sender === "student" ? "RS" : "AS"}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`flex flex-col ${message.sender === "mentor" ? "items-end" : ""}`}>
                      {message.sender === "student" && (
                        <p className="text-sm font-medium mb-1">{message.name}</p>
                      )}
                      <div
                        className={`rounded-lg p-3 max-w-md ${
                          message.sender === "mentor"
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
                <Input placeholder="Type your response..." />
                <Button className="bg-accent hover:bg-accent/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MentorChat;
