import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GitCompare, FileText, BarChart3, Download } from "lucide-react";

const Compare = () => {
  const selectedProfiles = [
    {
      floatId: "2902734",
      date: "Sep 14",
      type: "CORE",
      location: "10.5°S, 80.2°E",
      color: "#ef4444",
      selected: true
    },
    {
      floatId: "2902851", 
      date: "Sep 13",
      type: "BGC",
      location: "8.3°S, 85.7°E", 
      color: "#3b82f6",
      selected: true
    },
    {
      floatId: "2903156",
      date: "Sep 12", 
      type: "BGC",
      location: "15.2°S, 82.4°E",
      color: "#10b981",
      selected: false
    },
    {
      floatId: "2902734",
      date: "Aug 15",
      type: "CORE", 
      location: "10.8°S, 79.9°E",
      color: "#f59e0b",
      selected: false
    }
  ];

  const comparisonStats = [
    {
      profile: "Float 2902734 - Sep 14",
      tempRange: "3.1 - 28.5",
      saltRange: "34.2 - 35.3", 
      avgTemp: "14.8",
      avgSalt: "34.8",
      thermocline: "200"
    },
    {
      profile: "Float 2902851 - Sep 13", 
      tempRange: "3.5 - 29.1",
      saltRange: "34.0 - 35.1",
      avgTemp: "15.5", 
      avgSalt: "34.6",
      thermocline: "200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Profile Selection */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <GitCompare className="h-5 w-5" />
                Profile Comparison
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Compare multiple ARGO profiles to analyze oceanographic differences and trends
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-medium">Select Profiles to Compare</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProfiles.map((profile, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <Checkbox 
                        checked={profile.selected}
                        onChange={() => {}}
                      />
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: profile.color }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Float {profile.floatId}</span>
                          <Badge variant={profile.type === "CORE" ? "secondary" : "default"}>
                            {profile.type}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {profile.date} • {profile.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comparison controls */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Parameter</label>
                      <Select defaultValue="temperature">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="temperature">Temperature</SelectItem>
                          <SelectItem value="salinity">Salinity</SelectItem>
                          <SelectItem value="density">Density</SelectItem>
                          <SelectItem value="oxygen">Dissolved Oxygen</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Comparison Type</label>
                      <Select defaultValue="overlay">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="overlay">Overlay Profiles</SelectItem>
                          <SelectItem value="difference">Show Differences</SelectItem>
                          <SelectItem value="statistics">Statistical Analysis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Checkbox id="stats" />
                    <label htmlFor="stats" className="text-sm font-medium">Show Statistics</label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main comparison chart */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-base">Profile Comparison - Temperature</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Comparing 2 profiles across depth
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-96 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 relative">
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

                    {/* Profile lines */}
                    <svg className="absolute inset-4" viewBox="0 0 300 300">
                      {/* First profile (red) */}
                      <polyline
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="3"
                        points="250,10 240,40 220,70 180,120 120,170 60,220 20,270"
                      />
                      {/* Second profile (blue) */}
                      <polyline
                        fill="none"
                        stroke="#3b82f6" 
                        strokeWidth="3"
                        points="260,10 250,40 230,70 190,120 130,170 70,220 30,270"
                      />
                    </svg>

                    {/* Legend */}
                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded text-xs space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-red-500" />
                        <span>Float 2902734 - Sep 14</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-0.5 bg-blue-500" />
                        <span>Float 2902851 - Sep 13</span>
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                      Temperature (°C)
                    </div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs text-muted-foreground">
                      Depth (m)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions sidebar */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Export Chart
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    AI Analysis
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Comparison Statistics */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-base">Comparison Statistics</CardTitle>
              <p className="text-sm text-muted-foreground">
                Statistical analysis of selected profiles
              </p>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Profile</TableHead>
                    <TableHead>Temp Range (°C)</TableHead>
                    <TableHead>Salt Range (PSU)</TableHead>
                    <TableHead>Avg Temp (°C)</TableHead>
                    <TableHead>Avg Salt (PSU)</TableHead>
                    <TableHead>Thermocline (m)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonStats.map((stat, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{stat.profile}</TableCell>
                      <TableCell>{stat.tempRange}</TableCell>
                      <TableCell>{stat.saltRange}</TableCell>
                      <TableCell>{stat.avgTemp}</TableCell>
                      <TableCell>{stat.avgSalt}</TableCell>
                      <TableCell>{stat.thermocline}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Compare;