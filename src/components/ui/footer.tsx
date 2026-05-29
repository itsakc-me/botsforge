import Link from "next/link";
import { ReactElement } from "react";
import {
	FaGithub,
	FaTwitter,
	FaDiscord,
	FaEnvelope,
	FaRss,
	FaQuestionCircle,
} from "react-icons/fa";

export default function Footer(): ReactElement {
	return (
		<footer className="w-full text-base-content py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 min-[76rem]:grid-cols-5 min-[65.5rem]:pl-8 gap-8">
					<div className="flex flex-col gap-4">
						<h2 className="text-2xl font-bold text-accent">
							BotsForge
						</h2>
						<p className="opacity-80">
							An open-source platform for building and managing
							bots.
						</p>
						<div className="flex gap-4">
							<a href="https://github.com/itsakc-me/botsforge" className="opacity-80 hover:opacity-100">
								<FaGithub className="text-2xl" />
							</a>
							<a href="https://x.com/itsakc_me" className="opacity-80 hover:opacity-100">
								<FaTwitter className="text-2xl" />
							</a>
							<a href="https://discord.gg/yourinvite" className="opacity-80 hover:opacity-100">
								<FaDiscord className="text-2xl" />
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-lg font-semibold">Quick Links</h3>
						<Link href="/docs" className="opacity-80 hover:opacity-100">Documentation</Link>
						<Link href="/examples" className="opacity-80 hover:opacity-100">Examples</Link>
						<Link href="https://github.com/itsakc-me/botsforge/blob/main/CONTRIBUTING.md" className="opacity-80 hover:opacity-100">Contribute</Link>
						<Link href="/contact" className="opacity-80 hover:opacity-100">Contact Us</Link>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-lg font-semibold">
							Popular Templates
						</h3>
						<Link href="/templates/chatbot" className="opacity-80 hover:opacity-100">Chatbot</Link>
						<Link href="/templates/moderation" className="opacity-80 hover:opacity-100">Moderation Bot</Link>
						<Link href="/templates/automation" className="opacity-80 hover:opacity-100">Automation Bot</Link>
						<Link href="/templates/custom" className="opacity-80 hover:opacity-100">Custom Bot</Link>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-lg font-semibold">
							Subscribe to Our Newsletter
						</h3>
						<p className="opacity-80">
							Get the latest updates, news, and tutorials
							delivered to your inbox.
						</p>
						<form className="flex gap-2">
							<input type="email" placeholder="Enter your email" className="input input-bordered w-full" />
							<button type="submit" className="btn btn-primary">Subscribe</button>
						</form>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="text-lg font-semibold">Community</h3>
						<Link href="/blog" className="opacity-80 hover:opacity-100">
							<FaRss className="inline mr-2" /> Blog
						</Link>
						<Link href="/forum" className="opacity-80 hover:opacity-100">
							<FaDiscord className="inline mr-2" /> Forum
						</Link>
						<Link href="/events" className="opacity-80 hover:opacity-100">
							<FaEnvelope className="inline mr-2" /> Events
						</Link>
						<Link href="/support" className="opacity-80 hover:opacity-100">
							<FaQuestionCircle className="inline mr-2" /> Support
						</Link>
					</div>
				</div>
				<div className="border-t border-base-100/25 mt-8 pt-8 text-center opacity-80">
					<p>
						© {new Date().getFullYear()} BotsForge. All rights
						reserved.
					</p>
					<div className="flex justify-center gap-4 mt-2">
						<Link href="/terms" className="hover:underline">Terms of Service</Link>
						<Link href="/privacy" className="hover:underline">Privacy Policy</Link>
						<Link href="/cookies" className="hover:underline">Cookie Policy</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
