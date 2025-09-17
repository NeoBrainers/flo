import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Search as SearchIcon, Download, Eye, MapPin, ExternalLink } from "lucide-react";
import { useSearchFloats } from "@/hooks/useArgoData";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    type: "all",
    status: "all",
    region: "all",
    recency: "30d",
  });

  const { data: searchResults = [], isLoading, error } = useSearchFloats(searchTerm, filters);

  const summaryStats = [
    { 
      label: "Active Floats", 
      value: searchResults.filter(f => f.status === 'Active').length, 
      color: "text-success" 
    },
    { 
      label: "BGC Floats", 
      value: searchResults.filter(f => f.type === 'BGC').length, 
      color: "text-info" 
    },
    { 
      label: "Total Found", 
      value: searchResults.length, 
      color: "text-primary" 
    },
    { 
      label: "Avg Depth", 
      value: "2000m", 
      color: "text-warning" 
    },
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
                  <Input 
                    placeholder="Enter float ID..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Region</label>
                  <Select value={filters.region} onValueChange={(value) => setFilters({...filters, region: value})}>
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
                  <Select value={filters.type} onValueChange={(value) => setFilters({...filters, type: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="CORE">Core</SelectItem>
                      <SelectItem value="BGC">BGC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select value={filters.status} onValueChange={(value) => setFilters({...filters, status: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Data recency and search button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Data Recency</label>
                    <Select value={filters.recency} onValueChange={(value) => setFilters({...filters, recency: value})}>
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
                  <p className="text-sm text-muted-foreground">
                    {isLoading ? "Searching..." : `Found ${searchResults.length} floats matching your criteria`}
                  </p>
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
              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-12" />
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-8 text-destructive">
                  Error loading search results: {error.message}
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No floats found matching your search criteria.
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Float ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Last Profile</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {searchResults.map((result) => (
                      <TableRow key={result.id}>
                        <TableCell className="font-medium">{result.float_id}</TableCell>
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
                        <TableCell className="font-mono text-xs">
                          {result.latitude.toFixed(2)}°, {result.longitude.toFixed(2)}°
                        </TableCell>
                        <TableCell>
                          {new Date(result.last_profile_date).toLocaleDateString()}
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
              )}
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