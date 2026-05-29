"use client";

import BaseLayout from "@/components/layout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

export default function Account(): ReactElement {
	const { data: session } = useSession();

	if (!session) redirect("/signin");

	return (
		<BaseLayout>
			<div className="w-fit max-w-4xl mx-auto p-6">
				<div className="max-w-fit p-4 rounded-lg flex flex-col items-center">
					<Image
						src={session?.user?.image!}
						className="rounded-full mx-auto mb-4"
						alt="Profile"
						width={128}
						height={128}
					/>
					<h2 className="text-xl font-semibold text-center">
						{session?.user?.name || "Anonymous"}
					</h2>
					<p className="text-center">{session?.user?.email}</p>
					<p className="text-center">{session?.expires}</p>
				</div>
			</div>
		</BaseLayout>
	);
}
