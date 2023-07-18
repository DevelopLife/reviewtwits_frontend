import styled from '@emotion/styled';
import type { ButtonHTMLAttributes } from 'react';
import type { Colors } from 'styles/theme';

interface Button2Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  accent?: 'primary' | 'secondary' | 'common';
  shape?: 'circle' | 'rectangle';
  isFull?: boolean;
  fill?: boolean;
  paddingSize?: 'small' | 'medium';
  backgroundColor?: Colors;
  color?: Colors;
  layout?: boolean;
  fontSize?: number;
}

const Button2 = ({
  children,
  paddingSize,
  isFull = false,
  fill = true,
  layout = false,
  shape = 'circle',
  accent = 'primary',
  color,
  backgroundColor,
  fontSize,
  style,
  type = 'button',
  ...rest
}: Button2Props) => {
  return (
    <S.Button
      type={type}
      isFull={isFull}
      paddingSize={paddingSize}
      style={style}
      fill={fill}
      shape={shape}
      color={color}
      accent={accent}
      layout={layout}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </S.Button>
  );
};

export default Button2;

const S = {
  Button: styled.button<Button2Props>`
    font-size: 16px;

    width: ${({ isFull }) => isFull && '100%'};
    height: ${({ layout }) => layout && '100%'};
    padding: ${({ paddingSize }) => paddingSize && padding[paddingSize]};

    background-color: ${({ theme, accent, fill, backgroundColor }) =>
      backgroundColor
        ? theme.colors[backgroundColor]
        : accent && fill && theme.colors[accent]};

    color: ${({ theme, color, accent, fill }) =>
      color
        ? theme.colors[color]
        : fill
        ? theme.colors.white
        : accent && theme.colors[accent]};

    border: ${({ theme, accent, fill }) =>
      !fill && accent && `1px solid ${theme.colors[accent]}`};
    border-radius: ${({ shape }) => shape && shapes[shape]};

    font-size: ${({ fontSize }) => fontSize && `${fontSize}px`};
  `,
};

const shapes = {
  circle: '30px',
  rectangle: '15px',
};

const padding = {
  small: '4px 10px',
  medium: '17px',
};
