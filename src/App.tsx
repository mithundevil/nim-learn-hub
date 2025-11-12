import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import NotFound from "./pages/NotFound";

// Admin Pages
import Students from "./pages/admin/Students";
import Mentors from "./pages/admin/Mentors";
import Payments from "./pages/admin/Payments";
import Reports from "./pages/admin/Reports";
import Certificates from "./pages/admin/Certificates";
import AdminSettings from "./pages/admin/AdminSettings";

// Student Pages
import Classes from "./pages/student/Classes";
import Tasks from "./pages/student/Tasks";
import StudentChat from "./pages/student/StudentChat";
import StudentPayments from "./pages/student/StudentPayments";
import StudentReport from "./pages/student/StudentReport";
import StudentCertificate from "./pages/student/StudentCertificate";

// Mentor Pages
import MentorDashboard from "./pages/mentor/MentorDashboard";
import Batches from "./pages/mentor/Batches";
import Attendance from "./pages/mentor/Attendance";
import MentorTasks from "./pages/mentor/MentorTasks";
import MentorChat from "./pages/mentor/MentorChat";
import MentorReports from "./pages/mentor/MentorReports";

// Parent Pages
import ParentDashboard from "./pages/parent/ParentDashboard";
import ParentAttendance from "./pages/parent/ParentAttendance";
import ParentReports from "./pages/parent/ParentReports";
import ParentFeedback from "./pages/parent/ParentFeedback";

// Admin Sub-Pages
import AddStudent from "./pages/admin/AddStudent";
import AddMentor from "./pages/admin/AddMentor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Auth />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/students" element={<ProtectedRoute allowedRoles={['admin']}><Students /></ProtectedRoute>} />
            <Route path="/admin/mentors" element={<ProtectedRoute allowedRoles={['admin']}><Mentors /></ProtectedRoute>} />
            <Route path="/admin/payments" element={<ProtectedRoute allowedRoles={['admin']}><Payments /></ProtectedRoute>} />
            <Route path="/admin/reports" element={<ProtectedRoute allowedRoles={['admin']}><Reports /></ProtectedRoute>} />
            <Route path="/admin/certificates" element={<ProtectedRoute allowedRoles={['admin']}><Certificates /></ProtectedRoute>} />
            <Route path="/admin/settings" element={<ProtectedRoute allowedRoles={['admin']}><AdminSettings /></ProtectedRoute>} />
            <Route path="/admin/students/add" element={<ProtectedRoute allowedRoles={['admin']}><AddStudent /></ProtectedRoute>} />
            <Route path="/admin/mentors/add" element={<ProtectedRoute allowedRoles={['admin']}><AddMentor /></ProtectedRoute>} />
            
            {/* Student Routes */}
            <Route path="/student" element={<ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>} />
            <Route path="/student/classes" element={<ProtectedRoute allowedRoles={['student']}><Classes /></ProtectedRoute>} />
            <Route path="/student/tasks" element={<ProtectedRoute allowedRoles={['student']}><Tasks /></ProtectedRoute>} />
            <Route path="/student/resources" element={<ProtectedRoute allowedRoles={['student']}><Classes /></ProtectedRoute>} />
            <Route path="/student/chat" element={<ProtectedRoute allowedRoles={['student']}><StudentChat /></ProtectedRoute>} />
            <Route path="/student/payments" element={<ProtectedRoute allowedRoles={['student']}><StudentPayments /></ProtectedRoute>} />
            <Route path="/student/report" element={<ProtectedRoute allowedRoles={['student']}><StudentReport /></ProtectedRoute>} />
            <Route path="/student/certificate" element={<ProtectedRoute allowedRoles={['student']}><StudentCertificate /></ProtectedRoute>} />
            
            {/* Mentor Routes */}
            <Route path="/mentor" element={<ProtectedRoute allowedRoles={['mentor']}><MentorDashboard /></ProtectedRoute>} />
            <Route path="/mentor/batches" element={<ProtectedRoute allowedRoles={['mentor']}><Batches /></ProtectedRoute>} />
            <Route path="/mentor/attendance" element={<ProtectedRoute allowedRoles={['mentor']}><Attendance /></ProtectedRoute>} />
            <Route path="/mentor/tasks" element={<ProtectedRoute allowedRoles={['mentor']}><MentorTasks /></ProtectedRoute>} />
            <Route path="/mentor/chat" element={<ProtectedRoute allowedRoles={['mentor']}><MentorChat /></ProtectedRoute>} />
            <Route path="/mentor/reports" element={<ProtectedRoute allowedRoles={['mentor']}><MentorReports /></ProtectedRoute>} />
            
            {/* Parent Routes */}
            <Route path="/parent" element={<ProtectedRoute allowedRoles={['parent']}><ParentDashboard /></ProtectedRoute>} />
            <Route path="/parent/attendance" element={<ProtectedRoute allowedRoles={['parent']}><ParentAttendance /></ProtectedRoute>} />
            <Route path="/parent/reports" element={<ProtectedRoute allowedRoles={['parent']}><ParentReports /></ProtectedRoute>} />
            <Route path="/parent/feedback" element={<ProtectedRoute allowedRoles={['parent']}><ParentFeedback /></ProtectedRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
