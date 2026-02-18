"use client"

import React from 'react'
import { Laptop, Database, Rocket, Layout, Server, DollarSign } from 'lucide-react'

const features = [
    {
        icon: Laptop,
        title: "Front-end Mastery",
        description: "Build immersive UIs with modern React patterns and advanced CSS techniques."
    },
    {
        icon: Database,
        title: "Backend Scalability",
        description: "Master database architecture and high-performance server logic."
    },
    {
        icon: Rocket,
        title: "Deployment & OPS",
        description: "Zero-downtime deployment strategies for global web applications."
    },
    {
        icon: Layout,
        title: "Revolutionary Design",
        description: "Implement award-winning aesthetics inspired by high-tech neo-brutalism."
    },
    {
        icon: Server,
        title: "API Optimization",
        description: "Write ultra-fast APIs that scale to millions of concurrent requests."
    },
    {
        icon: DollarSign,
        title: "Financial Freedom",
        description: "Monetize your skills and build products that generate passive income."
    }
]

const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-revolutionary text-white leading-none">
                            Revolutionary <br />
                            <span className="text-primary italic">Learning.</span>
                        </h2>
                        <p className="text-lg text-slate-300 font-normal leading-relaxed">
                            This isn't just a book. It's an architectural blueprint for your career as a world-class developer.
                        </p>
                    </div>
                    <div className="hidden md:block text-[8rem] font-bold text-white/[0.03] select-none leading-none">
                        01
                    </div>
                </div>

                {/* Card Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-card border border-white/5 rounded-2xl hover:border-primary/20 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Feature Number */}
                            <div className="absolute top-6 right-6 text-[10px] font-bold text-white/10 group-hover:text-primary/30 transition-colors">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>

                            <div className="space-y-6">
                                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon size={24} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-base text-slate-300 font-normal leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default About