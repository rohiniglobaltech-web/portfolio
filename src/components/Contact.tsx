"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Fill out the details below, and let's construct something outstanding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Quick Info Grid */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass-card rounded-3xl p-6 border border-white/5 bg-slate-950/20 hover:border-white/10 transition-colors flex-1 flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-md">Email</h3>
                  <a href="mailto:rohinihatti713@gmail.com" className="text-sm text-slate-400 mt-1 hover:text-indigo-300 transition-colors">rohinihatti713@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-md">Phone</h3>
                  <a href="tel:+919886451720" className="text-sm text-slate-400 mt-1 hover:text-indigo-300 transition-colors">+91 98864 51720</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-500/10 rounded-2xl text-pink-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-md">Location</h3>
                  <p className="text-sm text-slate-400 mt-1">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Glass Contact Form Panel */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 bg-slate-950/20 hover:border-white/10 transition-colors space-y-5 relative overflow-hidden">
              
              {/* Form Success Banner */}
              {isSubmitted && (
                <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300 z-20">
                  <CheckCircle2 className="h-12 w-12 text-emerald-400 mb-3 animate-bounce" />
                  <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                  <p className="text-sm text-slate-400 mt-2 max-w-xs">
                    Thank you for reaching out. I will respond to your inquiry shortly.
                  </p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-950/40 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-950/40 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-slate-950/40 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-semibold rounded-xl py-6 text-sm shadow-lg shadow-indigo-600/15 gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Transmission Sent...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

