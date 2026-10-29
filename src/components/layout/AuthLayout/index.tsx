import { type ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export function AuthLayout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 flex flex-col md:pr-5">{children}</main>
        </div>
    );
}

