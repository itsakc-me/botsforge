"use client";

import dynamic from "next/dynamic";
import { NotFoundAnimation } from "@/assets/lottie";
import { ReactElement } from "react";
import BaseLayout from "@/components/layout";
import Link from "next/link";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function NotFound(): ReactElement {
    return (
        <BaseLayout>
            <div className="min-h-[85vh] flex flex-wrap items-center justify-evenly pb-10">
                <Lottie animationData={NotFoundAnimation} loop autoPlay />
                <div className="text-center">
                    <h1 className="text-6xl text-primary font-bold">404</h1>
                    <p className="mt-4 text-xl">Page Not Found</p>
                    <p className="my-2 text-gray-400">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                    <Link href="/" className="btn btn-lg btn-primary text-nowrap">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </BaseLayout>
    );
}