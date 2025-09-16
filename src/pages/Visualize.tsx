import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, Activity, Waves } from "lucide-react";

const Visualize = () => {
  // Mock data for depth profile chart
  const depthData = [
    { depth: 0, temperature: 29.5 },
    { depth: 100, temperature: 28.2 },
    { depth: 200, temperature: 26.8 },
    { depth: 500, temperature: 22.1 },
    { depth: 1000, temperature: 16.1 },
    { depth: 1500, temperature: 9.1 },
    { depth: 2000, temperature: 2.1 },
  ];

  const salinityData = [
    { depth: 0, salinity: 34.1 },
    { depth: 100, salinity: 34.45 },
    { depth: 200, salinity: 34.8 },
    { depth: 500, salinity: 34.8 },
    { depth: 1000, salinity: 34.8 },
    { depth: 1500, salinity: 35.15 },
    { depth: 2000, salinity: 35.4 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Control Panel */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Data Visualization Controls
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Configure parameters and time ranges for oceanographic data analysis
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Float ID</label>
                  <Select defaultValue="2902734">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2902734">2902734 (Core)</SelectItem>
                      <SelectItem value="2902851">2902851 (BGC)</SelectItem>
                      <SelectItem value="2903156">2903156 (BGC)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Parameter</label>
                  <Select defaultValue="temperature">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="temperature">Temperature</SelectItem>
                      <SelectItem value="salinity">Salinity</SelectItem>
                      <SelectItem value="pressure">Pressure</SelectItem>
                      <SelectItem value="oxygen">Dissolved Oxygen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Time Range</label>
                  <Select defaultValue="30d">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7d">Last 7 Days</SelectItem>
                      <SelectItem value="30d">Last 30 Days</SelectItem>
                      <SelectItem value="90d">Last 90 Days</SelectItem>
                      <SelectItem value="1y">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-primary hover:bg-primary-hover">
                    Update Visualization
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visualization Tabs */}
          <Tabs defaultValue="profiles" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profiles">Depth Profiles</TabsTrigger>
              <TabsTrigger value="timeseries">Time Series</TabsTrigger>
              <TabsTrigger value="scatter">Scatter Plots</TabsTrigger>
              <TabsTrigger value="bgc">BGC Parameters</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profiles" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Temperature Profile */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-red-500" />
                      Temperature Profile
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Vertical temperature distribution (Float 2902734)
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4 relative">
                      {/* Y-axis (Depth) */}
                      <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-xs text-muted-foreground">
                        <span>0</span>
                        <span>500</span>
                        <span>1000</span>
                        <span>1500</span>
                        <span>2000</span>
                      </div>
                      
                      {/* X-axis (Temperature) */}
                      <div className="absolute bottom-2 left-8 right-4 flex justify-between text-xs text-muted-foreground">
                        <span>2.1</span>
                        <span>9.1</span>
                        <span>16.1</span>
                        <span>23.1</span>
                        <span>29.5</span>
                      </div>

                      {/* Profile line */}
                      <svg className="absolute inset-4" viewBox="0 0 300 250">
                        <polyline
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="3"
                          points="250,10 240,30 220,50 180,90 120,130 60,170 20,210"
                        />
                        {depthData.map((point, index) => (
                          <circle
                            key={index}
                            cx={250 - (point.temperature / 29.5) * 230}
                            cy={10 + (point.depth / 2000) * 200}
                            r="4"
                            fill="#ef4444"
                            className="opacity-80"
                          />
                        ))}
                      </svg>

                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                        Temperature (°C)
                      </div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-muted-foreground">
                        Depth (m)
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Salinity Profile */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Waves className="h-4 w-4 text-blue-500" />
                      Salinity Profile
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Vertical salinity distribution (Float 2902734)
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 relative">
                      {/* Y-axis (Depth) */}
                      <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-xs text-muted-foreground">
                        <span>0</span>
                        <span>500</span>
                        <span>1000</span>
                        <span>1500</span>
                        <span>2000</span>
                      </div>
                      
                      {/* X-axis (Salinity) */}
                      <div className="absolute bottom-2 left-8 right-4 flex justify-between text-xs text-muted-foreground">
                        <span>34.1</span>
                        <span>34.45</span>
                        <span>34.8</span>
                        <span>35.15</span>
                        <span>35.4</span>
                      </div>

                      {/* Profile line */}
                      <svg className="absolute inset-4" viewBox="0 0 300 250">
                        <polyline
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          points="20,10 80,30 150,50 150,90 150,130 190,170 230,210"
                        />
                        {salinityData.map((point, index) => (
                          <circle
                            key={index}
                            cx={20 + ((point.salinity - 34.1) / 1.3) * 210}
                            cy={10 + (point.depth / 2000) * 200}
                            r="4"
                            fill="#3b82f6"
                            className="opacity-80"
                          />
                        ))}
                      </svg>

                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                        Salinity (PSU)
                      </div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-muted-foreground">
                        Depth (m)
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="timeseries">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <Activity className="h-12 w-12 text-muted-foreground mx-auto" />
                    <h3 className="text-lg font-medium">Time Series Analysis</h3>
                    <p className="text-muted-foreground">
                      Time series visualizations will be displayed here. Select parameters and time ranges to view temporal trends.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scatter">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto" />
                    <h3 className="text-lg font-medium">Scatter Plot Analysis</h3>
                    <p className="text-muted-foreground">
                      Correlation plots and parameter relationships will be shown here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bgc">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <Waves className="h-12 w-12 text-muted-foreground mx-auto" />
                    <h3 className="text-lg font-medium">BGC Parameters</h3>
                    <p className="text-muted-foreground">
                      Biogeochemical parameter visualizations including chlorophyll, oxygen, and pH profiles.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Visualize;