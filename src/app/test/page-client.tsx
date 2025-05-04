"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

type APITestPageClientProps = {
    session: { username: string } | null;
};

export default function APITestPageClient({ session }: APITestPageClientProps) {
    const [isPublicApiPending, setIsPublicApiPending] = useState(false);
    const [publicMessage, setPublicMessage] = useState("");

    const [isPrivateApiPending, setIsPrivateApiPending] = useState(false);
    const [privateMessage, setPrivateMessage] = useState("");

    const handleClick = async (
        path: string,
        setIsPending: Dispatch<SetStateAction<boolean>>,
        setMessage: Dispatch<SetStateAction<string>>
    ) => {
        try {
            setIsPending(true);
            const response = await fetch(path, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Response:", response);
            setMessage(await response.text());
        } catch (error) {
            console.error("Error fetching API:", error);
        } finally {
            setIsPending(false);
        }
    };
    return (
        <>
            <p>status: {session ? "logged in" : "not logged in"}</p>
            <button
                onClick={() => {
                    handleClick("/api/public", setIsPublicApiPending, setPublicMessage);
                }}
                disabled={isPublicApiPending}
            >
                public
            </button>
            {publicMessage}
            <br />
            <button
                onClick={() => {
                    handleClick("/api/private", setIsPrivateApiPending, setPrivateMessage);
                }}
                disabled={isPrivateApiPending}
            >
                private
            </button>
            {privateMessage}
            <br />
            <br />
            <Link href="/">return to home</Link>
        </>
    );
}
