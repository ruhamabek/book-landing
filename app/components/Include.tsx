"use client"

import React from 'react'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

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
          <Image src="/14.png" alt="Book cover" fill className="object-cover" />
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
    <section id="features" className="py-24 relative overflow-hidden font-segoe px-6 md:px-12 lg:px-24">
  
      <div className="container mx-auto relative z-10">

        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center gap-6 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What's{" "}
            <span className="text-primary">Included.</span>
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row items-center justify-between gap-16 lg:gap-32">

          {/* Left Column: Two 3D books */}
          <div className="flex-[1.2] relative w-full lg:max-w-2xl animate-in fade-in zoom-in duration-1000 pb-12 xl:pb-32 flex items-center justify-center">
            <div
              className="relative mx-auto flex items-end justify-center"
              style={{ minHeight: 'auto' }}
            >
              {/* Primary book — large, tilted left, sits BEHIND */}
              <div
                className="transition-all duration-700 hover:scale-105 hover:-translate-y-2 hidden sm:block"
                style={{
                  marginRight: '-60px',
                  marginBottom: '50px',
                  zIndex: 10,
                  filter: 'drop-shadow(0 50px 70px rgba(0,0,0,0.65))',
                }}
              >
                <Book
                  width={270}
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
                  width={200}
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
                  width={200}
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
          <div className="flex-1 w-full space-y-10 animate-in fade-in slide-in-from-right duration-1000 flex flex-col items-center xl:items-start">
            <div className="space-y-4 w-full">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 transition-all group justify-center xl:justify-start"
                >
                  <div className="flex-shrink-0 text-emerald-500">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-md text-gray-300 leading-relaxed font-extralight text-center xl:text-left">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 lg:pt-8 w-full flex justify-center xl:justify-start">
              <button className="w-full sm:w-auto bg-primary text-white text-md font-semibold px-12 py-4 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-4">
                I want this book
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Include