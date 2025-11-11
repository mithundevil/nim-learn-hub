import DashboardLayout from "@/components/layout/DashboardLayout";
import { Home, Calendar, FileText, MessageSquare, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ParentFeedback = () => {
  const navItems = [
    { icon: Home, label: "Dashboard", href: "/parent" },
    { icon: Calendar, label: "Attendance", href: "/parent/attendance" },
    { icon: FileText, label: "Reports", href: "/parent/reports" },
    { icon: MessageSquare, label: "Mentor Feedback", href: "/parent/feedback" },
  ];

  const feedbackHistory = [
    {
      mentor: "Dr. Arun Singh",
      mentorInitials: "AS",
      date: "2025-01-10",
      week: "Week 4 - Jan 2025",
      rating: 4.8,
      feedback: "Rahul has shown excellent progress in React concepts. His project implementations are clean and follow best practices. He actively participates in class discussions and helps other students when needed. Keep up the great work!",
      strengths: ["Problem Solving", "Code Quality", "Team Collaboration"],
      improvements: ["Time Management", "Documentation"],
    },
    {
      mentor: "Dr. Arun Singh",
      mentorInitials: "AS",
      date: "2025-01-03",
      week: "Week 3 - Jan 2025",
      rating: 4.7,
      feedback: "Good understanding of Node.js and Express. Successfully completed all backend assignments. Shows initiative in learning additional topics beyond the curriculum. Would benefit from more practice in database optimization.",
      strengths: ["Backend Development", "Self Learning", "Attendance"],
      improvements: ["Database Optimization", "Testing"],
    },
    {
      mentor: "Dr. Arun Singh",
      mentorInitials: "AS",
      date: "2024-12-27",
      week: "Week 2 - Dec 2024",
      rating: 4.9,
      feedback: "Outstanding performance in the API development module. Completed bonus tasks and demonstrated excellent problem-solving abilities. Very responsive to feedback and implements suggestions effectively.",
      strengths: ["API Development", "Critical Thinking", "Responsiveness"],
      improvements: ["Frontend Styling", "UI/UX Concepts"],
    },
  ];

  const overallRating = 4.8;

  return (
    <DashboardLayout role="parent" navItems={navItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Mentor Feedback</h1>
          <p className="text-muted-foreground">View mentor's remarks and guidance</p>
        </div>

        {/* Overall Performance Card */}
        <Card className="glass border-white/20">
          <CardHeader>
            <CardTitle>Overall Mentor Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-accent">{overallRating}</div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(overallRating)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on {feedbackHistory.length} reviews</p>
                </div>
              </div>
              <Badge variant="default" className="text-lg px-4 py-2">Excellent Student</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Feedback History */}
        <div className="space-y-4">
          {feedbackHistory.map((item, index) => (
            <Card key={index} className="glass border-white/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-accent text-white">{item.mentorInitials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{item.mentor}</CardTitle>
                      <p className="text-sm text-muted-foreground">{item.week}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(item.rating)
                              ? "fill-accent text-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Feedback:</h4>
                  <p className="text-muted-foreground">{item.feedback}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-accent">Strengths:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.strengths.map((strength, i) => (
                        <Badge key={i} variant="default">{strength}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-muted-foreground">Areas to Improve:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.improvements.map((improvement, i) => (
                        <Badge key={i} variant="outline">{improvement}</Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <p className="text-sm text-muted-foreground">Submitted on {item.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ParentFeedback;
