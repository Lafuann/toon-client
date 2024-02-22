import { PrimaryHeader } from "./headers";

export function PrimaryLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <PrimaryHeader>{children}</PrimaryHeader>;
            </body>
        </html>
    );
}
