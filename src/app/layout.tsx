export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body style={{ backgroundColor: "#1a1a1a", color: "#fff" }}>{children}</body>
        </html>
    );
}
