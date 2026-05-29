"use client";

import { signIn, signOut } from "next-auth/react";
import { IoEnter, IoExit } from "react-icons/io5";

const SignIn = ({ provider, className }: { provider: string; className?: string; }) => (
	<button
		className={`btn btn-md btn-primary w-fit rounded-full text-nowrap ${className}`}
		onClick={() => signIn(provider)}
	>
        <IoEnter fontSize={20} />
		Sign In with {provider[0].toUpperCase() + provider.substring(1)}
	</button>
);

const LogOut = ({ className }: { className?: string; }) => (
	<button
		className={`btn btn-md btn-primary w-fit rounded-full text-nowrap ${className}`}
		onClick={() => signOut()}
	>
        <IoExit fontSize={20} />
		Log Out
	</button>
);

export { SignIn, LogOut };
