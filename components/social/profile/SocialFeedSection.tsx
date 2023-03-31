import styled from '@emotion/styled';

import type { WrapProps } from 'typings/wrapperProps';

const SocialFeedSection = ({ children }: WrapProps) => {
  return <S.FeedSection minItemWidth={318}>{children}</S.FeedSection>;
};

export default SocialFeedSection;

const S = {
  FeedSection: styled.section<{ minItemWidth: number }>`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(318px, 318px));
    justify-content: center;
    gap: 16px 24px;
  `,
};
