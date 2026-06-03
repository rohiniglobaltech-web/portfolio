"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Exceptional developer who delivered our e-commerce platform ahead of schedule. The code quality and attention to detail were outstanding. Highly recommend for any complex project.",
    project: "E-Commerce Platform",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupXYZ",
    content: "Transformed our outdated systems into a modern, scalable architecture. Deep understanding of both frontend and backend protocols. A true professional who communicates effectively.",
    project: "Task Management App",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder at DesignHub",
    content: "Brought our digital design to life with extreme precision. The AI content tool exceeded all requirements. Great problem-solving skills and prompt deliveries.",
    project: "AI Content Generator",
    rating: 5,
    avatar: "ER"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-24 px-4 bg-slate-900/40 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">What Clients Say</h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real feedback from collaborators and clients I've had the pleasure of partnering with.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative glass-card rounded-3xl p-8 md:p-12 border border-white/5 bg-slate-950/20 shadow-2xl flex flex-col items-center text-center space-y-6 select-none min-h-[350px] justify-center transition-all duration-300">
          <Quote className="h-12 w-12 text-indigo-500/20 absolute top-8 left-8" />
          
          <div className="flex gap-1 text-amber-400">
            {Array.from({ length: active.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>

          <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium max-w-2xl animate-in fade-in zoom-in duration-300">
            "{active.content}"
          </p>

          <div className="flex flex-col items-center space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
              {active.avatar}
            </div>
            <div>
              <div className="font-extrabold text-white text-md">{active.name}</div>
              <div className="text-xs text-slate-400">{active.role}</div>
            </div>
            <Badge className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/10 mt-1">
              {active.project}
            </Badge>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4 items-center pt-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
              aria-label="Previous Feedback"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            {/* Pagination Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-6 bg-indigo-500" : "w-2.5 bg-slate-700 hover:bg-slate-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
              aria-label="Next Feedback"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

