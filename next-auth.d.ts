import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth";

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
    }
}

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			name?: string | null;
			email?: string;
			image?: string | null;
		};
	}
}
