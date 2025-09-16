import Header from "@/components/Header";
import MetricsGrid from "@/components/MetricsGrid";
import SystemOverview from "@/components/SystemOverview";
import SystemCapabilities from "@/components/SystemCapabilities";
import SystemStatus from "@/components/SystemStatus";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
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