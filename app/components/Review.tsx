"use client"

import React from 'react'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: "Jordan M.",
    role: "First-Time Founder",
    text: "The waitlist chapter alone helped me get 200 signups before I wrote a single line of code.",
  },
  {
    name: "Sarah K.",
    role: "Digital Product Creator",
    text: "I'd spent months watching YouTube videos. This collection gave me a system I could actually follow start to finish.",
  },
  {
    name: "Marcus T.",
    role: "Freelance Marketer",
    text: "The Meta Ads and Google chapters are worth the price alone — practical, budget-conscious, and no hype.",
  },
]

const Review = () => {
  return (
    <section id="reviews" className="py-32   relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Reader{" "}
            <span className="text-primary italic">Reviews.</span>
          </h2>
          <div className="text-right max-w-sm">
            <div className="flex justify-end gap-1 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-primary text-primary" />)}
            </div>
            <p className="text-slate-300 font-normal text-base tracking-widest">
              Join thousands of entrepreneurs who skipped the guesswork.
            </p>
          </div>
        </div>

        {/* Testimonial Grid - Soft, card-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-background/80 border border-white/5 backdrop-blur-sm space-y-6 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="text-[10px] font-semibold text-primary/70 font-mono uppercase tracking-[0.25em]">
                  verified_review
                </div>
                <p className="text-sm md:text-base text-gray-300 font-extralight leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-6 pt-8 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-sm font-semibold text-white group-hover:bg-primary group-hover:shadow-brutalist transition-all duration-300">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-white tracking-tight">
                    {review.name}
                  </h4>
                  <p className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Decorative Call to Action Grid Box */}
          <div className="p-10 bg-primary/10 border border-primary/40 rounded-3xl flex flex-col justify-center items-center text-center space-y-4 group cursor-pointer">
            <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">
              Get The Complete <br /> 10-Book Collection.
            </h3>
            <button className="bg-primary text-white text-xs font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-primary/90 transition-all">
              Get The Collection
            </button>
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="text-center pt-24">
          <button className="bg-white text-black text-2xl font-bold px-16 py-8 rounded-none shadow-brutalist hover-shadow-brutalist transition-all inline-flex items-center gap-6 group">
            Get The Complete Collection Today
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center group-hover:bg-primary transition-colors text-xs font-semibold">
              10 books. One proven system.
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Review