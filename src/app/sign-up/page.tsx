import Link from "next/link";
import { signUp } from "./actions";

export default function SignUpPage() {
    return (
        <>
            <form action={signUp}>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
            <br />
            <Link href="/">return to home</Link>
        </>
    );
}
