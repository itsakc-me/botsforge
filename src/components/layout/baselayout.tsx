import { ReactElement, ReactNode } from "react";
import { Footer, Navbar, Sidebar } from "@/components/ui";

export default function BaseLayout({
  children,
}: Partial<{ children: ReactNode }>): ReactElement {
  return (
    <div className="w-full flex overflow-hidden">
      <Sidebar />
      <div className="base layout transition-all ease-in-out duration-300 flex flex-col w-full ml-72 max-lg:ml-0">
        <Navbar />
        <main className="w-full bg-base-100/25">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
