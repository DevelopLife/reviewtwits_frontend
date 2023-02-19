import styled from '@emotion/styled';
import Image from 'next/image';
import type { HTMLAttributes, ReactNode } from 'react';
import NextSVG from '@/public/next.svg';

type StyleButtonProps = { color: string };
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
  styleProps: StyleButtonProps;
}

export const Button = ({
  left,
  center,
  right,
  styleProps,
  ...rest
}: ButtonProps) => {
  return (
    <div>
      <Image src={NextSVG} alt={'nextSVG'} width={50} height={50} />
      <S.Button {...styleProps} {...rest}>
        {left}
        {center}
        {right}
      </S.Button>
    </div>
  );
};

const S = {
  Button: styled.button<StyleButtonProps>`
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    align-items: flex-start;

    color: ${({ color }) => color};
  `,
};
