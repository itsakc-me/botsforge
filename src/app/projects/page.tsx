"use client";

import BaseLayout from "@/components/layout";
import { useSession } from "next-auth/react";
import { ReactElement, useEffect, useState } from "react";
import { IoAdd, IoTrashBinOutline } from "react-icons/io5";
import { IProject } from "../api/project";
import { IFSNode } from "../api/fsnode";

export default function Projects(): ReactElement {
	const { data: session } = useSession();
	const [name, setName] = useState("");
    const [projects, setProjects] = useState(new Array<IProject>());
	const isTemporary: boolean = !session;

    const tempStructure = [
        {
            name: "folder1",
            type: "folder"
        },
        {
            name: "folder2",
            type: "folder"
        },
        {
            name: "folder3",
            type: "folder"
        },
        {
            name: "folder4",
            type: "folder"
        },
        {
            name: "folder5",
            type: "folder"
        },
        {
            name: "file1",
            type: "file"
        },
        {
            name: "file2",
            type: "file"
        },
    ];

    useEffect(() => {
        (async function() {
            if (session) {
                setProjects(await (
                    await fetch(`/api/project?userId=${session?.user.id}`)
                ).json());
            }
        })();
    }, [session]);

	return (
		<BaseLayout>
            <div className="flex items-center justify-evenly gap-2 my-10">
                <input
                    type="text"
                    placeholder="name..."
                    className="input input-lg input-accent input-ghost border-b-2 border-b-accent focus:border-none"
                    onInput={(value) => setName(value.currentTarget.value)}
                />
                <button className="btn btn-lg btn-circle" onClick={async () => {
                    const project: IProject = await (await fetch("/api/project", {
                        method: "POST",
                        body: JSON.stringify({
                            userId: session?.user.id,
                            name: name,
                            isTemporary: isTemporary
                        })
                    })).json();
                    const rootFSNode: IFSNode = await (await fetch(`/api/fsnode?path=${project.name}&findMany=false`)).json();
                    for (const item of tempStructure) {
                        await fetch("/api/fsnode", {
                            method: "POST",
                            body: JSON.stringify({
                                name: item.name,
                                type: item.type,
                                parentId: rootFSNode.id
                            })
                        });
                    }
                    setProjects((oldProjects: IProject[]) => [...oldProjects, project]);
                }}>
                    <IoAdd className="text-accent" />
                </button>
            </div>
            <div className="grid grid-rows-1 w-full">
                {projects.map((project: IProject) => (
                    <div key={project.id} className="grid grid-rows-2 w-fit gap-10">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-accent">{project.id}</p>
                            {isTemporary ?
                                (<p className="text-sm text-accent">{project.expiresAt?.toString()}</p>) :
                            (<p className="text-sm text-accent">{project.userId}</p>)}
                            <p className="text-sm text-accent">{project.name}</p>
                            <p className="text-sm text-accent">{project.isTemporary}</p>
                            <p className="text-sm text-accent">{project.createdAt.toString()}</p>
                        </div>
                        <button className="btn btn-md btn-ghost" onClick={async () => {
                            await fetch("/api/project", {
                                method: "DELETE",
                                body: JSON.stringify({ id: project.id })
                            });
                            setProjects(projects.filter((current: IProject) => current.id !== project.id));
                        }}>
                            <IoTrashBinOutline className="text-accent" />
                        </button>
                    </div>
                ))}
            </div>
		</BaseLayout>
	);
}
