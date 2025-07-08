import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./Index";
import Login from "./auth/login";
import AdminDashboard from "./AdminDashboard";
import Register from "./auth/register";
import Menu from "./Menu";
import About from "./about";
import Contact from "./contact";
import Cart from "./cart";
import Delivery from "./delivery";

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Welcome ({ status, canResetPassword }: LoginProps) {
    const queryClient = new QueryClient();
    return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login canResetPassword={true} />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />         
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)};