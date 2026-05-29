"use client";

import dynamic from "next/dynamic";
import { FaBilibili, FaQuoteLeft, FaScrewdriverWrench } from "react-icons/fa6";
import { ReactElement } from "react";
import { QuickLinks } from "@/components/ui";
import BaseLayout from "@/components/layout";
import * as Animations from "@/assets/lottie";
import Link from "next/link";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home(): ReactElement {
    return (
        <BaseLayout>
            <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 bg-base-200">
                <div className="text-center pt-24 h-fit max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
                        Build Bots Effortlessly with <br /> BotsForge 🤖
                    </h1>
                    <p className="text-lg mb-8 opacity-80">
                        An open-source platform to create, scale, and manage Telegram/Discord bots with block coding, text scripting, and GitHub integration.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/docs/getting-started" className="btn btn-primary btn-md">
                            Get Started →
                        </Link>
                        <Link href="https://github.com/xZcv-botsforge/botsforge" className="btn btn-outline btn-md">
                            View on GitHub ↗
                        </Link>
                    </div>
                </div>
                <div className="w-full h-[85vh] flex flex-col sm:flex-row items-center justify-center lg:justify-evenly px-8 gap-8">
                    <div className="pl-5 border-l-4 border-base-100">
                        <h1 className="text-4xl font-extrabold">
                            <FaBilibili />Dream It ...
                            <p className="text-accent">Make It!</p>
                        </h1>
                        <sup className="text-gray-500 mt-2 lg:mt-0">[ botsforge.com ]</sup>
                        <p className="text-md text-primary font-bold mt-5">With{" "}
                            <span className="inline-flex gap-2 font-extrabold text-2xl text-accent">
                                &quot;<FaScrewdriverWrench />Tools &quot;
                            </span>, You can&apos;t imagine.
                        </p>
                    </div>
                    <Lottie animationData={Animations.HeroAnimation} loop autoPlay className="w-[324] min-md:w-[512] h-fit" />
                </div>
            </section>
            <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-sm:px-16 py-8">
                <div className="card p-6 flex flex-col items-center gap-4 rounded-2xl bg-base-300/25 hover:bg-base-300/50 hover:shadow-lg hover:border-base-300 transition-all min-h-[300px]">
                    <Lottie animationData={Animations.HeroAnimation} loop autoPlay className="w-40 h-40" />
                    <h3 className="text-xl font-semibold">Visual Bot Building</h3>
                    <p className="text-center opacity-80">Drag-and-drop interface for no-code bot logic.</p>
                </div>
                <div className="card p-6 flex flex-col items-center gap-4 rounded-2xl bg-base-300/25 hover:bg-base-300/50 hover:shadow-lg hover:border-base-300 transition-all min-h-[300px]">
                    <Lottie animationData={Animations.ManagementAnimation} loop autoPlay className="w-40 h-40" />
                    <h3 className="text-xl font-semibold">Bot Management</h3>
                    <p className="text-center opacity-80">Easily manage and deploy your bots.</p>
                </div>
                <div className="card p-6 flex flex-col items-center gap-4 rounded-2xl bg-base-300/25 hover:bg-base-300/50 hover:shadow-lg hover:border-base-300 transition-all min-h-[300px]">
                    <Lottie animationData={Animations.CollaborationAnimation} loop autoPlay className="w-40 h-40" />
                    <h3 className="text-xl font-semibold">Collaboration & Scaling</h3>
                    <p className="text-center opacity-80">Work with teams and scale your bots effortlessly.</p>
                </div>
                <div className="card p-6 flex flex-col items-center gap-4 rounded-2xl bg-base-300/25 hover:bg-base-300/50 hover:shadow-lg hover:border-base-300 transition-all min-h-[300px]">
                    <Lottie animationData={Animations.TemplateAnimation} loop autoPlay className="w-40 h-40" />
                    <h3 className="text-xl font-semibold">Template Library</h3>
                    <p className="text-center opacity-80">Pre-built templates for common bot use cases.</p>
                </div>
            </section>
            <section className="w-full flex flex-col items-center justify-center gap-12 px-4 py-12">
                <h2 className="text-3xl font-bold">What’s In Future?</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
                    <div className="w-full lg:w-1/2">
                    <Lottie animationData={Animations.AnalyticsAnimation} loop autoPlay className="w-full h-64" />
                    </div>
                    <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-bold">Advanced Analytics</h3>
                    <p className="opacity-80">
                        Track your bot’s performance with real-time analytics and insights. Monitor user engagement, response times, and more.
                    </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 w-full max-w-6xl">
                    <div className="w-full lg:w-1/2">
                    <Lottie animationData={Animations.AIPoweredAnimation} loop autoPlay className="w-full h-64" />
                    </div>
                    <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-bold">AI-Powered Bots</h3>
                    <p className="opacity-80">
                        Build smarter bots with AI integration. Enable natural language processing, sentiment analysis, and more.
                    </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
                    <div className="w-full lg:w-1/2">
                    <Lottie animationData={Animations.MultiPlatformAnimation} loop autoPlay className="w-full h-64" />
                    </div>
                    <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-bold">Multi-Platform Support</h3>
                    <p className="opacity-80">
                        Expand your bot’s reach with support for Telegram, Discord, Slack, and more.
                    </p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4 mt-8">
                    <FaQuoteLeft className="text-4xl opacity-50" />
                    <p className="text-center text-xl italic max-w-2xl opacity-80">
                    &quot;Build highly-efficient bots that transform workflows and communities.&quot;
                    </p>
                </div>
            </section>
            <section className="w-full flex flex-col items-center justify-center gap-4 px-4 py-8 bg-error/10">
                <div className="text-6xl">🚧</div>
                <h2 className="text-3xl font-bold text-warning">Under Active Development</h2>
                <p className="text-center max-w-2xl opacity-80">
                    BotsForge is currently in its early stages. We&apos;re working hard to bring you the best bot-building experience. Your feedback and contributions are highly appreciated!
                </p>
                <Link href="/contribute" className="btn btn-warning mt-4">
                    Contribute Now →
                </Link>
            </section>
            <QuickLinks />
        </BaseLayout>
    )
}
