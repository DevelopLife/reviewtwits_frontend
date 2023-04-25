import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

import { snsAPI } from 'api/sns';
import { ReviewResponseType } from 'typings/reviews';

import Review from './Review';

// import useIntersectionObserver from 'hooks/useIntersectionObserver';
// import { useRef } from 'react';
// import { linkageInfiniteScrollData } from 'utils/linkageDataToArray';

const MainContentSection = () => {
  const { data: reviewData } = useQuery<ReviewResponseType[]>(['feed'], () =>
    snsAPI.getFeed()
  );

  const props = {
    reviewData,
  };

  // infiniteScroll 설명을 위한 임시 작업

  // return <MainContentSectionView {...props} />;
  return <MainContentSectionView {...props} />;
};

interface MainContentSectionViewProps {
  reviewData?: ReviewResponseType[];
}

const MainContentSectionView = ({
  reviewData,
}: MainContentSectionViewProps) => {
  // infiniteScroll 설명을 위한 임시 작업

  // const infiniteQuery = useGetInfiniteFeed();
  // const observeTarget = useIntersectionObserver(infiniteQuery.fetchNextPage);
  // const reviewData = linkageInfiniteScrollData<ReviewResponseType>(
  // infiniteQuery?.data
  // );

  return (
    <S.Section
    //  ref={observeTarget}
    >
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
