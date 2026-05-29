"use client";

import { ReactElement } from "react";
import { FaBots } from "react-icons/fa6";
import { IoMenuOutline, IoPerson, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { SignIn, LogOut } from "../auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import $ from "jquery";
import "./navbar.css";
import Link from "next/link";

export default function Navbar(): ReactElement {
	const { data: session } = useSession();

	const AccDropdown = (): ReactElement => (
		<div className="dropdown dropdown-end max-[420px]:hidden">
			<Image
				tabIndex={0}
				role="button"
				src={session?.user?.image || ''}
				alt="profile"
				width={48}
				height={48}
				className="border border-base-300 rounded-full"
			/>
			<div
				tabIndex={0}
				className="dropdown-content mt-2 min-w-fit bg-base-100 rounded-xl z-1 shadow-sm"
			>
                <div className="border-b-2 px-4 py-3">
                    <h1 className="text-xl font-bold">{session?.user?.name}</h1>
                    <p className="text-sm">{session?.user?.email}</p>
                </div>
                <ul className="menu min-w-56 px-4 py-3">
                    <li>
                        <Link href="/profile" className="inline-flex gap-4">
                            <IoPersonOutline fontSize={16} />
                            View Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="/account" className="inline-flex gap-4">
                            <IoPerson fontSize={16} />
                            Account Information
                        </Link>
                    </li>
                </ul>
                <div className="border-t-2 px-4 py-3 flex justify-center"><LogOut /></div>
            </div>
		</div>
	);

	return (
		<nav className="base navbar gap-16 w-full sm:px-8 py-4">
			<div className="navbar-start gap-3 text-center">
				<button
					className="btn btn-square btn-ghost"
					onClick={() => {
						$(".base.sidebar").toggleClass("active-sidebar");
						$(".base.layout").toggleClass("ml-layout-72");
					}}
				>
					<IoMenuOutline className="text-2xl" />
				</button>
				<span className="inline-flex text-center items-center font-bold text-4xl text-accent">
					<FaBots fontSize={72} />
					forge
					<span className="text-base-100">.com</span>
				</span>
			</div>
			<div className="navbar-end gap-4">
				{session ? <AccDropdown /> : <SignIn provider="google" className="max-[600px]:hidden" />}
				<div className="flex items-center justify-center rounded-full bg-base-100 inset-shadow-sm">
					<input
						type="text"
						placeholder="Search"
						className="w-72 input input-md input-ghost focus:outline-none bg-base-300 rounded-full hidden min-md:block min-sm:w-40 min-sm:bg-base-100"
					/>
					<button
						className="btn btn-circle btn-accent shadow-md"
						onClick={() => {
							$(".base.navbar div.navbar-end div").toggleClass(
								"active-searcharea"
							);
							$(
								".base.navbar div.navbar-end div > input"
							).toggleClass("hidden");
						}}
					>
						<IoSearchOutline className="text-black" />
					</button>
				</div>
			</div>
		</nav>
	);
}
