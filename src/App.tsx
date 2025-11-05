import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingParticles } from "./components/FloatingParticles";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  useEffect(() => {
    // Apply smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black transition-colors duration-500">
      {/* Background with gradient overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          
          {/* Decorative Divider */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform -skew-y-3" />
          </div>

          <AboutSection />
          
          {/* Decorative Divider */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform skew-y-3" />
          </div>

          <ProjectsSection />
          
          {/* Decorative Divider */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent transform -skew-y-3" />
          </div>

          <ExperienceSection />
          
          {/* Decorative Divider */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform skew-y-3" />
          </div>

          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right" 
        theme="dark"
        richColors
      />
    </div>
  );
}
