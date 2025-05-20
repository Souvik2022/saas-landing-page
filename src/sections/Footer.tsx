import logoImage from "@/assets/images/logo.svg";
import { div } from "framer-motion/client";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return <section className="py-16">
        <div className="container">
            <div className="flex  flex-col md:flex-row md:justify-between items-center gap-6">
                <div >
                    <Image src={logoImage} alt="footerimage"></Image>
                </div>

                <div className="flex gap-6">
                    {footerLinks.map((footerlink) =>
                        <div className="text-sm text-white/50" key={footerlink.label}>{footerlink.label}</div>
                    )}
                </div>

            </div>
        </div>

    </section>;
}
