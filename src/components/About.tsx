import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Award, GraduationCap, Code } from "lucide-react";

const timelineData = [
  {
    type: "work",
    period: "Aug 2025 – Present",
    role: "Full Stack Developer",
    company: "Global Tech Software Solutions",
    description: "Developing scalable HRMS and Quiz platforms. Working with React, Next.js, Node.js/NestJS, PostgreSQL, and MongoDB. Designing REST APIs, writing authentication and RBAC tests, and utilizing lazy loading for performance optimizations in an Agile environment.",
    icon: <Briefcase className="h-4 w-4" />
  },
  {
    type: "work",
    period: "Jul 2024 – Jun 2025",
    role: "Full Stack Developer",
    company: "Grencoper IT Enterprises Private Limited",
    description: "Contributed to the Optin Health Care project. Created highly performant React.js components, integrated comprehensive form validations, configured Docker CI/CD pipelines, and achieved 85-100% test coverage using React Testing Library and Enzyme.",
    icon: <Code className="h-4 w-4" />
  },
  {
    type: "work",
    period: "Dec 2022 – Jun 2024",
    role: "Full Stack Developer",
    company: "Saini Ventures Private Limited",
    description: "Developed features on a comprehensive E-Learning Platform built with React, Next.js, and NestJS. Engineered course consumption features, custom SCSS themes, and resolved cross-browser compatibility issues.",
    icon: <Briefcase className="h-4 w-4" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden bg-slate-900/40">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">About Me</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Bio & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-heading text-white">Who is this Developer?</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate Full Stack Developer with over 3 years of professional experience building elegant and responsive web applications. I thrive at the intersection of design and programming, making sure codebases are clean and user interfaces are premium.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                My core expertise includes modern frameworks like React and Next.js, combined with robust backend structures using Node.js and SQL/NoSQL databases. I constantly explore emerging standards to build high-performance products.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-3 py-1.5 rounded-xl text-sm font-medium">
                <Calendar className="h-4 w-4 mr-1.5 text-indigo-400" /> 3+ Years Exp
              </Badge>
              <Badge className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1.5 rounded-xl text-sm font-medium">
                <Briefcase className="h-4 w-4 mr-1.5 text-purple-400" /> Full Stack Focused
              </Badge>
              <Badge className="bg-pink-500/10 text-pink-300 border border-pink-500/20 px-3 py-1.5 rounded-xl text-sm font-medium">
                <MapPin className="h-4 w-4 mr-1.5 text-pink-400" /> Remote & Hybrid
              </Badge>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card rounded-2xl p-5 border border-white/5 bg-slate-950/20 hover:scale-[1.02] transition-transform duration-300">
                <div className="p-3 bg-indigo-500/10 w-fit rounded-xl text-indigo-400 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold text-white">25+</div>
                <div className="text-sm text-slate-400 mt-1">Projects Completed</div>
              </div>
              <div className="glass-card rounded-2xl p-5 border border-white/5 bg-slate-950/20 hover:scale-[1.02] transition-transform duration-300">
                <div className="p-3 bg-pink-500/10 w-fit rounded-xl text-pink-400 mb-4">
                  <Code className="w-5 h-5" />
                </div>
                <div className="text-3xl font-extrabold text-white">10+</div>
                <div className="text-sm text-slate-400 mt-1">Tech Frameworks</div>
              </div>
            </div>
          </div>
          
          {/* Experience Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold font-heading text-white mb-6">Experience & Education</h3>
            
            <div className="relative pl-6 border-l-2 border-slate-800 space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  {/* Circle Marker */}
                  <span className="absolute -left-[35px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-slate-950 border border-indigo-400 text-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.5)]">
                    {item.icon}
                  </span>
                  
                  <div className="glass-card rounded-2xl p-5 border border-white/5 bg-slate-950/20 hover:border-white/10 transition-colors">
                    <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase">{item.period}</span>
                    <h4 className="text-lg font-bold text-white mt-1">{item.role}</h4>
                    <span className="text-sm text-slate-400 block font-medium">{item.company}</span>
                    <p className="text-sm text-slate-400 mt-3 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

