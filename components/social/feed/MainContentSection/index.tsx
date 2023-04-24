import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

import { snsAPI } from 'api/sns';
import { ReviewResponseType } from 'typings/reviews';

import Review from './Review';

const MainContentSection = () => {
  const { data: reviewData } = useQuery<ReviewResponseType[]>(['feed'], () =>
    snsAPI.getFeed()
  );

  const props = {
    reviewData,
  };

  return <MainContentSectionView {...props} />;
};

interface MainContentSectionViewProps {
  reviewData?: ReviewResponseType[];
}

const MainContentSectionView = ({
  reviewData,
}: MainContentSectionViewProps) => {
  return (
    <S.Section>
      {reviewData?.map((data: ReviewResponseType, i) => (
        <Review
          key={i}
          // data={data} FIXME: build error를 위해 임시 주석처리
        />
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
