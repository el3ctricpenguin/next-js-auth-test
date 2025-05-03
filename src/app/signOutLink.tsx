"use client";

import { signOut as signOutAction } from "./actions";

export default function SignOutLink() {
    const signOut = async () => {
        await signOutAction();
        window.location.reload();
    };

    return (
        <a onClick={signOut} href="#">
            Log Off
        </a>
    );
}
