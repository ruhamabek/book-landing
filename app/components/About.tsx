"use client"

import React from 'react'
import { Lightbulb, Rocket, FileText, WalletCards, Mail, Route } from 'lucide-react'

const features = [
    {
        icon: Lightbulb,
        title: "Idea Validation First",
        description: "Learn to test your business idea before spending a dollar using real market data, buyer personas, and MVPs."
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
        description: "Run Google Search and Meta ads profitably even on small budgets using precision targeting over spray-and-pray spending."
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
        <section id="about" className="py-20 md:py-32 relative overflow-hidden font-segoe px-6 md:px-12 lg:px-24">
            <div className="container mx-auto relative z-10">

                {/* Header Block */}
                <div className="flex flex-col items-center text-center gap-6 mb-24 max-w-3xl mx-auto">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            What Makes{" "}
                            <span className="text-primary">This Different.</span>
                        </h2>
                        <p className="text-md md:text-lg text-gray-300 font-extralight leading-relaxed">
                            This collection gives you a complete entrepreneurial operating system from validating your first idea to running profitable paid ads so you never have to piece together random advice again.
                        </p>
                    </div>
                </div>

                {/* Card Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-6"
                        >
                            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl text-primary transform transition-transform duration-300 hover:scale-110">
                                <feature.icon size={32} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-300 font-extralight leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default About