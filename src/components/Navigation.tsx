"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Code, Palette } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"indigo" | "green">("indigo");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "indigo" | "green";
    if (savedTheme === "green") {
      setTheme("green");
      document.documentElement.classList.add("theme-green");
    } else {
      setTheme("indigo");
      document.documentElement.classList.remove("theme-green");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "indigo") {
      setTheme("green");
      document.documentElement.classList.add("theme-green");
      localStorage.setItem("portfolio-theme", "green");
    } else {
      setTheme("indigo");
      document.documentElement.classList.remove("theme-green");
      localStorage.setItem("portfolio-theme", "indigo");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = "hero";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "top-4 max-w-5xl mx-auto px-4"
          : "top-0 max-w-full px-8"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 rounded-2xl ${
          isScrolled
            ? "glass-card border border-white/10 bg-slate-950/60 backdrop-blur-md px-6 py-2 shadow-xl shadow-indigo-950/20"
            : "bg-transparent py-4 border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0 flex items-center gap-2">
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-2xl font-bold font-heading bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent flex items-center gap-1.5"
            >
              <Code className="h-6 w-6 text-accent-color" />
              <span>Rohini</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActive
                        ? "text-white bg-white/5"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent-color shadow-[0_0_8px_var(--primary)]" />
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-white/5 bg-white/5 text-slate-300 hover:text-white transition-all hover:scale-105 flex items-center justify-center gap-1.5 cursor-pointer"
              aria-label="Toggle Theme"
              title={`Switch to ${theme === "indigo" ? "Green" : "Indigo"} Theme`}
            >
              <Palette className="h-4 w-4 text-accent-color" />
              <span className="text-xs font-semibold capitalize hidden lg:inline">{theme}</span>
            </button>

            <Button
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all rounded-xl cursor-pointer"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile elements */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-white/5 bg-white/5 text-slate-300 hover:text-white transition-all flex items-center justify-center cursor-pointer"
              aria-label="Toggle Theme"
            >
              <Palette className="h-4.5 w-4.5 text-accent-color" />
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-white/5 bg-white/5 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl border border-white/10 bg-slate-950/90 backdrop-blur-xl space-y-2 animate-in fade-in slide-in-from-top-5 duration-200">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-white bg-primary/10 border-l-2 border-primary"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
            <div className="pt-2">
              <Button
                size="sm"
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg shadow-lg shadow-primary/20"
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

