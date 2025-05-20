import { Children } from "react";
import { twMerge } from "tailwind-merge";

export default function Featurecard(props:{
    title:string;
    description:string;
    children?:React.ReactNode;
    className?:string;
}) {
    const {title,description,children , className} = props;
    return (
        <div className={twMerge("bg-neutral-900 border border-white/10 p-6 rounded-3xl",className)}>
            <div  className="aspect-video">{children}</div>
            <div>
                <h3 className="font-medium text-3xl mt-6">
                    {title}
                </h3>
                <p className="mt-2 text-white/50">{description }</p>
            </div>
        </div>

    )
}
