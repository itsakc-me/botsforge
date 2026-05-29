"use client";

import { SessionProvider } from "next-auth/react";
import { ReactElement, ReactNode } from "react";

export default function Providers({ children }: Readonly<{ children: ReactNode }>): ReactElement {
    return <SessionProvider>{children}</SessionProvider>
}