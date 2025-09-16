import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MetricsGrid = () => {
  const metrics = [
    {
      title: "Active Floats",
      value: "2,847",
      color: "text-primary",
      bgColor: "bg-primary-light",
    },
    {
      title: "Profiles",
      value: "156,234",
      color: "text-success",
      bgColor: "bg-success-light",
    },
    {
      title: "BGC Floats",
      value: "847",
      color: "text-info",
      bgColor: "bg-info-light",
    },
    {
      title: "Data Volume",
      value: "12.5TB",
      color: "text-warning",
      bgColor: "bg-warning-light",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
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