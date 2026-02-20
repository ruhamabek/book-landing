"use client"
import React from 'react'
import { Twitter, Github, Linkedin, Globe } from 'lucide-react'

const Author = () => {
    return (
        <section id="author" className="py-24 bg-primary relative overflow-hidden font-segoe">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-12">

                    {/* Author Image */}
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
                            alt="Author"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:-text-4xl font-bold text-white">
                            About The Author
                        </h2>
                        <div className="space-y-4">
                            <p className="text-md md:text-lg text-white font-light leading-relaxed">
                                This book landing page template is made by product designer <span className="font-semibold underline">Xiaoying Riley</span> for developers. You can use this template to self-publish and promote your book/ebook. You can easily use platforms such as Gumroad to handle your book payment and delivery.
                            </p>
                            <p className="text-sm md:text-md text-white font-light leading-relaxed">
                                This template is 100% FREE as long as you <span className="font-semibold">keep the footer attribution link</span>. You do not have the rights to resell, sublicense or redistribute (even for free) the template on its own or as a separate attachment from any of your work. If you'd like to use this template without the footer attribution link, you can buy the <span className="font-semibold underline">commercial license</span>.
                            </p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="space-y-6 pt-4">
                        <h3 className="text-lg font-semibold text-white">
                            Follow Author
                        </h3>
                        <div className="flex items-center justify-center gap-6">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Globe, href: "#" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-white hover:bg-black/20 hover:scale-110 transition-all duration-300"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Author