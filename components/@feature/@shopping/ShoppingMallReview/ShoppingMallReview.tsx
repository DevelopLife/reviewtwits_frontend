import styled from '@emotion/styled';
import Link from 'next/link';

import {
  ComprehensiveRates,
  KeywordRates,
  ReviewHeader,
  Reviews,
} from './@index';

interface ShoppingMallReviewProps {
  projectName: string;
  productURL: string;
  title: string;
  image: string;
}

const ShoppingMallReview = ({
  projectName,
  productURL,
  title,
  image,
}: ShoppingMallReviewProps) => {
  return (
    <S.Layout>
      <S.ComprehensiveRatesLayout>
        <ComprehensiveRates
          projectName={projectName}
          productURL={productURL}
          title={title}
          image={image}
        />
      </S.ComprehensiveRatesLayout>
      <S.KeywordRatesLayout>
        <KeywordRates />
      </S.KeywordRatesLayout>
      <S.ReviewHeaderLayout>
        <ReviewHeader
        // handleSetSearchOption={handleSetSearchOption}
        />
      </S.ReviewHeaderLayout>
      <S.ReviewsLayout>
        <Reviews
          projectName={projectName}
          productURL={productURL}
          title={title}
          image={image}
        />
      </S.ReviewsLayout>
      <S.LinkButton
        href={{
          pathname: '/review/write',
          query: { productURL, title },
        }}
        as={`/review/write/${title}`}
      >
        리뷰작성
      </S.LinkButton>
    </S.Layout>
  );
};

export default ShoppingMallReview;

const S = {
  Layout: styled.div`
    width: 1200px;
  `,

  ComprehensiveRatesLayout: styled.div`
    margin-top: 40px;
    margin-left: 127px;
  `,
  KeywordRatesLayout: styled.div`
    margin-top: 40px;
    margin-left: 127px;
  `,

  ReviewHeaderLayout: styled.div`
    margin-top: 67px;
    margin-left: 50px;
  `,
  ReviewsLayout: styled.div`
    margin-top: 32px;
    margin-bottom: 69px;

    margin-left: 50px;
  `,

  LinkButton: styled(Link)`
    position: sticky;
    width: 137px;
    height: 56px;
    padding: 17px 37px;
    bottom: 48px;
    margin-left: 971px;
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  `,
};
