import { getSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
    const session = await getSession();
    if (!session) {
        return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ message: "authorized", username: session.username }, { status: 200 });
}
