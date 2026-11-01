import DripIconLogo from "@/assets/icons/drip.svg?react";
import {COMMON_TEXTS} from "@/constants/texts";

type Props = {
    isLogoShown?: boolean;
    isTitleShown?: boolean;
    logoSize?: number;
    appTitleSize?: string;
}

export const LogoWidget = ({
                               isLogoShown = true,
                               isTitleShown = true,
                               logoSize = 44,
                               appTitleSize = "text-4xl"
                           }: Props) => {
    return (
        <div className="flex items-center gap-5">
            {isLogoShown && (
                <DripIconLogo width={logoSize} height={logoSize}/>
            )}
            {isTitleShown && (
                <p className={`script-title text-primary-dark ${appTitleSize}`}>
                    {COMMON_TEXTS.appName}
                </p>
            )}
        </div>
    )
}