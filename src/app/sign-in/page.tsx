import { signIn } from "./actions";
import Link from "next/link";

export default function SignInPage() {
    return (
        <>
            <form action={signIn}>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign In</button>
            </form>
            <br />
            <Link href="/">return to home</Link>
        </>
    );
}
