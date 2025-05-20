"use client"
import { section } from "framer-motion/client";
import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { link } from "fs";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    return (
    <>
    <section className="py-4 lg:py-8 fixed w-full  top-0 z-50">
        <div className="container max-w-5xl">
            <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4  md:pr-2 items-center ">
                    <div>
                        <Image src={logoImage} alt="Logo" className="h-9 md:h-auto w-auto " />
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map((link) => (
                                <a key={link.label} href={link.href}>
                                    {link.label}
                                </a>
                            ))}

                        </nav>
                    </div>
                    <div className="flex justify-end gap-4 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-menu md:hidden" onClick={() => setisOpen(!isOpen)}>
                            <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", isOpen && "rotate-45 -translate-y-1")}></line>
                            <line className={twMerge("transition", isOpen && "opacity-0")} x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition", isOpen && "-rotate-45 translate-y-1")}></line>
                        </svg>
                        <button className="justify-center items-center hidden md:inline-flex border border-white/40 font-medium rounded-full text-white px-6 h-12">Log in</button>
                        <button className="justify-center items-center hidden md:inline-flex border border-lime-400 bg-lime-400 font-medium rounded-full h-12 text-black px-6">Sign Up</button>
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (<motion.div 
                    initial = {{height : 0}}
                    animate = {{height : "auto"}}
                    exit={{height:0}}

                    className="overflow-hidden">
                        <div className="flex flex-col items-center gap-4 py-4 ">
                        {navLinks.map(links => (
                            <a href={links.href} key={links.label} className="">{links.label}</a>
                        ))}
                        <button className="justify-center items-center  md:inline-flex border border-white/40 font-medium rounded-full text-white px-6 h-12">Log in</button>
                        <button className="justify-center items-center  md:inline-flex border border-lime-400 bg-lime-400 font-medium rounded-full h-12 text-black px-6">Sign Up</button>
                        </div>
                    </motion.div>
                    )}
                    </AnimatePresence>

            </div>
        </div>
        
    </section>
    <div className="pb-[86px] md:pb-[98px] lg:pb-[130p]"></div>
    </>)
}
