"use server";

import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const signIn = async (formData: FormData) => {
    let success = false;
    try {
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
        const user = await prisma.user.findUnique({
            where: { username },
        });
        if (!user || password !== user.password) {
            throw new Error("Invalid username or password");
        }
        console.log("User signed in:", user);
        await createSession(user.username);
        success = true;
    } catch (error) {
        console.error("Error signing in user:", error);
    }
    if (success) redirect("/");
};
