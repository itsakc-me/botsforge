import Link from "next/link";
import { ReactElement } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import BaseLayout from "@/components/layout";

export default function FAQ(): ReactElement {
	return (
		<BaseLayout>
			<section className="w-full flex flex-col items-center justify-center gap-8 px-4 py-12">
				<h2 className="text-3xl font-bold flex items-center gap-2">
					<FaQuestionCircle className="text-primary" />
					Frequently Asked Questions
				</h2>
				<div className="w-full max-w-2xl">
					<input
						type="text"
						placeholder="Search FAQs..."
						className="input input-bordered w-full focus:outline-none"
					/>
				</div>
				<div className="w-full max-w-4xl flex flex-col gap-6">
					<div className="collapse collapse-open collapse-arrow bg-base-200 rounded-2xl">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							General Questions
						</div>
						<div className="collapse-content">
							<div className="flex flex-col gap-4 pl-4">
								<div>
									<h3 className="font-semibold">
										What is BotsForge?
									</h3>
									<p className="opacity-80">
										BotsForge is an open-source platform
										designed to simplify bot development. It
										allows users to create, manage, and
										deploy bots for platforms like Telegram
										and Discord using block coding and
										text-based scripting.
									</p>
								</div>
								<div>
									<h3 className="font-semibold">
										Is BotsForge free to use?
									</h3>
									<p className="opacity-80">
										Yes, BotsForge is completely free and
										open-source. You can use it, modify it,
										and contribute to its development.
									</p>
								</div>
								<div>
									<h3 className="font-semibold">
										Who can use BotsForge?
									</h3>
									<p className="opacity-80">
										BotsForge is designed for both beginners
										and experienced developers. Whether
										you&apos;re new to bot development or an
										expert, BotsForge has tools to help you.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-base-200 rounded-2xl">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							Contributing
						</div>
						<div className="collapse-content">
							<div className="flex flex-col gap-4 pl-4">
								<div>
									<h3 className="font-semibold">
										How can I contribute to BotsForge?
									</h3>
									<p className="opacity-80">
										You can contribute by reporting bugs,
										suggesting features, or submitting pull
										requests. Check out our{" "}
										<Link
											href="https://github.com/xZcv-botsforge/botsforge/blob/main/CONTRIBUTING.md"
											className="link link-primary"
										>
											Contribution Guidelines
										</Link>{" "}
										for more details.
									</p>
								</div>
								<div>
									<h3 className="font-semibold">
										Do I need coding experience to
										contribute?
									</h3>
									<p className="opacity-80">
										No, you don&apos;t need coding experience to
										contribute. We welcome contributions in
										documentation, design, testing, and
										more.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-base-200 rounded-2xl">
						<input type="checkbox" />
						<div className="collapse-title text-xl font-medium">
							Usage
						</div>
						<div className="collapse-content">
							<div className="flex flex-col gap-4 pl-4">
								<div>
									<h3 className="font-semibold">
										How do I get started with BotsForge?
									</h3>
									<p className="opacity-80">
										Visit our{" "}
										<Link
											href="/docs/getting-started"
											className="link link-primary"
										>
											Getting Started Guide
										</Link>{" "}
										to learn how to set up and use
										BotsForge.
									</p>
								</div>
								<div>
									<h3 className="font-semibold">
										What platforms does BotsForge support?
									</h3>
									<p className="opacity-80">
										Currently, BotsForge supports Telegram
										and Discord bots. Support for more
										platforms is planned for the future.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</BaseLayout>
	);
}
