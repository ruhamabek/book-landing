"use client"

import React from 'react'
import Image from 'next/image'

const HeroBook = () => {
  const width = 420
  const height = width * (4 / 3)
  const spineWidth = 48
  const pageDepth = 32

  return (
    <div style={{ width, height, perspective: '1100px', flexShrink: 0 }}>
      <div
        style={{
          width,
          height,
          transform: `rotateY(-22deg) rotateX(6deg)`,
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d',
          position: 'relative',
        }}
      >
        {/* ── FRONT COVER ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
            boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
            overflow: 'hidden',
          }}
        >
          <Image src="/14.png" alt="Book cover" fill className="object-cover " priority />
          {/* gloss sheen */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 45%, rgba(0,0,0,0.15) 100%)',
          }} />
        </div>

        {/* ── SPINE (left face) ── */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: spineWidth,
            height: '100%',
            transform: `translateX(-${spineWidth}px) rotateY(-90deg)`,
            transformOrigin: 'right center',
            backfaceVisibility: 'visible',
            background: 'linear-gradient(to right, #2e1065, #4c1d95, #3b0764)',
            boxShadow: 'inset -4px 0 12px rgba(0,0,0,0.6), inset 2px 0 6px rgba(255,255,255,0.06)',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0, width: 5, height: '100%',
            background: 'linear-gradient(to right, rgba(255,255,255,0.18), transparent)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              whiteSpace: 'nowrap',
            }}>
              10 Chapters
            </span>
          </div>
        </div>

        {/* ── TOP EDGE ── */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: pageDepth,
            transform: `translateY(-${pageDepth}px) rotateX(90deg)`,
            transformOrigin: 'bottom center',
            backfaceVisibility: 'visible',
            background: 'linear-gradient(to bottom, #ffffff 0%, #ececec 60%, #d4d4d4 100%)',
            boxShadow: 'inset 0 -3px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden',
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute', left: 0, right: 0,
              top: `${(i / 12) * 100}%`, height: 1,
              background: i % 2 === 0 ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.55)',
            }} />
          ))}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: spineWidth,
            background: 'linear-gradient(to right, rgba(0,0,0,0.1), transparent)'
          }} />
        </div>

        {/* ── RIGHT EDGE (pages) ── */}
        <div
          style={{
            position: 'absolute',
            top: 0, right: 0,
            width: pageDepth, height: '100%',
            transform: `translateX(${pageDepth}px) rotateY(90deg)`,
            transformOrigin: 'left center',
            backfaceVisibility: 'visible',
            background: 'linear-gradient(to right, #d8d8d8 0%, #f2f2f2 50%, #e2e2e2 100%)',
            overflow: 'hidden',
          }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute', left: 0, right: 0,
              top: `${(i / 16) * 100}%`, height: 1,
              background: i % 2 === 0 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.65)',
            }} />
          ))}
        </div>

        {/* ── BOTTOM EDGE ── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: pageDepth,
            transform: `translateY(${pageDepth}px) rotateX(-90deg)`,
            transformOrigin: 'top center',
            backfaceVisibility: 'visible',
            background: 'linear-gradient(to top, #c0c0c0, #e0e0e0)',
          }}
        />
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-grid font-segoe px-6 md:px-12 lg:px-24">
      <div className="hero-spotlight" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">

          {/* Left Column: Typography */}
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left duration-1000 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="space-y-4">

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white tracking-tight">
                <span className="text-white">From Idea</span> to{" "}
                <span className="text-primary">Customers</span>
              </h1>
            </div>

            <p className="text-md sm:text-lg text-gray-300 font-extralight leading-relaxed max-w-xl">
              A practical 10-chapter collection that takes you from raw idea to real, paying customers without scattered advice or hype.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6">
              <button className="bg-primary text-white text-md font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all">
                Get The Collection
              </button>
              <button className="text-white text-md font-semibold hover:text-primary transition-colors border border-white/20 hover:border-primary px-8 py-4 rounded-full">
                See What's Inside
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="pt-12 space-y-8 w-full max-w-2xl">
              <div className="bg-background p-6 md:p-8 shadow-sm relative overflow-hidden text-left">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                <p className="text-muted-foreground italic text-lg font-light leading-relaxed">
                  "Highly recommended consectetur adipiscing elit. Proin et auctor dolor, sed venenatis massa. Vestibulum ullamcorper lobortis nisi non placerat praesent mauris neque"
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 px-2">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
                      alt="Jean Doe"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-lg">Jean Doe</h4>
                    <p className="text-gray-400 text-sm">Senior Developer, Ipsum Company</p>
                  </div>
                </div>


              </div>
            </div>


          </div>

          {/* Right Column: 3D Book */}
          <div className="hidden lg:flex flex-1 relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg mx-auto lg:ml-auto animate-in fade-in slide-in-from-right duration-1000 items-center justify-center">
            <div
              className="transition-all duration-700 hover:scale-105 hover:-translate-y-3"
              style={{ filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.65))' }}
            >
              {/* Scale the book responsive using scale prop */}
              <div className="hidden lg:block">
                <HeroBook />
              </div>
              <div className="hidden sm:block lg:hidden">
                <HeroBook />
              </div>
              <div className="sm:hidden">
                <HeroBook />
              </div>
            </div>

            {/* Ground shadow */}
            <div
              className="absolute bottom-0 left-1/2 w-4/5 h-12 bg-black/40 rounded-full -z-10"
              style={{
                transform: 'translateY(20px) translateX(-50%) scaleX(1.2)',
                filter: 'blur(48px)'
              }}
            />
          </div>

        </div>
      </div>

      {/* Background decorative text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap -rotate-90 hidden xl:block">
        REVOLUTION
      </div>
    </section>
  )
}

export default Hero