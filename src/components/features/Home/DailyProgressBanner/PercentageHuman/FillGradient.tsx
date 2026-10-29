type Props = {
  id: string;
  percent: number;
  fillColor: string;
  emptyColor: string;
};

export const FillGradient = ({ id, percent, fillColor, emptyColor }: Props) => (
  <defs>
    <linearGradient id={id} x1="0" y1="1" x2="0" y2="0">
      <stop offset={`${percent}%`} stopColor={fillColor} />
      <stop offset={`${percent}%`} stopColor={emptyColor} />
    </linearGradient>
  </defs>
);
