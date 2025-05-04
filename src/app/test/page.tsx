import { getSession } from "@/lib/session";
import APITestPageClient from "./page-client";

export default async function APITestPage() {
    const session = await getSession();
    return <APITestPageClient session={session} />;
}
