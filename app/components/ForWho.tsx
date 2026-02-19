"use client"

import React from 'react'
import { ArrowUpRight, Send } from 'lucide-react'

const audiences = [
  {
    title: "First-Time Founders",
    description: "You have an idea but aren't sure it's viable. This collection starts exactly where you are and walks you through validation before you risk anything."
  },
  {
    icon: ArrowUpRight,
    title: "Side-Project Entrepreneurs",
    description: "You're building on evenings and weekends and need efficient, no-waste systems to launch fast with limited time and budget."
  },
  {
    title: "Digital Product Creators",
    description: "Selling courses, ebooks, or templates? Every chapter from landing pages to email retention applies directly to your business model."
  },
  {
    title: "Small Businesses Going Online",
    description: "If you're transitioning from offline to digital, this collection covers the full stack of skills you need to acquire customers online."
  },
  {
    title: "Marketers Going Independent",
    description: "You understand marketing but want to apply it to your own venture. The ad funnel, Meta, and Google chapters will feel immediately actionable."
  }
]

const ForWho = () => {
  return (
    <section id="for-who" className="py-32   relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header Block: Left-Aligned Stack */}
        <div className="max-w-4xl mb-24 space-y-12">
          <h2 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Target{" "}
            <span className="text-primary italic">Audience.</span>
          </h2>
          <div className="space-y-4">
            <div className="text-sm font-bold text-white/20 uppercase tracking-[0.5em]">
              blueprint_03
            </div>
            <p className="text-lg text-slate-300 font-normal leading-relaxed">
              This collection is for builders who want to do the work the right way — not for people looking for get-rich-quick tactics or passive income shortcuts.
            </p>
          </div>
        </div>

        {/* Audience Grid - Brutalist Vertical List */}
        <div className="space-y-0 mb-32 border-t border-white/5">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-8 py-10 border-b border-white/5 hover:bg-white/[0.01] transition-all px-4"
            >
              <div className="flex items-center gap-8">
                <span className="text-sm font-bold text-primary font-mono">0{index + 1}</span>
                <h3 className="text-xl md:text-3xl font-bold text-white group-hover:translate-x-4 transition-transform duration-500">
                  {audience.title}
                </h3>
              </div>
              <p className="text-muted-foreground max-w-md md:text-right group-hover:text-white transition-colors">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Block: High-Tech Box */}
        <div className="relative p-1 bg-white/[0.02] border border-white/5 overflow-hidden">
          <div className="bg-card p-12 md:p-20 relative z-10 space-y-12">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-none">
                  Get A Free <br />
                  <span className="text-primary">Preview.</span>
                </h2>
                <p className="text-muted-foreground max-w-sm">
                  Experience the architecture before you commit. We'll send you the first two chapters immediately.
                </p>
              </div>
              <div className="hidden md:block w-32 h-32 border border-white/5 flex items-center justify-center">
                <ArrowUpRight size={40} className="text-white/10" />
              </div>
            </div>

            <form className="flex flex-col md:flex-row gap-0 group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="YOUR_EMAIL_ADDRESS"
                className="flex-1 bg-white/5 border border-white/10 px-8 py-6 text-white font-mono tracking-widest text-sm focus:outline-none focus:border-primary transition-all rounded-none"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-12 py-6 font-bold text-sm tracking-widest hover:bg-primary hover:text-white transition-all shadow-brutalist hover-shadow-brutalist rounded-none flex items-center gap-4"
              >
                Send Request <Send size={16} />
              </button>
            </form>

          </div>

          {/* Background Decorative Labels */}
          <div className="absolute top-4 right-4 text-[10px] font-bold text-white/5 uppercase tracking-widest pointer-events-none">
            DATA_SECURE_ENCRYPTED
          </div>
          <div className="absolute bottom-4 left-4 text-[10px] font-bold text-white/5 uppercase tracking-widest pointer-events-none">
            © 2026_REVOLUTION_THEME
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForWho