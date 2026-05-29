import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { IFSNode } from ".";
import { v4 as uuid } from "uuid";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, type, parentId } = body;
		const contentKey = `projects/${uuid()}/files/${Date.now()}_${name}`;
		const path: string[] = [name];
		
		if (parentId != null) {
			const parentnode = await prisma.fSNode.findUnique({
				where: {
					id: parentId
				}
			});
			path.push(parentnode!.path);
			path.reverse();
		}

		const fsNode = await prisma.fSNode.create({
			data: {
				name: name,
				type: type,
                path: path.join("/"),
				parentId: parentId,
				contentKey: contentKey,
			},
		});

		return NextResponse.json(fsNode);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to create FSNode! " },
			{ status: 500 }
		);
	}
}

export async function DELETE(req: Request) {
	try {
		const body = await req.json();
		const { id } = body;
		const fsNode = await prisma.fSNode.findUnique({ where: { id: id } });
		const recursiveDelete = async function (parent: IFSNode) {
			const children = await prisma.fSNode.findMany({ where: { id: parent!.id } });
			children.forEach(async (child) => {
				recursiveDelete(child);
				await prisma.fSNode.delete({ where: { id: child.id } });
			});
		};

		recursiveDelete(fsNode!);
		return NextResponse.json(fsNode);
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to delete FSNode!" },
			{ status: 500 }
		);
	}
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
		const findMany = searchParams.get("findMany");
		const parentId = searchParams.get("parentId");
        const path = searchParams.get("path");

		if (findMany != undefined && findMany == "false") {
			const fsnode = await prisma.fSNode.findUnique({
				where: { path: path as string }
			});
			return NextResponse.json(fsnode);
		} else {
			const fsnodes = await prisma.fSNode.findMany({
				where: { parentId: parentId as string }
			});
			return NextResponse.json(fsnodes);
		}
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to retrieve fsnodes! " + error },
            { status: 500 }
        )
    }
}
