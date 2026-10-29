type Props = {
  title: string;
};

export const ChartCardHeader = ({ title }: Props) => (
  <h2 className="text-lg font-bold">{title}</h2>
);
