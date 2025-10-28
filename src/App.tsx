import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import ContactPage from './pages/ContactPage';
import BackToTopButton from './components/BackToTopButton';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <div className="text-gray-200 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-16">
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/destinations" element={<DestinationsPage />} />
                  <Route path="/destinations/:destinationId" element={<DestinationDetailPage />} />
                  <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer />
            <BackToTopButton />
            <FloatingWhatsApp />
          </div>
        </HashRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
