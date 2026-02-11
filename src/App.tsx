import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Overview from "./pages/Overview";
import Modules from "./pages/Modules";
import EmployeeManagement from "./pages/EmployeeManagement";
import AttendanceLeave from "./pages/AttendanceLeave";
import Payroll from "./pages/Payroll";
import WhyTechzium from "./pages/WhyTechzium";
import Integrations from "./pages/Integrations";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/employee-management" element={<EmployeeManagement />} />
          <Route path="/modules/attendance-leave" element={<AttendanceLeave />} />
          <Route path="/modules/payroll" element={<Payroll />} />
          <Route path="/why-techzium" element={<WhyTechzium />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
