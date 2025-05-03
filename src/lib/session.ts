import { isProduction } from "@/constants";
import { SignJWT, jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const SECRET = new TextEncoder().encode(process.env.SESSION_SECRET);
const cookiesPath = "token";

export async function createSession(res: NextResponse, userId: string) {
    const sessionHours = 2;
    const token = await new SignJWT({ userId })
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setExpirationTime(`${sessionHours}h`)
        .sign(SECRET);

    res.cookies.set(cookiesPath, token, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "lax",
        path: "/",
        maxAge: sessionHours * 60 * 60,
    });
}

export async function getSession(req: NextRequest) {
    const token = req.cookies.get(cookiesPath)?.value;
    if (!token) return null;
    try {
        const { payload } = await jwtVerify(token, SECRET);
        return payload as { userId: string };
    } catch {
        return null;
    }
}

export async function clearSession(res: NextResponse) {
    res.cookies.delete(cookiesPath);
}
