"use client"

import React from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

const items = [
  "Advanced React Patterns & Hooks",
  "High-Performance API Architecture",
  "Scalable Database Design with SQL",
  "Revolutionary CSS & Fluid Design",
  "Deployment & CI/CD Pipelines",

]

const Include = () => {
  return (
    <section id="features" className="py-32   relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-5">
        {[1, 2, 3, 4].map(i => <div key={i} className="w-px h-full bg-white" />)}
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
          <h2 className="text-revolutionary text-white leading-none">
            What's <br />
            <span className="text-primary italic">Inside.</span>
          </h2>
          <div className="text-right max-w-sm">
            <div className="text-3xl font-bold text-white italic mb-2">8 CHAPTERS.</div>
            <p className="text-slate-300 font-normal text-base">A deep dive into the architecture of modern web applications.</p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between gap-16 lg:gap-40">

          {/* Left Column: Simple Natural Mockups */}
          <div className="flex-[1.4] relative w-full lg:max-w-2xl animate-in fade-in zoom-in duration-1000">
            <div className="relative group">
              {/* Tablet Image - Natural & Simple */}
              <div className="relative z-10 transition-transform duration-500  ">
                <Image
                  src="/tab.png"
                  alt="Tablet Interface"
                  width={800}
                  height={1000}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>

              {/* Phone Image - Overlapping & Natural */}
              <div className="absolute -bottom-12 -right-12 z-20 w-1/2 transition-transform duration-500  ">
                <Image
                  src="/phone.png"
                  alt="Mobile Interface"
                  width={300}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Checklist */}
          <div className="flex-1 w-full space-y-12 animate-in fade-in slide-in-from-right duration-1000">
            <div className="grid grid-cols-1 gap-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border border-white/5 hover:border-primary/50 transition-all group"
                >
                  <div className="flex-shrink-0 w-6 h-6 border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-primary group-hover:text-white transition-all">
                    <Plus size={12} />
                  </div>
                  <span className="text-sm font-bold text-white tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button className="w-full bg-white text-black text-xl font-bold px-12 py-6 rounded-none shadow-brutalist hover-shadow-brutalist transition-all flex items-center justify-center gap-4">
                I want this book
                <span className="w-8 h-px bg-black opacity-20" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Top Label */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[12px] font-bold tracking-[1em] text-white/10 select-none">
        MASTERING THE DEEP WEB
      </div>
    </section>
  )
}

export default Include