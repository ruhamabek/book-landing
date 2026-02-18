"use client"

import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-30 pb-20 overflow-hidden   bg-grid">
            <div className="hero-spotlight" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

                    {/* Left Column: Massive Typography */}
                    <div className="flex-1 space-y-12 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-none border border-primary/30 bg-primary/5 text-primary text-xs font-bold tracking-widest">
                                <span className="w-2 h-2 bg-primary animate-pulse" />
                                New Release 2026
                            </div>
                            <h1 className="text-revolutionary text-white">
                                Mastering
                                The <br />
                                <span className="text-primary italic">Deep Web.</span>
                            </h1>
                        </div>

                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
                            A comprehensive guide to building revolutionary web applications with modern architecture and cutting-edge design.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-6">
                            <button className="bg-primary text-white text-lg font-bold px-12 py-5 rounded-none shadow-brutalist hover-shadow-brutalist transition-all flex items-center gap-3">
                                Pre-order Now
                                <span className="text-xs opacity-50">($49.00)</span>
                            </button>
                            <button className="text-white text-sm font-bold tracking-widest hover:text-primary transition-colors border-b-2 border-primary/20 hover:border-primary pb-1">
                                View Sample Chapter
                            </button>
                        </div>

                        {/* Architectural Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
                            {[
                                { label: 'Pages', val: '450+' },
                                { label: 'Chapters', val: '24' },
                                { label: 'Readers', val: '10K+' },
                                { label: 'Rating', val: '4.9/5' }
                            ].map((stat) => (
                                <div key={stat.label} className="space-y-1">
                                    <div className="text-2xl font-bold text-white">{stat.val}</div>
                                    <div className="text-[10px] tracking-widest text-muted-foreground font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Book Mockup with Glow */}
                    <div className="flex-1 relative w-full lg:max-w-md ml-auto animate-in fade-in slide-in-from-right duration-1000">
                        <div className="relative z-10 p-0 bg-card border-x border-white/10 shadow-2xl">
                            <div className="aspect-[3/4] relative overflow-hidden bg-primary/20">
                                <Image
                                    src="/cover.png"
                                    alt="Book Cover"
                                    fill
                                    className="object-cover transform scale-105 hover:scale-100 transition-transform duration-1000"
                                />
                            </div>
                        </div>
                        {/* Decorative geometrical elements */}
                        <div className="absolute -top-12 -right-12 w-32 h-32 border border-primary/20 hidden lg:block" />
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/5 hidden lg:block" />
                    </div>

                </div>
            </div>

            {/* Background Decorative Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap -rotate-90">
                REVOLUTION
            </div>
        </section>
    )
}

export default Hero