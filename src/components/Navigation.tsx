"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";

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
              className="text-2xl font-bold font-heading bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-1.5"
            >
              <Code className="h-6 w-6 text-indigo-400" />
              <span>Rohini</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
                    )}
                  </button>
                );
              })}
            </div>
            <Button
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all rounded-xl"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-white/5 bg-white/5 text-slate-300 hover:text-white transition-colors"
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
                      ? "text-white bg-indigo-500/10 border-l-2 border-indigo-400"
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
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg shadow-lg shadow-indigo-600/20"
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

