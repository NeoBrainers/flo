import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useDashboardMetrics } from "@/hooks/useArgoData";

const MetricsGrid = () => {
  const { data: metrics, isLoading, error } = useDashboardMetrics();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="shadow-card">
            <CardHeader className="pb-2">
              <Skeleton className="h-4 w-20" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-1 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card col-span-full">
          <CardContent className="pt-6">
            <p className="text-destructive">Error loading metrics: {error.message}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const metricsData = [
    {
      title: "Active Floats",
      value: metrics?.activeFloats?.toLocaleString() || "0",
      color: "text-primary",
      bgColor: "bg-primary-light",
    },
    {
      title: "Profiles",
      value: metrics?.totalProfiles?.toLocaleString() || "0",
      color: "text-success",
      bgColor: "bg-success-light",
    },
    {
      title: "BGC Floats",
      value: metrics?.bgcFloats?.toLocaleString() || "0",
      color: "text-info",
      bgColor: "bg-info-light",
    },
    {
      title: "Data Volume",
      value: metrics?.dataVolume || "0TB",
      color: "text-warning",
      bgColor: "bg-warning-light",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metricsData.map((metric) => (
        <Card key={metric.title} className="shadow-card hover:shadow-ocean transition-all duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${metric.color} mb-2`}>
              {metric.value}
            </div>
            <div className={`w-full h-1 ${metric.bgColor} rounded-full`} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricsGrid;