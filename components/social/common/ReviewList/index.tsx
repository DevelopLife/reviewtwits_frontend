import styled from '@emotion/styled';

import { ReviewResponseType } from 'typings/reviews';

import Review from '../Review';
import { RefObject } from 'react';

interface ReviewListProps {
  targetRef: RefObject<HTMLDivElement>;
  data?: ReviewResponseType[];
}

const ReviewList = ({ targetRef, data }: ReviewListProps) => {
  return <ReviewListView targetRef={targetRef} reviewData={data} />;
};

interface ReviewListViewProps {
  reviewData?: ReviewResponseType[];
  targetRef: RefObject<HTMLDivElement>;
}

const ReviewListView = ({ targetRef, reviewData }: ReviewListViewProps) => {
  return (
    <S.Section ref={targetRef}>
      {reviewData?.map((data: ReviewResponseType, i) => (
        <Review key={i} data={data} />
      ))}
    </S.Section>
  );
};

export default ReviewList;

const S = {
  Section: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    position: relative;
  `,
};
