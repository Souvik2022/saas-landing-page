import { div } from "framer-motion/client";
import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props:HtmlHTMLAttributes<HTMLDivElement>){
    const {className , children , ...otherprops} = props;
    return(
        <div className={twMerge("inline-flex border border-lime-400 gap-2 text-lime-400 py-1 px-3 rounded-full uppercase items-center" , className)}{...otherprops}>
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    )
}