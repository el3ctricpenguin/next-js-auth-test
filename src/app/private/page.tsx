import { getSession } from "@/lib/session";
import Link from "next/link";

export default async function Home() {
    const session = await getSession();
    if (!session) {
        return (
            <div>
                <p>{"you shouldn't be here!!"}</p>
                <br />
                <Link href="/">return to home</Link>
            </div>
        );
    }
    return (
        <div>
            <p>{`you're logged in, ${session.username}!`}</p>
            <p>{"this is the private page, only logged in users can see this"}</p>
            <br />
            <Link href="/">return to home</Link>
        </div>
    );
}
