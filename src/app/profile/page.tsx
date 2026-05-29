"use client";

import BaseLayout from "@/components/layout";
import { SignIn } from "@/components/ui";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ReactElement } from "react";
import { IoPerson } from "react-icons/io5";
import $ from "jquery";

export default function ProfilePage(): ReactElement {
  const { data: session } = useSession();

  const ProfileImage = (): ReactElement =>
    session?.user?.image ? (
      <Image
        src={session?.user?.image}
        className="rounded-full mx-auto mb-4"
        alt="Profile"
        width={128}
        height={128}
        priority
      />
    ) : (
      <IoPerson fontSize={96} className="text-accent" />
    );

  const ProfileInformation = (): ReactElement =>
    session ? (
      <div className="col-span-2 space-y-6">
        <div className="p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input id="name" className="w-full p-2 border rounded" />
            </div>
            <div
              className="btn btn-sm btn-primary rounded-sm"
              onClick={() => {
                fetch("/api/profile", {
                  method: "POST",
                  body: JSON.stringify({
                    id: session?.user?.id,
                    name: $("#name").val() as string,
                  }),
                }).then(() => {
                  window.location.reload();
                });
              }}
            >
              Save Changes
            </div>
          </div>
        </div>
      </div>
    ) : (
      <SignIn provider="google" />
    );

  return (
    <BaseLayout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="p-4 rounded-lg flex flex-col items-center">
              <ProfileImage />
              <h2 className="text-xl font-semibold text-center">
                {session?.user?.name || "Anonymous"}
              </h2>
              <p className="text-center">{session?.user?.email}</p>
            </div>
          </div>
          <ProfileInformation />
        </div>
      </div>
    </BaseLayout>
  );
}
