import Tag from "@/components/Tags";
import Featurecard from "@/components/Featurecard";
import { div } from "framer-motion/client";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";



const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center">
            <Tag>Features</Tag>
            </div>
            <h2 className="text-6xl font-medium mt-8 text-center max-w-2xl mx-auto ">Where power meets 
               {" "} <span className="text-lime-400">simplicity</span></h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                <Featurecard className="md:col-span-2 lg:col-span-1" title="Real-time collaboration" description="Work together seamlessly with conflict-free team editing">
                    <div className="flex aspect-video items-center justify-center">
                        <div className="size-20 rounded-full overflow-hidden border-4 border-blue-400 p-1 bg-neutral-900 z-40">
                            <Image src={avatar1} alt="avatar1" className="rounded-full"/>
                        </div>
                        <div className="size-20 rounded-full overflow-hidden border-4 border-indigo-400 p-1 bg-neutral-900 -ml-6 z-30" >
                            <Image src={avatar2} alt="avatar2" className="rounded-full" />
                        </div>
                        <div className="size-20 rounded-full overflow-hidden border-4 border-amber-400 p-1 bg-neutral-900 -ml-6 z-20">
                            <Image src={avatar3} alt="avatar3" className="rounded-full"/>
                        </div>
                        <div  className="size-20 rounded-full overflow-hidden border-transparent p-1 bg-neutral-700 -ml-6 z-10 inline-flex items-center justify-center gap-1"> 
                            {Array.from({length: 3}).map((_,i) => (  
                                <span 
                                className="size-1.5 rounded-full bg-white inline-flex">

                                </span>
                              ))}

                        </div>

                    </div>
                </Featurecard>

                <Featurecard className="md:col-span-2 lg:col-span-1" title="Interactive Prototyping" description="Engage your clients with prototypes that react to user actions">
                    <div className="aspect-video flex items-center justify-center">
                        <p className="text-4xl font-extrabold text-white/20 text-center">
                        We've achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth this year</p>
                    </div>
                </Featurecard>

                <Featurecard className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto" title="Keyboard quick actions" description="Powerful commands to help you create designs more quickly">
                    <div className="aspect-video flex items-center justify-center gap-4">
                        <div className=" bg-neutral-300 text-black text-xl font-medium py-3 px-6 rounded-2xl ">shift</div>

                        <div className="bg-neutral-300 text-black text-xl font-medium py-3 px-4 rounded-2xl ">alt</div>
                        <div className="bg-neutral-300 text-black text-xl font-medium py-3 px-5 rounded-2xl ">C</div>
                    </div>    
                </Featurecard>    
                
               
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {features.map((feature) => (
                    <div key={feature} className="bg-neutral-900 border border-white/10 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl inline-flex gap-3 items-center">
                        <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl">&#10038;</span>
                        <span className="font-medium md:text-lg">{feature}</span>
                    </div>
                    ))}
            </div>
        </div>

    </section>;
}
