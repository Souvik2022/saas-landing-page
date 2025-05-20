import { integrations } from "@/sections/Integrations";
import Image from "next/image";
import { type integrationsType } from "@/sections/Integrations";
import { twMerge } from "tailwind-merge";

export default function Integrationscolumn( props : {integrations : integrationsType;
    className?:string;

}){
    const {integrations , className } = props;
    return (
        <div className={twMerge("flex flex-col gap-4 pb-4" , className)}> 
                {integrations.map((integration) => (
                    <div key={integration.name} className="bg-neutral-900 border border-white/10 rounded-3xl p-6">
                        <div className="flex justify-center">
                            <Image src={integration.icon} alt={integration.name} 
                            className="size-24 "/>
                        </div>
                        <h3 className="text-center mt-6 text-3xl">{integration.name}</h3>
                        <p className="text-center mt-2 text-white/50">{integration.description}</p>
                    </div>
                ))}
            </div>
    )
}