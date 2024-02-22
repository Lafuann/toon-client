import "./globals.css";

export const metadata = {
    title: "TOON - Toko Online",
    description: "Created by Naufal",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
