"use client";
import Tag from "@/components/Tags";
import { scroll } from "framer-motion";


const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return <section className="py-24 lg:py-40">
        <div className="container">
            <div className="sticky top-28">
                <div className="flex justify-center">
                    <Tag>Introducing Layers</Tag>
                </div>

                <div className="text-4xl md:text-6xl lg:text-8xl text-center font-medium mt-10 m-9">
                    <span>Your creative process deserves better.</span>
                    <span className="text-white/15">{text}</span>
                    <span className="text-lime-400 block">That's why we built layers</span>
                </div>
            </div>
            <div className="h-[150vh]"></div>

        </div>

    </section>;
}
