"use server";

import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {
    let success = false;
    try {
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
        const user = await prisma.user.create({
            data: {
                username,
                password,
            },
        });
        console.log("User successfully created:", user);
        await createSession(user.username);
        success = true;
    } catch (error) {
        console.error("Error creating user:", error);
    }
    if (success) redirect("/");
};
