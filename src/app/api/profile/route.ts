import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { id, name } = body;
        const response = await prisma.user.update({
            where: { id: id },
            data: { name: name }
        });

        return NextResponse.json(response);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        return NextResponse.json(
            { error: 'Failed to update user name! ' + message },
            { status: 500 }
        );
    }
}
