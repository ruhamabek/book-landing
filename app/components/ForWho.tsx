"use client"

import React from 'react'
import { ArrowUpRight, Send, UserCheck } from 'lucide-react'

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
    <section id="for-who" className="py-20 md:py-32 relative overflow-hidden font-segoe">
      <div className="container mx-auto px-6">

        {/* Header Block: Centered */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Who This{" "}
            <span className="text-primary">Book Is For.</span>
          </h2>
          <div className="space-y-4">
            <p className="text-md md:text-lg text-gray-300 font-extralight leading-relaxed max-w-3xl">
              This collection is for builders who want to do the work the right way not for people looking for get-rich-quick tactics or passive income shortcuts.
            </p>
          </div>
        </div>

        {/* Audience List - Centered Minimalist Vertical */}
        <div className="max-w-xl mx-auto space-y-12 mb-32">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group flex gap-6 lg:gap-8 items-start"
            >
              <div className="shrink-0 text-emerald-500 pt-1">
                <UserCheck size={28} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">
                  {audience.title}
                </h3>
                <p className="text-md text-gray-300 font-extralight leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Block: Centered Preview */}
        <div className="relative bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden mt-12 md:mt-24 mx-4 md:mx-0">
          <div className="p-8 md:p-20 relative z-10 flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Get A Free Preview
              </h2>
              <p className="text-md md:text-lg text-gray-300 font-extralight leading-relaxed">
                Sign up to get a free preview of the book. <br />
                You can offer visitors free book previews to generate leads.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-2 w-full max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-white text-md font-medium focus:outline-none focus:border-primary transition-all  "
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-10 py-4 text-md font-semibold hover:bg-primary/90 transition-all shadow-md  "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForWho