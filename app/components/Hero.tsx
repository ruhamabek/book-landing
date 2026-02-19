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
          <Image src="/cover.png" alt="Book cover" fill className="object-cover" priority />
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
    <section className="relative min-h-screen pt-30 pb-20 overflow-hidden bg-grid">
      <div className="hero-spotlight" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

          {/* Left Column: Typography */}
          <div className="flex-1 space-y-12 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-none border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest">
                <span className="w-2 h-2 bg-primary animate-pulse" />
                Complete 10-Chapter Collection
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
                <span className="italic">
                  <span className="text-white">From Idea</span> to{" "}
                  <span className="text-primary">Customers</span>
                </span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl font-light">
              A practical 10-chapter collection that takes you from raw idea to real, paying customers — without scattered advice or hype.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <button className="bg-primary text-white text-lg font-bold px-12 py-5 rounded-none shadow-brutalist hover-shadow-brutalist transition-all flex items-center gap-3">
                Get The Collection
              </button>
              <button className="text-white text-sm font-bold tracking-widest hover:text-primary transition-colors border-b-2 border-primary/20 hover:border-primary pb-1">
                See What's Inside
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
              {[
                { label: 'Pages', val: '332' },
                { label: 'Chapters', val: '10' },
                { label: 'Topics Covered', val: '50+' },
                { label: 'Rating', val: '4.9/5' }
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl font-bold text-white">{stat.val}</div>
                  <div className="text-[10px] tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Book */}
          <div className="flex-1 relative w-full lg:max-w-md ml-auto animate-in fade-in slide-in-from-right duration-1000 flex items-center justify-center">
            <div
              className="transition-all duration-700 hover:scale-105 hover:-translate-y-3"
              style={{ filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.65))' }}
            >
              <HeroBook />
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
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap -rotate-90">
        REVOLUTION
      </div>
    </section>
  )
}

export default Hero