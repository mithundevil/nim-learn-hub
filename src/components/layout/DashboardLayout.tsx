import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  FileText, 
  CreditCard, 
  Settings,
  Menu,
  X,
  LogOut,
  GraduationCap
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href?: string;
}

interface DashboardLayoutProps {
  children: ReactNode;
  role: "admin" | "student" | "mentor" | "parent";
  navItems: NavItem[];
}

const DashboardLayout = ({ children, role, navItems }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-secondary">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "w-64 bg-sidebar shadow-xl"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center gap-3 p-6 border-b border-sidebar-border">
            <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
              <GraduationCap className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-sidebar-foreground">NIM Academy</h2>
              <p className="text-xs text-sidebar-foreground/70 capitalize">{role} Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    onClick={() => item.href && navigate(item.href)}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-sidebar-border">
            <Button
              variant="ghost"
              className="w-full justify-start text-sidebar-foreground hover:bg-destructive hover:text-destructive-foreground"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={cn(
          "transition-all duration-300",
          sidebarOpen ? "ml-64" : "ml-0"
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-30 bg-card border-b border-border shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">Welcome back!</p>
                <p className="text-xs text-muted-foreground capitalize">{role} Dashboard</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
