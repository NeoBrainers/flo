import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Waves, MessageCircle, Map, Search, BarChart3, GitCompare, Download } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import oceanPattern from "@/assets/ocean-pattern.jpg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { id: "overview", label: "Overview", icon: BarChart3, path: "/" },
    { id: "ai-chat", label: "AI Chat", icon: MessageCircle, path: "/ai-chat" },
    { id: "map", label: "Map View", icon: Map, path: "/map-view" },
    { id: "search", label: "Search", icon: Search, path: "/search" },
    { id: "visualize", label: "Visualize", icon: BarChart3, path: "/visualize" },
    { id: "compare", label: "Compare", icon: GitCompare, path: "/compare" },
    { id: "export", label: "Export", icon: Download, path: "/export" },
  ];

  return (
    <header 
      className="bg-card border-b shadow-card relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${oceanPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-6 py-4">
        {/* Top section with logo and status */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-ocean p-2 rounded-lg">
              <Waves className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ARGO Data Explorer</h1>
              <p className="text-sm text-muted-foreground">AI-Powered Indian Ocean Analysis Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-success-light text-success">
              Connected
            </Badge>
            <span className="text-sm text-muted-foreground">v1.0</span>
          </div>
        </div>

        {/* Navigation tabs */}
        <nav className="flex gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={location.pathname === item.path ? "default" : "ghost"}
              size="sm"
              className={`flex items-center gap-2 ${
                location.pathname === item.path
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;