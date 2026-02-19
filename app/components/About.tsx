"use client"

import React from 'react'
import { Lightbulb, Rocket, FileText, WalletCards, Mail, Route } from 'lucide-react'

const features = [
    {
        icon: Lightbulb,
        title: "Idea Validation First",
        description: "Learn to test your business idea before spending a dollar — using real market data, buyer personas, and MVPs."
    },
    {
        icon: Rocket,
        title: "Launch Frameworks That Work",
        description: "Follow a proven 7-day waitlist builder and 3-day micro-launch sequence to generate early buyers before you build."
    },
    {
        icon: FileText,
        title: "Pages That Actually Convert",
        description: "Engineer bottom-of-funnel landing pages with the exact psychological triggers that turn visitors into customers."
    },
    {
        icon: WalletCards,
        title: "Paid Ads on a Budget",
        description: "Run Google Search and Meta ads profitably — even on small budgets — using precision targeting over spray-and-pray spending."
    },
    {
        icon: Mail,
        title: "Email Retention Mastery",
        description: "Build a loyalty system that keeps customers coming back with personalization, anti-churn sequences, and deep connection strategies."
    },
    {
        icon: Route,
        title: "End-to-End Ad Funnel Strategy",
        description: "Map the full customer journey from awareness to conversion and measure ROI at every step."
    }
]

const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            What Makes{" "}
                            <span className="text-primary italic">This Different.</span>
                        </h2>
                        <p className="text-lg text-slate-300 font-normal leading-relaxed">
                            This collection gives you a complete entrepreneurial operating system — from validating your first idea to running profitable paid ads — so you never have to piece together random advice again.
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