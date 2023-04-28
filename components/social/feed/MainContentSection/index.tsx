import styled from '@emotion/styled';

import { ReviewResponseType } from 'typings/reviews';

import Review from './Review';
import { useGetInfiniteFeed } from 'hooks/queries/sns';
import { RefObject } from 'react';

const MainContentSection = () => {
  const { targetRef, data } = useGetInfiniteFeed();

  return <MainContentSectionView targetRef={targetRef} reviewData={data} />;
};

interface MainContentSectionViewProps {
  reviewData?: ReviewResponseType[];
  targetRef: RefObject<HTMLDivElement>;
}

const MainContentSectionView = ({
  targetRef,
  reviewData,
}: MainContentSectionViewProps) => {
  return (
    <S.Section ref={targetRef}>
      {reviewData?.map((data: ReviewResponseType, i) => (
        <Review key={i} data={data} />
      ))}
    </S.Section>
  );
};

export default MainContentSection;

const S = {
  Section: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    position: relative;
  `,
};
