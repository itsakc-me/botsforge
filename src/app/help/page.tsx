import {
	FaSearch,
	FaQuestionCircle,
	FaEnvelope,
	FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import BaseLayout from "@/components/layout";

export default function HelpCenterPage() {
	return (
		<BaseLayout>
			<section className="w-full flex flex-col items-center justify-center gap-8 px-4 py-12">
				<h2 className="text-3xl font-bold flex items-center gap-2">
					<FaQuestionCircle className="text-primary" />
					Help Center
				</h2>
				<div className="w-full max-w-2xl">
					<div className="relative">
						<input
							type="text"
							placeholder="Search help articles..."
							className="input input-bordered w-full pl-10 focus:outline-none"
						/>
						<FaSearch className="absolute left-3 top-3 opacity-50" />
					</div>
				</div>
				<div className="w-full max-w-4xl flex flex-col gap-6">
					<div className="collapse collapse-open collapse-arrow bg-base-200 rounded-2xl">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							Getting Started
						</div>
						<div className="collapse-content">
							<div className="flex flex-col gap-4 pl-4">
								<Link
									href="/docs/getting-started"
									className="link"
								>
									How to Set Up BotsForge
								</Link>
								<Link
									href="/docs/creating-your-first-bot"
									className="link"
								>
									Creating Your First Bot
								</Link>
								<Link
									href="/docs/block-coding-basics"
									className="link"
								>
									Block Coding Basics
								</Link>
							</div>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-base-200 rounded-2xl">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							Troubleshooting
						</div>
						<div className="collapse-content">
							<div className="flex flex-col gap-4 pl-4">
								<Link
									href="/help/common-issues"
									className="link"
								>
									Common Issues and Fixes
								</Link>
								<Link
									href="/help/debugging-tips"
									className="link"
								>
									Debugging Tips
								</Link>
							</div>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-base-200 rounded-2xl">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							FAQs
						</div>
						<div className="collapse-content">
							<div className="flex flex-col gap-4 pl-4">
								<Link href="/faq" className="link">
									View All FAQs
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full max-w-4xl">
					<h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="card p-6 flex flex-col items-center gap-4 bg-base-200">
							<FaEnvelope className="text-4xl text-primary" />
							<h4 className="text-xl font-semibold">Email Us</h4>
							<p className="text-center opacity-80">
								Reach out to us at{" "}
								<a
									href="mailto:support@botsforge.com"
									className="link"
								>
									support@botsforge.com
								</a>
								.
							</p>
						</div>
						<div className="card p-6 flex flex-col items-center gap-4 bg-base-200">
							<FaGithub className="text-4xl text-secondary" />
							<h4 className="text-xl font-semibold">
								GitHub Issues
							</h4>
							<p className="text-center opacity-80">
								Report bugs or request features on our{" "}
								<a
									href="https://github.com/xZcv-botsforge/botsforge/issues"
									className="link"
									target="_blank"
									rel="noopener noreferrer"
								>
									GitHub Issues page
								</a>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
		</BaseLayout>
	);
}
