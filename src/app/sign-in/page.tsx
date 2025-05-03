import { signIn } from "./actions";

export default function SignInPage() {
    return (
        <form action={signIn}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Sign In</button>
        </form>
    );
}
