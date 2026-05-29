import { FaGithub, FaUsers, FaCode } from "react-icons/fa";
import Link from "next/link";
import BaseLayout from "@/components/layout";
import Image from "next/image";

type Contributor = {
	id: string;
	html_url: string;
	avatar_url: string;
	login: string;
};

async function getContributors() {
	const res = await fetch("https://api.github.com/repos/xZcv-botsforge/botsforge/contributors");
	if (!res.ok) throw new Error("Failed to fetch contributors");
	return res.json();
}

async function getRepoStats() {
	const res = await fetch("https://api.github.com/repos/xZcv-botsforge/botsforge");
	if (!res.ok) throw new Error("Failed to fetch repo stats");
	return res.json();
}

export default async function About() {
	const contributors = await getContributors();
	const repoStats = await getRepoStats();

	return (
		<BaseLayout>
			<section className="w-full flex flex-col items-center justify-center gap-8 px-4 py-12">
				<h2 className="text-3xl font-bold flex items-center gap-2">
					About BotsForge
				</h2>
				<div className="w-full max-w-2xl text-center">
					<p className="text-lg opacity-80">
						BotsForge is an open-source platform designed to
						simplify bot development. Our mission is to empower
						developers and enthusiasts to create, manage, and deploy
						bots effortlessly using block coding and text-based
						scripting.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
					<div className="flex flex-col items-center gap-2">
						<FaGithub className="text-4xl text-secondary" />
						<h3 className="text-2xl font-bold">
							{repoStats.stargazers_count}
						</h3>
						<p className="opacity-80">Stars</p>
					</div>
					<div className="flex flex-col items-center gap-2">
						<FaCode className="text-4xl text-accent" />
						<h3 className="text-2xl font-bold">
							{repoStats.forks_count}
						</h3>
						<p className="opacity-80">Forks</p>
					</div>
					<div className="flex flex-col items-center gap-2">
						<FaUsers className="text-4xl text-primary" />
						<h3 className="text-2xl font-bold">
							{contributors.length}
						</h3>
						<p className="opacity-80">Contributors</p>
					</div>
				</div>
				<div className="w-full max-w-4xl">
					<h3 className="text-2xl font-bold mb-4">
						Our Contributors
					</h3>
					<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
						{contributors.map((contributor: Contributor) => (
							<a
								key={contributor.id}
								href={contributor.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center gap-2"
							>
								<Image
									src={contributor.avatar_url}
									alt={contributor.login}
									className="w-16 h-16 rounded-full"
								/>
								<p className="text-sm opacity-80">
									{contributor.login}
								</p>
							</a>
						))}
					</div>
				</div>
				<div className="flex flex-col items-center gap-4 mt-8">
					<p className="text-center opacity-80">
						Want to be part of the BotsForge community? Start
						contributing today!
					</p>
					<Link
						href="https://github.com/xZcv-botsforge/botsforge"
						className="btn btn-primary"
					>
						Contribute Now →
					</Link>
				</div>
			</section>
		</BaseLayout>
	);
}
