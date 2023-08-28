import { SVGAttributes } from 'react';

import theme from 'styles/theme';

declare type RectangleShapeProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  value: any;
  payload: any;
  background: any;
  tooltipPayload: object[];
  tooltipPosition: { x: number; y: number };
} & SVGAttributes<SVGRectElement>;

export type CustomBarProps = RectangleShapeProps & {
  payload: { timeStamp: string };
  index: number;
  focusedBarIndex: number;
  onClick: (index: number) => void;
};
const CustomBar = (props: CustomBarProps) => {
  const {
    x,
    y,
    width,
    height,
    onClick,
    fill,
    focusedBarIndex,
    // payload,
    index,
  } = props;

  const handleBarClick = () => {
    onClick(index);
  };

  const isFocused = index === focusedBarIndex;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        onClick={handleBarClick}
        opacity={isFocused ? 1 : 0.5}
        fill={isFocused ? theme.colors.red_dark : fill}
      />
    </g>
  );
};

export default CustomBar;
