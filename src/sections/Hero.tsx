"use client";

import { section } from "framer-motion/client";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import {motion , useAnimate} from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    const [leftDesignScope , leftDesignAnimate] = useAnimate()
    const [rightDesignScope , rightDesignAnimate] = useAnimate()
    
    useEffect(() => {
      leftDesignAnimate([
        [leftDesignScope.current , {opacity:1} , {duration : 0.5}],
        [leftDesignScope.current , {x : 0 , y:0} , {duration : 0.5}],
      ])
      rightDesignAnimate([
        [rightDesignScope.current , {opacity:1} , {duration : 0.5}],
        [rightDesignScope.current , {x : 0 , y:0} , {duration : 0.5}],
      ])
    }, [])
    

    return (
        <section className="py-24 overflow-clip">
            <div className="containe relative">
                <motion.div ref = {leftDesignScope} initial={{opacity:0 , y:100 , x:-100}} className="absolute -left-32 hidden lg:block">
                    <Image src={designExample1Image} alt="Design Example 1" className="rounded-lg"/>
                </motion.div>
                <motion.div ref = {rightDesignScope} initial={{opacity:0 , y:100 , x:200}} className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2Image} alt="Design Example 2" className="rounded-lg"/>  
                </motion.div>  
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full font-semibold text-neutral-950">
                        ✨ $7.5M seed round raised
                    </div>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-8 max-w-5xl mx-auto px-14"> Impactful design, created effortlessly </h1>
                <p className="text-center  text-xl text-white/50 mt-8 max-w-2xl mx-auto px-14">
                    Design and build your product with a team that understands your business.
                    Layers includes designers, developers, and product managers.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8  max-w-md mx-auto ">
                    
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 sm:flex-1  md:flex-1 w-full"
                    />
                    
                    
                    <button
                        type="submit"
                        className="inline-flex justify-center items-center border border-lime-400 bg-lime-400 font-medium rounded-full h-9 px-4  text-black whitespace-nowrap"
                    >
                        Sign Up
                    </button>
                    
                    
                    
                    
                </form>
            </div>
        </section>
    );
}