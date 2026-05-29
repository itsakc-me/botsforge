import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { IFSNode } from "../fsnode";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userId, name, isTemporary } = body;
        const fsNode: IFSNode = await (await fetch(`${process.env.NEXTAUTH_URL}/api/fsnode`, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                type: "folder",
                parentId: null
            })
        })).json();

        const project = await prisma.project.create({
            data: {
                userId: userId,
                fsnodeId: fsNode!.id,
                name: name,
                isTemporary: isTemporary,
            }
        });

        return NextResponse.json(project);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to create project!" },
            { status: 500 }
        );
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const { id } = body;

        const project = await prisma.project.delete({ where: { id: id } });
        await fetch(`${process.env.NEXTAUTH_URL}/api/fsnode`, {
            method: "DELETE",
            body: JSON.stringify({
                id: project.fsnodeId
            })
        });

        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete project!" },
            { status: 500 }
        );
    }
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const userId = searchParams.get("userId");
        const findMany = searchParams.get("findMany");

        if (findMany == "false") {
            const project = await prisma.project.findUnique({
                where: {
                    id: id as string
                }
            });
            return NextResponse.json(project);
        } else {
            const projects = await prisma.project.findMany({
                where: {
                    userId: userId as string
                }
            });
            return NextResponse.json(projects);
        }
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to retrieve project/projects!" },
            { status: 500 }
        )
    }
}
