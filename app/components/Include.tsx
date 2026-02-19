"use client"

import React from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'

const items = [
  "Validating your business idea before you build",
  "Finding and owning your profitable niche",
  "Building a 7-day pre-launch waitlist from scratch",
  "Running a 3-day micro-launch to generate first sales",
  "Engineering high-converting bottom-of-funnel pages",
  "Creating landing pages with proven psychological frameworks",
  "Mapping and optimizing a full ad funnel strategy",
  "Running Google Search Ads with smart keyword research",
  "Running Meta Ads affordably with precision targeting",
  "Building an email retention system that stops churn",
]

// Reusable 3D Book component
// spineWidth / pageDepth in px (pre-scale)
// rotateY: negative = viewer sees left spine, positive = right spine
// rotateX: positive = viewer sees top edge
interface BookProps {
  width?: number
  rotateY?: number
  rotateX?: number
  spineWidth?: number
  pageDepth?: number
  spineColor?: string
  spineLabel?: string
  scale?: number
}

const Book = ({
  width = 280,
  rotateY = -28,
  rotateX = 8,
  spineWidth = 44,
  pageDepth = 28,
  spineColor = 'from-violet-950 via-violet-800 to-violet-900',
  spineLabel = '10-Book Collection',
  scale = 1,
}: BookProps) => {
  const aspectRatio = 4 / 3 // height/width
  const height = width * aspectRatio

  return (
    <div
      style={{
        width: width * scale,
        height: height * scale,
        perspective: '1000px',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width,
          height,
          transform: `scale(${scale}) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
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
            boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
            overflow: 'hidden',
          }}
        >
          <Image src="/cover.png" alt="Book cover" fill className="object-cover" />
          {/* subtle gloss sheen */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,0,0,0.12) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* ── SPINE (left face) ── */}
        <div
          className={`bg-gradient-to-b ${spineColor}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: spineWidth,
            height: '100%',
            transform: `translateX(-${spineWidth}px) rotateY(-90deg)`,
            transformOrigin: 'right center',
            backfaceVisibility: 'visible',
            boxShadow: 'inset -4px 0 10px rgba(0,0,0,0.5), inset 2px 0 6px rgba(255,255,255,0.08)',
          }}
        >
          {/* highlight edge */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: 4, height: '100%',
            background: 'linear-gradient(to right, rgba(255,255,255,0.15), transparent)'
          }} />
          {/* spine label */}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
              whiteSpace: 'nowrap',
            }}>
              {spineLabel}
            </span>
          </div>
        </div>

        {/* ── TOP EDGE (pages) ── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: pageDepth,
            transform: `translateY(-${pageDepth}px) rotateX(90deg)`,
            transformOrigin: 'bottom center',
            backfaceVisibility: 'visible',
            background: 'linear-gradient(to bottom, #ffffff 0%, #ececec 60%, #d8d8d8 100%)',
            boxShadow: 'inset 0 -3px 8px rgba(0,0,0,0.12)',
            overflow: 'hidden',
          }}
        >
          {/* stacked page lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute', left: 0, right: 0,
              top: `${(i / 10) * 100}%`,
              height: 1,
              background: i % 2 === 0 ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.5)',
            }} />
          ))}
          {/* slight shadow on left near spine */}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: spineWidth,
            background: 'linear-gradient(to right, rgba(0,0,0,0.08), transparent)'
          }} />
        </div>

        {/* ── RIGHT EDGE (pages side) ── */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: pageDepth,
            height: '100%',
            transform: `translateX(${pageDepth}px) rotateY(90deg)`,
            transformOrigin: 'left center',
            backfaceVisibility: 'visible',
            background: 'linear-gradient(to right, #e0e0e0 0%, #f4f4f4 50%, #e4e4e4 100%)',
            overflow: 'hidden',
          }}
        >
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute', left: 0, right: 0,
              top: `${(i / 14) * 100}%`,
              height: 1,
              background: i % 2 === 0 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.6)',
            }} />
          ))}
        </div>

        {/* ── BOTTOM EDGE ── */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: pageDepth,
            transform: `translateY(${pageDepth}px) rotateX(-90deg)`,
            transformOrigin: 'top center',
            backfaceVisibility: 'visible',
            background: 'linear-gradient(to top, #cccccc, #e8e8e8)',
          }}
        />
      </div>
    </div>
  )
}

const Include = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-5">
        {[1, 2, 3, 4].map(i => <div key={i} className="w-px h-full bg-white" />)}
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            What's{" "}
            <span className="text-primary italic">Inside.</span>
          </h2>
          <div className="text-right max-w-sm">
            <div className="text-3xl font-bold text-white italic mb-2">10 BOOKS.</div>
            <p className="text-slate-300 font-normal text-base">
              A complete, step-by-step collection covering every stage of building and growing an online business — from zero to paying customers.
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between gap-16 lg:gap-40">

          {/* Left Column: Two 3D books */}
          <div className="flex-[1.4] relative w-full lg:max-w-2xl animate-in fade-in zoom-in duration-1000 pb-16 md:pb-32">
            <div
              className="relative mx-auto flex items-end justify-center"
              style={{ minHeight: 'auto' }}
            >
              {/* Primary book — large, tilted left, sits BEHIND */}
              <div
                className="transition-all duration-700 hover:scale-105 hover:-translate-y-2 hidden sm:block"
                style={{
                  marginRight: '-90px',
                  marginBottom: '60px',
                  zIndex: 10,
                  filter: 'drop-shadow(0 50px 70px rgba(0,0,0,0.65))',
                }}
              >
                <Book
                  width={450}
                  scale={1}
                  rotateY={-22}
                  rotateX={8}
                  spineWidth={48}
                  pageDepth={32}
                  spineColor="from-violet-950 via-violet-800 to-violet-900"
                  spineLabel="10-Book Collection"
                />
              </div>

              {/* Primary book — mobile version (smaller, single book) */}
              <div
                className="transition-all duration-700 hover:scale-105 hover:-translate-y-2 sm:hidden"
                style={{
                  zIndex: 10,
                  filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.65))',
                }}
              >
                <Book
                  width={280}
                  scale={0.85}
                  rotateY={-20}
                  rotateX={5}
                  spineWidth={44}
                  pageDepth={28}
                  spineColor="from-violet-950 via-violet-800 to-violet-900"
                  spineLabel="10-Book Collection"
                />
              </div>

              {/* Secondary book — smaller, more angled, IN FRONT */}
              <div
                className="transition-all duration-700 hover:scale-105 hover:-translate-y-2 hidden md:block"
                style={{
                  marginBottom: 0,
                  zIndex: 30,
                  filter: 'drop-shadow(0 40px 55px rgba(0,0,0,0.75))',
                }}
              >
                <Book
                  width={300}
                  scale={1}
                  rotateY={-42}
                  rotateX={14}
                  spineWidth={48}
                  pageDepth={32}
                  spineColor="from-violet-950 via-violet-800 to-violet-900"
                  spineLabel="10-Book Collection"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Checklist */}
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
                I Want This Collection
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