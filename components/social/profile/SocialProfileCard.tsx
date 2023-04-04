import styled from '@emotion/styled';

import type { WrapProps } from 'typings/wrapperProps';

export const SocialProfileCard = ({ children }: WrapProps) => {
  return <S.ProfileCard>{children}</S.ProfileCard>;
};

const S = {
  ProfileCard: styled.div`
    width: 650px;
    height: 328px;
    border-radius: 20px;
    margin-bottom: 40px;
    padding: 20px;

    overflow: hidden;
    color: white;

    background-color: ${({ theme }) => theme.colors.gray_7};
  `,
};
