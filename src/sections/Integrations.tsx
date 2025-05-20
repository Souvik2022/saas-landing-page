import Tag from "@/components/Tags";
import { div } from "framer-motion/client";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import Image from "next/image";
import Integrationscolumn from "@/components/integrationscolumn";


export const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionIcon, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackIcon, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeIcon, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerIcon, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubIcon, description: "GitHub is the leading platform for code collaboration." },
];

export type integrationsType = typeof integrations;

export default function Integrations() {
    return <section className="py-24 overflow-hidden">
        <div className="container ">
            <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                <div>
                    <Tag>Integrations</Tag>
                    <h2 className="font-medium text-6xl mt-6">Plays well with <span className="text-lime-400">others</span></h2>
                    <p className="text-lg mt-4 text-white/50">Layers seamlessly connect to your favorite tools, making it easy to plug into any
                        workflow and colloborate accross platforms
                    </p>
                </div>
                <div>
                    <div className="h-[400px] lg:h-[800px] mt-8 lg:m-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                        {/* <div className="flex flex-col gap-4 pb-4" >
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
            </div> */}
                        <Integrationscolumn integrations={integrations} />
                        <Integrationscolumn integrations={integrations.slice().reverse()} className="hidden md:flex" />
                    </div>
                </div>
            </div>
        </div>
    </section>;
}
