import { Link } from "@/components/primitives/Link";

type Props = {
  text: string;
  linkText: string;
  to: string;
};

export const AuthSwitchLink = ({ text, linkText, to }: Props) => (
  <div className="mt-6 flex items-center justify-center gap-2">
    <span>{text}</span>
    <Link to={to} variant="primary" size="sm">
      {linkText}
    </Link>
  </div>
);
