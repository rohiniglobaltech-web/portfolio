"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, X, Code, CheckCircle, AlertCircle, Lock } from "lucide-react";


// Custom GitHub Icon Component since brand icons aren't exported in this Lucide version
function Github({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}



interface Project {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  features: string[];
  challenges: string;
  solution: string;
  link: string;
  github: string;
  isPrivate?: boolean;
}

const projects: Project[] = [
  {
    title: "HR Management System (HRMS)",
    category: "Full Stack",
    description: "Scalable enterprise portal handling workflows, analytics, and role-based access controls.",
    fullDescription: "Designed and engineered an enterprise-grade HR Management System containing custom employee workflows, role-based access controls (RBAC), interactive metrics dashboards, and automated verification services.",
    tech: ["React.js", "Next.js", "NestJS", "Node.js", "PostgreSQL", "TailwindCSS"],
    features: ["Role-Based Access Control (RBAC)", "Custom request workflow tracking", "SQL-optimized schema indices"],
    challenges: "Securing routes and workflows dynamically across variable hierarchical roles.",
    solution: "Designed modular JWT-based middlewares on NestJS guards matching employee schema permissions.",
    link: "#",
    github: "#",
    isPrivate: true
  },
  {
    title: "Interactive Quiz Platform",
    category: "Full Stack",
    description: "Robust quiz generation engine featuring user dashboards and live scoring statistics.",
    fullDescription: "Developed a scalable Quiz Platform featuring custom creator panels, randomized query structures, database schemas, and performance indicators.",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    features: ["Dynamic quiz builder wizard", "Live result analytics trackers", "NoSQL collection aggregation lookups"],
    challenges: "Processing large batches of answers and calculating score percentiles rapidly under heavy usage.",
    solution: "Implemented MongoDB database aggregation pipelines and Next.js static generation optimization filters.",
    link: "#",
    github: "#",
    isPrivate: true
  },
  {
    title: "Optin Health Care Portal",
    category: "Frontend",
    description: "High-performance health management application with advanced validation systems and CI/CD pipelines.",
    fullDescription: "Worked on the Optin Health Care project. Developed well-abstracted, high-performance UI components, engineered complete forms validation schemas, and automated deployment pipelines.",
    tech: ["React.js", "Docker", "React Testing Library", "Enzyme", "CSS3"],
    features: ["85-100% unit test coverage configuration", "Dockerized deployment pipeline structures", "Modular state validation forms"],
    challenges: "Ensuring near-perfect test coverage across complex legacy Class and functional components.",
    solution: "Refactored tests using modern Jest environments, mock stores, and RTL test wrappers.",
    link: "#",
    github: "#",
    isPrivate: true
  },
  {
    title: "E-Learning Platform",
    category: "Full Stack",
    description: "Comprehensive education portal with course consumption modules and SCSS customization.",
    fullDescription: "Worked on Saini Ventures' comprehensive E-Learning Platform, designing and implementing seamless course consumption components, cross-browser styling presets, and active theming structures.",
    tech: ["React.js", "Next.js", "NestJS", "SCSS", "HTML5"],
    features: ["Seamless media course playback", "Custom responsive SCSS layouts", "Cross-browser compatibility setups"],
    challenges: "Achieving pixel-perfect responsive course viewers across legacy browsers.",
    solution: "Leveraged grid templates, custom media query hooks, and global reset configurations.",
    link: "#",
    github: "#",
    isPrivate: true
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const categories = ["All", "Full Stack", "Frontend", "AI & APIs"];

  const scrollToContact = () => {
    setActiveProject(null);
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/20 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent mb-4">Featured Work</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A curated selection of enterprise and client applications engineered for optimal scale and visual layout.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground border-primary/20 shadow-lg shadow-primary/25"
                  : "bg-black/5 dark:bg-white/5 text-slate-500 dark:text-slate-400 border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card rounded-3xl p-6 border hover:scale-[1.01] hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-accent-color uppercase tracking-wider bg-accent-color/10 px-2.5 py-1 rounded-lg">
                    {project.category}
                  </span>
                  {project.isPrivate && (
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-black/5 dark:border-white/5">
                      <Lock className="w-3 h-3 text-accent-color" /> Enterprise (Private)
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading group-hover:text-accent-color transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} className="bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-black/5 dark:border-white/5 px-2.5 py-1 rounded-lg text-xs font-medium shadow-none">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge className="bg-accent-color/10 text-accent-color border border-accent-color/10 px-2.5 py-1 rounded-lg text-xs font-medium shadow-none">
                      +{project.tech.length - 4} More
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={() => setActiveProject(project)}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl py-5 text-sm font-semibold shadow-lg shadow-indigo-600/15"
                >
                  View System Architecture
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Detail Modal Popup */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 rounded-3xl max-w-2xl w-full p-6 md:p-8 max-h-[85vh] overflow-y-auto relative shadow-2xl shadow-indigo-500/10 space-y-6">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-accent-color uppercase tracking-wider bg-accent-color/10 px-2.5 py-1 rounded-lg">
                  {activeProject.category}
                </span>
                {activeProject.isPrivate && (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-black/5 dark:border-white/5">
                    <Lock className="w-3 h-3 text-accent-color" /> Enterprise (Private)
                  </span>
                )}
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading mt-2">
                {activeProject.title}
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 text-md leading-relaxed">
                {activeProject.fullDescription}
              </p>

              {activeProject.isPrivate && (
                <div className="p-4 bg-accent-color/5 border border-accent-color/10 rounded-2xl flex items-start gap-3">
                  <Lock className="w-5 h-5 text-accent-color mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">Proprietary Enterprise Application</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Due to corporate NDAs and data policies, the source code and live environment are confidential. I am happy to discuss system designs, clean code patterns, and my exact contribution during a session or interview.
                    </p>
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5"><Code className="w-4 h-4 text-accent-color" /> Technologies used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t, idx) => (
                    <Badge key={idx} className="bg-black/5 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-black/5 dark:border-white/5 px-2.5 py-1 rounded-lg text-xs font-medium shadow-none">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Key Contributions</h4>
                <ul className="space-y-2 pl-2">
                  {activeProject.features.map((feat, idx) => (
                    <li key={idx} className="text-slate-600 dark:text-slate-400 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-color mt-2 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl">
                  <h5 className="text-sm font-bold text-red-500 dark:text-red-400 flex items-center gap-1 mb-1.5">
                    <AlertCircle className="w-4 h-4" /> Core Challenge
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{activeProject.challenges}</p>
                </div>
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl">
                  <h5 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mb-1.5">
                    <CheckCircle className="w-4 h-4" /> The Solution
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{activeProject.solution}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-black/5 dark:border-white/5">
              <Button 
                onClick={scrollToContact}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-5 font-semibold gap-2 cursor-pointer shadow-none"
              >
                Request Architecture Walkthrough
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


