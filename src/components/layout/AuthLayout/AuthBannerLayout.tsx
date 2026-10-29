import { type ReactNode } from "react";
import { AuthLayout } from "./index";

type Props = {
  banner: string;
  bannerAlt: string;
  children: ReactNode;
};

export const AuthBannerLayout = ({ banner, bannerAlt, children }: Props) => (
  <AuthLayout>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 h-screen">
      <img src={banner} alt={bannerAlt} className="w-full h-full min-w-0 object-cover" />
      {children}
    </div>
  </AuthLayout>
);
