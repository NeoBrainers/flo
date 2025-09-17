import Header from "@/components/Header";
import MetricsGrid from "@/components/MetricsGrid";
import SystemOverview from "@/components/SystemOverview";
import SystemCapabilities from "@/components/SystemCapabilities";
import SystemStatus from "@/components/SystemStatus";
import { useAuth } from "@/contexts/AuthContext";
import { useRealtimeFloats } from "@/hooks/useArgoData";
import { AuthForm } from "@/components/AuthForm";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const { isConnected } = useRealtimeFloats();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <LoadingSpinner size="lg" />
          <p className="text-muted-foreground">Loading ARGO Data Explorer...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {!isConnected && (
            <div className="mb-6 bg-warning/10 border border-warning/20 rounded-lg p-4 text-warning">
              <p className="text-sm flex items-center gap-2">
                <span className="h-2 w-2 bg-warning rounded-full animate-pulse"></span>
                Real-time updates are currently unavailable. Data may not be up to date.
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main content area */}
            <div className="lg:col-span-3 space-y-6">
              {/* Metrics */}
              <MetricsGrid />
              
              {/* System Overview */}
              <SystemOverview />
              
              {/* System Capabilities */}
              <SystemCapabilities />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SystemStatus />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;