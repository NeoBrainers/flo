import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Filter } from "lucide-react";

const MapView = () => {
  const floatLocations = [
    { id: 1, lat: 20, lon: 60, type: "core", active: true },
    { id: 2, lat: 15, lon: 65, type: "bgc", active: true },
    { id: 3, lat: 10, lon: 70, type: "core", active: true },
    { id: 4, lat: 5, lon: 75, type: "bgc", active: true },
    { id: 5, lat: 0, lon: 80, type: "core", active: false },
    { id: 6, lat: -5, lon: 85, type: "bgc", active: true },
    { id: 7, lat: -10, lon: 70, type: "core", active: true },
    { id: 8, lat: -15, lon: 75, type: "bgc", active: true },
  ];

  const mapStats = [
    { label: "Total Floats", value: 10 },
    { label: "Active Floats", value: 9 },
    { label: "BGC Enabled", value: 5 },
    { label: "Coverage Area", value: "2.1M km²" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main map area */}
            <div className="lg:col-span-3">
              <Card className="shadow-card">
                <CardHeader className="border-b">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <CardTitle className="text-lg">ARGO Float Locations - Indian Ocean</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Interactive map showing active and inactive ARGO floats with real-time positions
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  {/* Map container */}
                  <div className="relative h-96 bg-gradient-to-br from-blue-200 to-blue-400 overflow-hidden">
                    {/* Coordinate labels */}
                    <div className="absolute top-2 left-2 bg-gray-900 text-white px-2 py-1 rounded text-xs">
                      25°N, 70°E
                    </div>
                    <div className="absolute top-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-xs">
                      25°N, 95°E
                    </div>
                    <div className="absolute bottom-2 left-2 bg-gray-900 text-white px-2 py-1 rounded text-xs">
                      25°S, 70°E
                    </div>
                    <div className="absolute bottom-2 right-2 bg-gray-900 text-white px-2 py-1 rounded text-xs">
                      25°S, 95°E
                    </div>

                    {/* Float markers */}
                    {floatLocations.map((float) => (
                      <div
                        key={float.id}
                        className={`absolute w-3 h-3 rounded-full border-2 border-white cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                          float.type === "core" 
                            ? float.active ? "bg-blue-600" : "bg-gray-400"
                            : float.active ? "bg-green-600" : "bg-gray-400"
                        }`}
                        style={{
                          left: `${((float.lon - 70) / 25) * 100}%`,
                          top: `${((25 - float.lat) / 50) * 100}%`
                        }}
                        title={`Float ${float.id} - ${float.type} (${float.active ? 'Active' : 'Inactive'})`}
                      />
                    ))}

                    {/* Grid lines */}
                    <div className="absolute inset-0 opacity-20">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={`v-${i}`}
                          className="absolute h-full w-px bg-white"
                          style={{ left: `${(i / 5) * 100}%` }}
                        />
                      ))}
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={`h-${i}`}
                          className="absolute w-full h-px bg-white"
                          style={{ top: `${(i / 5) * 100}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="p-4 border-t bg-muted/30">
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white" />
                        <span>Core Float (Active)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-600 rounded-full border-2 border-white" />
                        <span>BGC Float (Active)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-400 rounded-full border-2 border-white" />
                        <span>Inactive Float</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Map Filters */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Map Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="core" defaultChecked />
                      <label htmlFor="core" className="text-sm font-medium">
                        Core Floats (5)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="bgc" defaultChecked />
                      <label htmlFor="bgc" className="text-sm font-medium">
                        BGC Floats (5)
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Time Filter</label>
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Time</SelectItem>
                        <SelectItem value="30d">Last 30 Days</SelectItem>
                        <SelectItem value="90d">Last 90 Days</SelectItem>
                        <SelectItem value="1y">Last Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Map Statistics */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-base">Map Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {mapStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="font-medium">{stat.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapView;