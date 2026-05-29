import { FaDiscord, FaTelegram, FaEnvelope, FaGithub } from "react-icons/fa";
import Link from "next/link";
import BaseLayout from "@/components/layout";

export default function Contact() {
	return (
		<BaseLayout>
			<section className="w-full flex flex-col items-center justify-center gap-8 px-4 py-12">
				<h2 className="text-3xl font-bold">Contact Us</h2>
				<div className="w-full max-w-4xl">
					<h3 className="text-2xl font-bold mb-4">
						Join Our Community
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="card p-6 flex flex-col items-center gap-4 bg-base-200">
							<FaDiscord className="text-4xl text-primary" />
							<h4 className="text-xl font-semibold">Discord</h4>
							<p className="text-center opacity-80">
								Join our Discord server for real-time support
								and discussions.
							</p>
							<Link
								href="https://discord.gg/your-invite-link"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-accent text-base-200"
							>
								Join Discord
							</Link>
						</div>
						<div className="card p-6 flex flex-col items-center gap-4 bg-base-200">
							<FaTelegram className="text-4xl text-neutral" />
							<h4 className="text-xl font-semibold">Telegram</h4>
							<p className="text-center opacity-80">
								Join our Telegram group for updates and support.
							</p>
							<Link
								href="https://t.me/your-telegram-link"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-accent text-base-200"
							>
								Join Telegram
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full max-w-4xl">
					<h3 className="text-2xl font-bold mb-4">
						Support Channels
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div className="card p-6 flex flex-col items-center gap-4 bg-base-200">
							<FaDiscord className="text-4xl text-primary" />
							<h4 className="text-xl font-semibold">#support</h4>
							<p className="text-center opacity-80">
								Get help from the community in our dedicated
								support channel.
							</p>
							<Link
								href="https://discord.gg/your-invite-link"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-accent text-base-200"
							>
								Go to #support
							</Link>
						</div>
						<div className="card p-6 flex flex-col items-center gap-4 bg-base-200">
							<FaGithub className="text-4xl text-secondary" />
							<h4 className="text-xl font-semibold">
								GitHub Issues
							</h4>
							<p className="text-center opacity-80">
								Report bugs or request features on GitHub.
							</p>
							<Link
								href="https://github.com/xZcv-botsforge/botsforge/issues"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-accent text-base-200"
							>
								Open an Issue
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full max-w-4xl">
					<h3 className="text-2xl font-bold mb-4">Email Us</h3>
					<div className="card p-6 flex flex-col items-center gap-4 bg-base-200">
						<FaEnvelope className="text-4xl text-warning" />
						<h4 className="text-xl font-semibold">
							support@botsforge.com
						</h4>
						<p className="text-center opacity-80">
							Prefer email? Reach out to us directly.
						</p>
						<Link
							href="mailto:support@botsforge.com"
							className="btn btn-primary"
						>
							Send Email
						</Link>
					</div>
				</div>
			</section>
		</BaseLayout>
	);
}
