import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Download, FileText, Settings, Clock, CheckCircle, AlertCircle } from "lucide-react";

const Export = () => {
  const selectedFloats = [
    {
      floatId: "2902734",
      type: "Core",
      profiles: 342,
      selected: true
    },
    {
      floatId: "2902851", 
      type: "BGC",
      profiles: 298,
      selected: true
    },
    {
      floatId: "2903156",
      type: "BGC", 
      profiles: 234,
      selected: false
    },
    {
      floatId: "2902287",
      type: "BGC",
      profiles: 243,
      selected: false
    }
  ];

  const exportJobs = [
    {
      name: "Arabian Sea Temperature Profiles",
      format: "NetCDF",
      status: "completed",
      progress: 100,
      created: "2024-09-14 14:30",
      size: "2.3 GB"
    },
    {
      name: "BGC Parameters - Last 30 days", 
      format: "CSV",
      status: "processing",
      progress: 60,
      created: "2024-09-15 09:15", 
      size: "1.1 GB (estimated)"
    },
    {
      name: "Float Trajectories - Indian Ocean",
      format: "JSON",
      status: "completed", 
      progress: 100,
      created: "2024-09-13 16:45",
      size: "156 MB"
    },
    {
      name: "Salinity Anomalies",
      format: "NetCDF",
      status: "failed",
      progress: 0,
      created: "2024-09-12 11:20",
      size: "-"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Export Configuration */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Download className="h-5 w-5" />
                Configure Data Export
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Select data sources, format, and export parameters for ARGO data
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Float Selection */}
              <div className="space-y-4">
                <h3 className="font-medium">Select ARGO Floats</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedFloats.map((float, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <Checkbox checked={float.selected} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Float {float.floatId}</span>
                          <Badge variant={float.type === "Core" ? "secondary" : "default"}>
                            {float.type}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {float.profiles} profiles
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Export Options */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Export Format</label>
                    <Select defaultValue="netcdf">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="netcdf">NetCDF (.nc)</SelectItem>
                        <SelectItem value="csv">CSV (.csv)</SelectItem>
                        <SelectItem value="json">JSON (.json)</SelectItem>
                        <SelectItem value="matlab">MATLAB (.mat)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Data Range</label>
                    <Select defaultValue="30d">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7d">Last 7 Days</SelectItem>
                        <SelectItem value="30d">Last 30 Days</SelectItem>
                        <SelectItem value="90d">Last 90 Days</SelectItem>
                        <SelectItem value="1y">Last Year</SelectItem>
                        <SelectItem value="all">All Available Data</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Compression Level</label>
                    <Select defaultValue="medium">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Additional Options</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="metadata" defaultChecked />
                        <label htmlFor="metadata" className="text-sm">Include metadata</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="qc" defaultChecked />
                        <label htmlFor="qc" className="text-sm">Include quality control flags</label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Export Description</label>
                    <Textarea 
                      placeholder="Optional description for your export..."
                      className="resize-none"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Custom SQL Query */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Custom SQL Query (Optional)</label>
                <Textarea 
                  placeholder="SELECT * FROM argo_profiles WHERE temperature > 25 AND depth < 100..."
                  className="font-mono text-xs"
                  rows={2}
                />
                <p className="text-xs text-muted-foreground">
                  Leave empty to export all selected data. Use SQL syntax for custom queries.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Export Summary */}
            <div className="lg:col-span-1">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-base">Export Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Selected Floats</span>
                      <span className="font-medium">2</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total Profiles</span>
                      <span className="font-medium">640</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Format</span>
                      <span className="font-medium">NetCDF</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Date Range</span>
                      <span className="font-medium">30d</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Estimated Size</span>
                      <span className="font-medium">384 MB</span>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary-hover">
                    <Download className="h-4 w-4 mr-2" />
                    Start Export
                  </Button>
                </CardContent>
              </Card>

              {/* Format Information */}
              <Card className="shadow-card mt-6">
                <CardHeader>
                  <CardTitle className="text-base">Format Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">NetCDF</h4>
                    <p className="text-xs text-muted-foreground">
                      Standard oceanographic format with metadata support. Best for 
                      scientific analysis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Export Jobs */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-base flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Export Jobs
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Track the progress of your data export requests
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Job Name</TableHead>
                        <TableHead>Format</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Size</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {exportJobs.map((job, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{job.name}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{job.format}</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              {job.status === "completed" && (
                                <CheckCircle className="h-4 w-4 text-success" />
                              )}
                              {job.status === "processing" && (
                                <Clock className="h-4 w-4 text-warning" />
                              )}
                              {job.status === "failed" && (
                                <AlertCircle className="h-4 w-4 text-destructive" />
                              )}
                              <Badge 
                                variant={
                                  job.status === "completed" ? "default" :
                                  job.status === "processing" ? "secondary" : 
                                  "destructive"
                                }
                                className={
                                  job.status === "completed" ? "bg-success-light text-success" :
                                  job.status === "processing" ? "bg-warning-light text-warning" :
                                  ""
                                }
                              >
                                {job.status}
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            {job.status === "processing" ? (
                              <div className="flex items-center gap-2">
                                <Progress value={job.progress} className="w-16" />
                                <span className="text-xs">{job.progress}%</span>
                              </div>
                            ) : (
                              <span className="text-xs text-muted-foreground">
                                {job.status === "completed" ? "100%" : "-"}
                              </span>
                            )}
                          </TableCell>
                          <TableCell className="text-xs">{job.created}</TableCell>
                          <TableCell className="text-xs">{job.size}</TableCell>
                          <TableCell>
                            {job.status === "completed" && (
                              <Button variant="ghost" size="sm">
                                <Download className="h-3 w-3" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Export;