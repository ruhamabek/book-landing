"use client"

import React from 'react'
import { Quote } from 'lucide-react'

const reviews = [
  {
    name: "James Doe",
    role: "Co-Founder, Startup Week",
    text: "Excellent Book! Add your book review here consectetur adipiscing elit. Aliquam euismod nunc porta urna facilisis tempor.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Jean Doe",
    role: "Co-Founder, Company Tristique",
    text: "Great Book! Add your book review here consectetur adipiscing elit. Aliquam euismod nunc porta urna facilisis tempor. Praesent mauris neque.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Tom Doe",
    role: "Product Designer, Company Lorem",
    text: "Excellent Book! Add your book review here consectetur adipiscing elit. Pellentesque ac leo turpis. Phasellus imperdiet id ligula tempor imperdiet.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Alice Doe",
    role: "App Developer, Company Ipsum",
    text: "Another book review here consectetur adipiscing elit. Pellentesque ac leo turpis. Phasellus imperdiet id ligula tempor imperdiet.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    name: "Sam Doe",
    role: "Co-Founder, Company Integer",
    text: "Another book review here consectetur adipiscing elit. Pellentesque ac leo turpis. Phasellus imperdiet id ligula tempor imperdiet.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&h=150&auto=format&fit=crop"
  },
]

const Review = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 relative overflow-hidden font-segoe">
      <div className="container mx-auto px-6">

        {/* Header Block: Centered */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Book{" "}
            <span className="text-primary">Reviews.</span>
          </h2>
          <p className="text-md md:text-lg text-gray-300 font-extralight leading-relaxed">
            See what our readers are saying.
          </p>
        </div>

        {/* Testimonial Arrangement */}
        <div className="space-y-12">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {reviews.slice(3, 5).map((review, index) => (
              <div key={index} className="w-full md:w-[calc(33.333%-1.33rem)]">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Button */}
        <div className="text-center pt-24">
          <button className="bg-primary text-white text-md font-semibold px-12 py-4 rounded-full shadow-md hover:shadow-lg transition-all">
            Get Your Copy Today
          </button>
        </div>
      </div>
    </section>
  )
}

const ReviewCard = ({ review }: { review: any }) => (
  <div className="flex flex-col items-center w-full max-w-sm mx-auto">
    {/* Testimonial Box */}
    <div className="relative bg-background p-10 shadow-sm w-full min-h-[220px] flex flex-col justify-between border border-white/5 rounded-2xl">
      <div className="absolute -top-4 right-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-md">
        <Quote size={18} className="fill-current" />
      </div>

      <p className="text-muted-foreground italic text-md leading-relaxed font-light mb-8">
        "{review.text}"
      </p>

      <div className="flex items-center gap-4 w-full">
        <div className="shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 shadow-sm bg-gray-200">
          <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <div className="text-left">
          <h4 className="text-white font-semibold text-sm md:text-md">
            {review.name}
          </h4>
          <p className="text-gray-400 text-xs md:text-sm font-medium">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Review