import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import AiChat from "./pages/AiChat";
import MapView from "./pages/MapView";
import Search from "./pages/Search";
import Visualize from "./pages/Visualize";
import Compare from "./pages/Compare";
import Export from "./pages/Export";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import { AuthForm } from "./components/AuthForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<AuthForm/>}/>
            <Route path="/home" element = {<Index/>}/>
            <Route path="/ai-chat" element={<AiChat />} />
            <Route path="/map-view" element={<MapView />} />
            <Route path="/search" element={<Search />} />
            <Route path="/visualize" element={<Visualize />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/export" element={<Export />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
