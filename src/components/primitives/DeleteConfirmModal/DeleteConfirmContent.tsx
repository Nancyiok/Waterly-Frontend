import { IconBadge } from "@/components/primitives/IconBadge";

type Props = {
  title: string;
  message: string;
};

export const DeleteConfirmContent = ({ title, message }: Props) => (
  <div className="flex items-start gap-4 pr-8">
    <IconBadge icon="lucide:trash-2" variant="danger" />
    <div>
      <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
      <p className="mt-1 text-neutral-500">{message}</p>
    </div>
  </div>
);
