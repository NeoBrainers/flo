import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search as SearchIcon, Download, Eye, MapPin, ExternalLink } from "lucide-react";

const Search = () => {
  const searchResults = [
    {
      floatId: "2902734",
      type: "CORE",
      status: "Active",
      location: "10.5°S, 80.2°E", 
      lastProfile: "2024-09-14",
      profiles: 342,
      surfaceData: "28.5°C, 34.2 PSU",
      parameters: ["temperature", "salinity", "pressure"]
    },
    {
      floatId: "2902851",
      type: "BGC",
      status: "Active", 
      location: "8.3°S, 85.7°E",
      lastProfile: "2024-09-13",
      profiles: 298,
      surfaceData: "29.1°C, 34.3 PSU",
      parameters: ["temperature", "salinity", "pressure", "+4"]
    },
    {
      floatId: "2902923",
      type: "CORE",
      status: "Active",
      location: "5.1°S, 78.9°E",
      lastProfile: "2024-09-15", 
      profiles: 456,
      surfaceData: "29.8°C, 34.0 PSU",
      parameters: ["temperature", "salinity", "pressure"]
    },
    {
      floatId: "2903156",
      type: "BGC", 
      status: "Active",
      location: "15.2°S, 82.4°E",
      lastProfile: "2024-09-12",
      profiles: 234,
      surfaceData: "26.2°C, 34.8 PSU", 
      parameters: ["temperature", "salinity", "pressure", "+3"]
    },
    {
      floatId: "2903201",
      type: "CORE",
      status: "Active",
      location: "12.8°S, 88.1°E",
      lastProfile: "2024-09-14",
      profiles: 387,
      surfaceData: "27.9°C, 34.4 PSU",
      parameters: ["temperature", "salinity", "pressure"]
    },
    {
      floatId: "2903287", 
      type: "BGC",
      status: "Inactive",
      location: "18.5°S, 76.3°E",
      lastProfile: "2024-08-28",
      profiles: 523,
      surfaceData: "24.1°C, 34.1 PSU",
      parameters: ["temperature", "salinity", "pressure", "+2"]
    }
  ];

  const summaryStats = [
    { label: "Active Floats", value: 5, color: "text-success" },
    { label: "BGC Floats", value: 3, color: "text-info" },
    { label: "Total Profiles", value: "2,240", color: "text-primary" },
    { label: "Avg Depth", value: "2000m", color: "text-warning" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Search Interface */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <SearchIcon className="h-5 w-5" />
                ARGO Float Search
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Search and filter ARGO floats based on location, type, and data availability
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Search filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Float ID</label>
                  <Input placeholder="Enter float ID..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Region</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="arabian">Arabian Sea</SelectItem>
                      <SelectItem value="bay">Bay of Bengal</SelectItem>
                      <SelectItem value="southern">Southern Ocean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Float Type</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="core">Core</SelectItem>
                      <SelectItem value="bgc">BGC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Data recency and search button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Data Recency</label>
                    <Select defaultValue="30d">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30d">Last 30 Days</SelectItem>
                        <SelectItem value="90d">Last 90 Days</SelectItem>
                        <SelectItem value="1y">Last Year</SelectItem>
                        <SelectItem value="all">All Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">&nbsp;</label>
                    <div className="text-sm text-muted-foreground">BGC Parameters Only</div>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary-hover">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search Floats
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Search Results</CardTitle>
                  <p className="text-sm text-muted-foreground">Found 6 floats matching your criteria</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export Results
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Map
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Float ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Last Profile</TableHead>
                    <TableHead>Profiles</TableHead>
                    <TableHead>Surface Data</TableHead>
                    <TableHead>Parameters</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {searchResults.map((result) => (
                    <TableRow key={result.floatId}>
                      <TableCell className="font-medium">{result.floatId}</TableCell>
                      <TableCell>
                        <Badge variant={result.type === "CORE" ? "secondary" : "default"}>
                          {result.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={result.status === "Active" ? "default" : "secondary"}
                               className={result.status === "Active" ? "bg-success-light text-success" : ""}>
                          {result.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-xs">{result.location}</TableCell>
                      <TableCell>{result.lastProfile}</TableCell>
                      <TableCell>{result.profiles}</TableCell>
                      <TableCell className="font-mono text-xs">{result.surfaceData}</TableCell>
                      <TableCell>
                        <div className="flex gap-1 flex-wrap">
                          {result.parameters.slice(0, 3).map((param) => (
                            <Badge key={param} variant="outline" className="text-xs">
                              {param}
                            </Badge>
                          ))}
                          {result.parameters.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              {result.parameters[3]}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {summaryStats.map((stat, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;