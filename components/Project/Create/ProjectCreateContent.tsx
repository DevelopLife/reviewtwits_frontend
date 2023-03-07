import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface ProjectCreateContentProps {
  children: ReactNode;
}

export const ProjectCreateContent = ({
  children,
}: ProjectCreateContentProps) => {
  return <S.ProejectCreateContent>{children}</S.ProejectCreateContent>;
};

const S = {
  ProejectCreateContent: styled.div`
    width: 1190px;
    height: 696px;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.09);
    border-radius: 0 30px 30px 30px;
  `,
};
