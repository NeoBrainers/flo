import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Database, Cpu, RefreshCw, HardDrive, Clock } from "lucide-react";

const SystemStatus = () => {
  const systemItems = [
    {
      icon: Database,
      label: "Database",
      status: "Online",
      variant: "success" as const,
    },
    {
      icon: Cpu,
      label: "AI Models",
      status: "Ready",
      variant: "info" as const,
    },
    {
      icon: RefreshCw,
      label: "Data Sync",
      status: "Active",
      variant: "success" as const,
    },
    {
      icon: HardDrive,
      label: "Storage",
      status: "78%",
      variant: "warning" as const,
    },
  ];

  const recentActivity = [
    { activity: "Data ingestion", time: "2 min ago" },
    { activity: "Profile analysis", time: "1 min ago" },
    { activity: "Vector indexing", time: "12 min ago" },
    { activity: "Model inference", time: "18 min ago" },
  ];

  const dataCoverage = [
    { parameter: "Temperature", coverage: 100 },
    { parameter: "Salinity", coverage: 98 },
    { parameter: "BGC Parameters", coverage: 65 },
  ];

  return (
    <div className="space-y-6">
      {/* System Status */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-base">System Status</CardTitle>
          <p className="text-sm text-muted-foreground">Real-time system performance metrics</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {systemItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <Badge 
                variant="secondary" 
                className={
                  item.variant === "success" ? "bg-success-light text-success" :
                  item.variant === "info" ? "bg-info-light text-info" :
                  item.variant === "warning" ? "bg-warning-light text-warning" :
                  ""
                }
              >
                {item.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-base">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentActivity.map((item, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span>{item.activity}</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {item.time}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Data Coverage */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-base">Data Coverage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {dataCoverage.map((item) => (
            <div key={item.parameter} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{item.parameter}</span>
                <span className="font-medium">{item.coverage}%</span>
              </div>
              <Progress value={item.coverage} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemStatus;