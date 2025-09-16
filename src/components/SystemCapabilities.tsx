import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const SystemCapabilities = () => {
  const capabilities = [
    "Natural Language Query Interface",
    "Multi-parameter Analysis",
    "Profile Comparison Tools",
    "Real-time Data Visualization",
    "Geospatial Mapping",
    "NetCDF Data Export",
  ];

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">System Capabilities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="bg-success-light p-1 rounded-full">
                <Check className="h-3 w-3 text-success" />
              </div>
              <span className="text-sm font-medium">{capability}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemCapabilities;