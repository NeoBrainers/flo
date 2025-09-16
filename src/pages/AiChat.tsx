import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, Lightbulb, MapPin, Calendar, Thermometer } from "lucide-react";

const AiChat = () => {
  const sampleQueries = [
    "Show salinity profiles near the equator",
    "Compare temperature trends in Arabian Sea", 
    "Find BGC floats with chlorophyll data",
    "Display float trajectories from last month"
  ];

  const queryTips = [
    {
      category: "Spatial Queries",
      description: "Use coordinates, regions, or geographic features",
      icon: MapPin
    },
    {
      category: "Temporal Filters", 
      description: "Specify dates, months, seasons, or time ranges",
      icon: Calendar
    },
    {
      category: "Parameters",
      description: "Temperature, salinity, pressure, BGC variables", 
      icon: Thermometer
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main chat area */}
            <div className="lg:col-span-3">
              <Card className="shadow-card">
                <CardHeader className="border-b">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary p-2 rounded-lg">
                      <Bot className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">AI Assistant</CardTitle>
                      <Badge variant="secondary" className="bg-primary-light text-primary text-xs">
                        RAG-Powered
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Ask questions about ARGO data in natural language
                  </p>
                </CardHeader>
                
                <CardContent className="p-0">
                  {/* Chat messages area */}
                  <div className="min-h-96 p-6 space-y-4">
                    {/* AI greeting message */}
                    <div className="flex gap-3">
                      <div className="bg-primary p-2 rounded-lg h-fit">
                        <Bot className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div className="bg-muted rounded-lg p-4 max-w-2xl">
                        <p className="text-sm">
                          Hello! I'm your AI assistant for ARGO data analysis. I can help you query oceanographic data, 
                          visualize profiles, and find insights from the Indian Ocean ARGO float network. What would you 
                          like to explore today?
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">10:33:13 PM</p>
                      </div>
                    </div>

                    {/* Sample query buttons */}
                    <div className="flex flex-wrap gap-2 pl-12">
                      <Button variant="outline" size="sm" className="text-xs">
                        Show me salinity profiles near the equator in March 2023
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Compare BGC parameters in the Arabian Sea for the last 6 months
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        What are the nearest ARGO floats to coordinates 10°S, 80°E?
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Find temperature anomalies in the Bay of Bengal
                      </Button>
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="border-t p-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Ask about ARGO data, floats, profiles, or any oceanographic question..."
                        className="flex-1"
                      />
                      <Button size="sm" className="bg-primary hover:bg-primary-hover">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Sample Queries */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" />
                    Sample Queries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {sampleQueries.map((query, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-xs h-auto p-2 text-left"
                    >
                      {query}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Query Tips */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-base">Query Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {queryTips.map((tip, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <tip.icon className="h-4 w-4 text-primary" />
                        <span className="font-medium text-sm">{tip.category}</span>
                      </div>
                      <p className="text-xs text-muted-foreground pl-6">
                        {tip.description}
                      </p>
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

export default AiChat;