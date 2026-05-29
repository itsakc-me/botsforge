import Link from "next/link";
import { ReactElement } from "react";
import { FaBook, FaGithub, FaCode, FaQuestionCircle } from "react-icons/fa";

export default function QuickLinks(): ReactElement {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-6 px-4 max-sm:px-16 py-8 bg-base-100/25">
            <h2 className="text-3xl font-bold">Quick Links</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                <Link href="/docs" className="card p-6 flex flex-col items-center gap-4 rounded-2xl bg-base-200 hover:bg-base-300/50 hover:shadow-lg transition-all">
                    <FaBook className="text-4xl text-primary" />
                    <h3 className="text-xl font-semibold">Documentation</h3>
                    <p className="text-center opacity-80">Learn how to use BotsForge.</p>
                </Link>
                <Link href="https://github.com/itsakc-me/botsforge" className="card p-6 flex flex-col items-center gap-4 rounded-2xl bg-base-200 hover:bg-base-300/50 hover:shadow-lg transition-all">
                    <FaGithub className="text-4xl text-secondary" />
                    <h3 className="text-xl font-semibold">GitHub</h3>
                    <p className="text-center opacity-80">Star the repo and contribute.</p>
                </Link>
                <Link href="/docs/examples" className="card p-6 flex flex-col items-center gap-4 rounded-2xl bg-base-200 hover:bg-base-300/50 hover:shadow-lg transition-all">
                    <FaCode className="text-4xl text-accent" />
                    <h3 className="text-xl font-semibold">Examples</h3>
                    <p className="text-center opacity-80">Explore demo bots and templates.</p>
                </Link>
                <Link href="/help" className="card p-6 flex flex-col items-center gap-4 rounded-2xl bg-base-200 hover:bg-base-300/50 hover:shadow-lg transition-all">
                    <FaQuestionCircle className="text-4xl text-warning" />
                    <h3 className="text-xl font-semibold">Help</h3>
                    <p className="text-center opacity-80">Get support and FAQs.</p>
                </Link>
            </div>
        </section>
    );
}