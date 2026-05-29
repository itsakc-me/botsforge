"use client";

import Link from "next/link";
import { ReactElement } from "react";
import {
  IoCodeSlashOutline,
  IoFileTrayOutline,
  IoHelpCircleOutline,
  IoInformationCircleOutline,
  IoLibraryOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { LogOut, SignIn } from "./auth";
import { useSession } from "next-auth/react";

export default function Sidebar(): ReactElement {
  const { data: session } = useSession();

  return (
    <ul
      id="sidebar"
      className="base sidebar transition-all ease-in-out duration-300 fixed z-1 top-0 left-0 max-lg:left-[-100%] overflow-x-hidden flex flex-col items-start justify-start gap-7 w-72 px-6 py-8 border-r-2 border-base-100 shadow-md shadow-base-100"
    >
      <IoCodeSlashOutline className="text-8xl m-auto text-accent min-w-fit min-h-fit" />
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <sub className="text-[1rem] mb-1">
          <div className="inline-flex items-center gap-2">
            <IoInformationCircleOutline className="text-blue-500" />{" "}
            <span className="opacity-50">Info</span>
          </div>
        </sub>
        <hr className="mb-3 w-full opacity-15" />
        <div className="flex flex-col border-l-4 border-base-100 ml-2 pl-2">
          <Link
            href="/profile"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            View Profile
          </Link>
          <Link
            href="/account"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Account Information
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <sub className="text-[1rem] mb-1">
          <div className="inline-flex items-center gap-2">
            <IoFileTrayOutline className="text-blue-500" />{" "}
            <span className="opacity-50">Pages</span>
          </div>
        </sub>
        <hr className="mb-3 w-full opacity-15" />
        <div className="flex flex-col border-l-4 border-base-100 ml-2 pl-2">
          <Link
            href="/"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Your Projects
          </Link>
          <Link
            href="/docs"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Documentation
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <sub className="text-[1rem] mb-1">
          <div className="inline-flex items-center gap-2">
            <IoLibraryOutline className="text-green-500" />{" "}
            <span className="opacity-50">Bot Tools</span>
          </div>
        </sub>
        <hr className="mb-3 w-full opacity-15" />
        <div className="flex flex-col border-l-4 border-base-100 ml-2 pl-2">
          <Link
            href="/docs/getting-started"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Getting Started
          </Link>
          <Link
            href="/projects/create-bot"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Create a Bot
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <sub className="text-[1rem] mb-1">
          <div className="inline-flex items-center gap-2">
            <IoPeopleOutline className="text-purple-500" />{" "}
            <span className="opacity-50">Community</span>
          </div>
        </sub>
        <hr className="mb-3 w-full opacity-15" />
        <div className="flex flex-col border-l-4 border-base-100 ml-2 pl-2">
          <Link
            href="/blog"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Blog
          </Link>
          <Link
            href="/forum"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Community Forum
          </Link>
          <Link
            href="https://github.com/xZcv-botsforge/botsforge/blob/main/CONTRIBUTING.md"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Contribute
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 w-full">
        <sub className="text-[1rem] mb-1">
          <div className="inline-flex items-center gap-2">
            <IoHelpCircleOutline className="text-amber-500 text-xl" />{" "}
            <span className="opacity-50">Help</span>
          </div>
        </sub>
        <hr className="mb-3 w-full opacity-15" />
        <div className="flex flex-col border-l-4 border-base-100 ml-2 pl-2">
          <Link
            href="/help"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Help Center
          </Link>
          <Link
            href="/about"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            Contact Us
          </Link>
          <Link
            href="/faq"
            className="font-medium text-lg hover:cursor-pointer hover:link-primary"
          >
            FAQs
          </Link>
        </div>
      </div>
      {session ? <LogOut /> : <SignIn provider="google" />}
    </ul>
  );
}
