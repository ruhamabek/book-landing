"use client"

import React from 'react'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: "James Doe",
    role: "Lead Developer @ Vercel",
    text: "The architectural depth in this book is unlike anything I've seen. It completely redefined how I approach front-end scalability.",
  },
  {
    name: "Jean Doe",
    role: "Senior Architect @ Google",
    text: "A masterpiece of modern web engineering. The section on revolutionary design changed our entire project's visual direction.",
  },
  {
    name: "Tom Doe",
    role: "CTO @ TechFlow",
    text: "Zero-fluff, pure value. Finally a resource that bridges the gap between basic tutorials and world-class engineering.",
  },
  {
    name: "Alice Doe",
    role: "Independent Creator",
    text: "Following the monetization strategies in chapter 7 helped me launch my own product and hit $5k MRR within three months.",
  },
  {
    name: "Sam Doe",
    role: "Full-stack Engineer",
    text: "The deployment strategies alone are worth the price of the book. Zero-downtime is now our standard, not a goal.",
  },
]

const Review = () => {
  return (
    <section id="reviews" className="py-32   relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <h2 className="text-revolutionary text-white leading-none">
            Reader <br />
            <span className="text-primary italic">Reviews.</span>
          </h2>
          <div className="text-right max-w-sm">
            <div className="flex justify-end gap-1 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-primary text-primary" />)}
            </div>
            <p className="text-slate-300 font-normal text-base tracking-widest">Trusted by 10,000+ developers worldwide.</p>
          </div>
        </div>

        {/* Testimonial Grid - Brutalist Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`group p-12 bg-background space-y-8 transition-colors duration-500 hover:bg-primary/[0.02] ${index > 2 ? 'lg:col-span-1' : ''}`}
            >
              <div className="space-y-4">
                <div className="text-xs font-bold text-primary font-mono lowercase tracking-tighter">verified_review_v2.0</div>
                <p className="text-2xl font-bold text-white leading-tight tracking-tight">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center font-bold text-xl text-white group-hover:bg-primary group-hover:shadow-brutalist transition-all duration-300">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{review.name}</h4>
                  <p className="text-xs text-muted-foreground tracking-widest font-bold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Decorative Call to Action Grid Box */}
          <div className="p-12 bg-primary flex flex-col justify-center items-center text-center space-y-6 group cursor-pointer overflow-hidden">
            <h3 className="text-3xl font-bold text-white leading-none transform group-hover:scale-110 transition-transform">
              Join The <br /> Revolution.
            </h3>
            <button className="bg-white text-black text-xs font-bold px-8 py-3 rounded-none shadow-xl hover:translate-y-[-2px] transition-all">
              Add Your Review
            </button>
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="text-center pt-24">
          <button className="bg-white text-black text-2xl font-bold px-16 py-8 rounded-none shadow-brutalist hover-shadow-brutalist transition-all inline-flex items-center gap-6 group">
            Get Your Copy Today
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-primary transition-colors">
              ➝
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Review