"use server";

import { clearSession } from "@/lib/session";

export const signOut = async () => {
    try {
        await clearSession();
        console.log("Session cleared successfully.");
    } catch (error) {
        console.error("Error clearing session:", error);
    }
};
