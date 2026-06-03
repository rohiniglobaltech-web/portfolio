"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Layout, Server, Cpu, Cloud, Terminal } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: <Layout className="h-5 w-5" />,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML5", "CSS3", "JavaScript", "Redux"]
  },
  {
    id: "backend",
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "GraphQL"]
  },
  {
    id: "database",
    title: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma"]
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: <Cloud className="h-5 w-5" />,
    skills: ["Docker", "AWS", "CI/CD", "Git", "VS Code", "Postman", "Figma"]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories = activeTab === "all" 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">Technical Stack</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A list of tools, systems, and languages I use to bring modern digital designs to life.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 border ${
              activeTab === "all"
                ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/25"
                : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 border flex items-center gap-1.5 ${
                activeTab === category.id
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/25"
                  : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card rounded-3xl p-6 border border-white/5 bg-slate-950/20 hover:border-white/10 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-heading">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className="bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-200"
                  >
                    <Terminal className="w-3.5 h-3.5 mr-1 text-indigo-400" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

