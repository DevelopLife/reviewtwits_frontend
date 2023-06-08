import type { BarProps } from 'recharts';

export interface CustomBarProps extends BarProps {
  payload: { timeStamp: string };
  focusedDate: Date;
  onClick: (date: Date) => void;
}

const CustomBar = (props: CustomBarProps) => {
  const { x, y, width, height, onClick, fill, focusedDate, payload } = props;
  const { timeStamp } = payload;

  const handleBarClick = () => {
    onClick(new Date(timeStamp));
  };

  const isFocused =
    focusedDate.getTime() === new Date(timeStamp).getTime() ? true : false;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        onClick={handleBarClick}
        opacity={isFocused ? 1 : 0.5}
        fill={isFocused ? 'red' : fill}
      />
    </g>
  );
};

export default CustomBar;
