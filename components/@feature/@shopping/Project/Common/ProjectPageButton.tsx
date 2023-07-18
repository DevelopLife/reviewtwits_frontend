import styled from '@emotion/styled';

import Button2 from 'components/@ui/Button2';
import { WrapProps } from 'typings/wrapperProps';

interface ProjectPageButtonProps extends WrapProps {
  onClick: () => void;
}

export const ProjectPageButton = ({
  children,
  ...rest
}: ProjectPageButtonProps) => {
  return (
    <S.ButtonWrap>
      <Button2 {...rest} isFull layout shape="rectangle">
        {children}
      </Button2>
    </S.ButtonWrap>
  );
};

const S = {
  ButtonWrap: styled.div`
    width: 172px;
    height: 56px;
  `,
};
