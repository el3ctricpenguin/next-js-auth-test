import { getSession } from "@/lib/session";
import { signOut as signOutAction } from "./actions";

export default async function Home() {
    const session = await getSession();
    if (!session) {
        return (
            <div>
                <p>{"you're not logged in"}</p>
                <p>
                    <a href="/sign-in">Sign In</a> <a href="/sign-up">Sign Up</a>
                </p>
                <p>
                    <a href="/test">API Test</a>
                </p>
            </div>
        );
    }
    return (
        <div>
            <p>{`you're logged in, ${session.username}!`}</p>
            <p>
                <a onClick={signOutAction} href="#">
                    Sign Off
                </a>
            </p>
            <p>
                <a href="/test">API Test</a>
            </p>
        </div>
    );
}
