import { getSession } from "@/lib/session";
import SignOutLink from "./signOutLink";

export default async function Home() {
    const session = await getSession();
    if (!session) {
        return (
            <div>
                <p>{"you're not logged in"}</p>
                <a href="/sign-in">Sign In</a>
                <a href="/sign-up">Sign Up</a>
            </div>
        );
    }
    return (
        <div>
            <p>{`you're logged in, ${session.username}!`}</p>
            <SignOutLink />
        </div>
    );
}
