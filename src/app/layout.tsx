import * as Fonts from "@/assets/fonts";
import type { Metadata } from "next";
import { ReactElement } from "react";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "botsforge.com",
  description: "Develop next gen-zBots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="en" className="scroll-smooth bg-base-200">
      <body
        className={`${Fonts.Borel.variable}
                    ${Fonts.LeagueSpartan.variable}
                    ${Fonts.Poppins.variable}
                    ${Fonts.Quicksand.variable}
                    antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
