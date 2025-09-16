import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SystemOverview = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">System Overview</CardTitle>
        <p className="text-muted-foreground">
          AI-powered conversational system for ARGO float data analysis in the Indian Ocean
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Our platform provides comprehensive analysis tools for oceanographic data collected by 
          autonomous ARGO floats throughout the Indian Ocean. Access real-time measurements, 
          historical trends, and AI-powered insights to support marine research and climate studies.
        </p>
      </CardContent>
    </Card>
  );
};

export default SystemOverview;