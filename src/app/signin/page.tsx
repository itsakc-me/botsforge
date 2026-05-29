"use client";

import BaseLayout from "@/components/layout";
import { SignIn as LogIn } from "@/components/ui/auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactElement } from "react";

export default function SignIn(): ReactElement {
    const { data: session } = useSession();

    if (session) redirect("/profile");

	return (
		<BaseLayout>
			<div className="flex items-center justify-center min-h-[85vh]">
				<div className="bg-base-300/10 p-8 rounded-lg shadow-md w-96">
					<h1 className="text-2xl font-bold mb-6 text-center">
						Sign In
					</h1>
					<LogIn provider="google" />
				</div>
			</div>
		</BaseLayout>
	);
}
