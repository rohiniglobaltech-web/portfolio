import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Terminal, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16">
      {/* Premium Glow Orbs */}
      <div 
        className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full blur-[120px] pulse-glow-orbs animate-float-slow" 
        style={{ backgroundColor: 'var(--orb-1)' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full blur-[140px] pulse-glow-orbs animate-float-medium" 
        style={{ backgroundColor: 'var(--orb-2)' }}
      />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        {/* Available for Hire Badge */}
        <div className="flex justify-center animate-in fade-in slide-in-from-top-4 duration-1000">
          <Badge className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 px-3 py-1 text-sm rounded-full flex items-center gap-1.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for New Projects
          </Badge>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight font-heading animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            <span className="block text-white">Hi, I'm a</span>
            <span className="block mt-2 bg-gradient-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent text-glow">
              Full Stack Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-500">
            Designing and engineering high-performance, beautiful web applications. Specializing in React, Next.js, and modern serverless ecosystems.
          </p>
        </div>
        
        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center items-center pt-2 animate-in fade-in duration-1000 delay-700">
          <a href="#projects">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 px-6 py-6 text-md">
              View Work <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold gap-2 rounded-2xl hover:-translate-y-0.5 transition-all duration-300 px-6 py-6 text-md">
              <Mail className="h-4 w-4 text-accent-color" /> Let's Connect
            </Button>
          </a>
        </div>

        {/* Clickable Social Icons Row */}
        <div className="flex gap-4 justify-center items-center pt-4 animate-in fade-in duration-1000 delay-800">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 hover:scale-105 transition-all"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 hover:scale-105 transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 hover:scale-105 transition-all"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
          </a>
          <a
            href="mailto:rohinihatti713@gmail.com"
            className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-white/10 hover:scale-105 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-accent-color" />
          </a>
        </div>

        {/* Tech Badges / Floating bar */}
        <div className="pt-12 flex flex-wrap justify-center gap-6 text-slate-500 text-sm animate-in fade-in duration-1000 delay-900">
          <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4 text-accent-color" /> Next.js</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-accent-secondary" /> TailwindCSS</span>
          <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-accent-tertiary" /> TypeScript</span>
          <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4 text-cyan-400" /> Node.js</span>
        </div>

        <div className="pt-12 animate-bounce opacity-50 hover:opacity-100 transition-opacity">
          <a href="#about" aria-label="Scroll Down">
            <ArrowRight className="h-5 w-5 mx-auto rotate-90 text-accent-color" />
          </a>
        </div>
      </div>
    </section>
  );
}

