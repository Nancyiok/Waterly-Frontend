import { NOT_FOUND_TEXTS } from "@/constants/texts/notFound";
import { Link } from "react-router";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/primitives/Button";
import { LogoWidget } from "@/components/widgets/LogoWidget";

export const NotFoundPage = () => (
    <AuthLayout>
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 text-center p-5">

            <LogoWidget logoSize={80} appTitleSize="text-5xl" />

            <h1 className="script-title text-4xl md:text-5xl text-primary-dark">
                {NOT_FOUND_TEXTS.title}
            </h1>

            <p className="max-w-xs">
                {NOT_FOUND_TEXTS.description}
            </p>

            <Link to="/">
                <Button size="lg">
                    {NOT_FOUND_TEXTS.backButton}
                </Button>
            </Link>
        </div>
    </AuthLayout>
);