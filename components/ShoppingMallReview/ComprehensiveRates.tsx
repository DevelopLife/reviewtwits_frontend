import Image from 'next/image';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import risingArray from 'public/images/rising_array.png';
import grayStar from 'public/images/empty_star_img.png';

import StarBox from 'components/social/common/Review/StarBox';
import { useGetShoppingMallReviewInfo } from 'hooks/queries/reviews';
import { useRegisterShoppingMallProduct } from 'hooks/queries/shopping';
import { RegisterProjectParams } from 'typings/register';
import { replaceUrlProtocool } from 'constants/regExp';

interface ComprehensiveRatesProps {
  projectName: string;
  productURL: string;
  title: string;
  image: string;
}

const ComprehensiveRates = ({
  projectName,
  productURL,
  title,
  image,
}: ComprehensiveRatesProps) => {
  const { data: shoppingmallReviewInfoData } =
    useGetShoppingMallReviewInfo(productURL);

  const { mutateAsync } = useRegisterShoppingMallProduct();

  const router = useRouter();

  useEffect(() => {
    if (
      shoppingmallReviewInfoData?.status === 202 &&
      router.query.projectName &&
      router.query.productURL &&
      router.query.title &&
      router.query.image
    ) {
      const params: RegisterProjectParams = {
        projectName: projectName,
        body: {
          productUrl: productURL,
          productName: title,
          imageUrl: replaceUrlProtocool(image),
        },
      };

      mutateAsync(params);
    }
  }, [
    shoppingmallReviewInfoData?.status,
    router.query,
    mutateAsync,
    projectName,
    productURL,
    title,
    image,
  ]);

  if (shoppingmallReviewInfoData) {
    return (
      <S.Container>
        <S.OverallReviewNumber>
          <S.Strong>전체 리뷰수 </S.Strong>
          <S.NumberInfos>
            <S.H4>
              {shoppingmallReviewInfoData.data.totalReviewCount >= 1000
                ? Math.floor(
                    shoppingmallReviewInfoData.data.totalReviewCount / 1000
                  ) + 'k'
                : shoppingmallReviewInfoData.data.totalReviewCount}
            </S.H4>
            <div>
              <div>
                {shoppingmallReviewInfoData.data.recentReviewCount}
                <Image
                  src={risingArray}
                  alt="arrow image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </S.NumberInfos>
          <S.Desc>이번달에 작성된 리뷰 수</S.Desc>
        </S.OverallReviewNumber>

        <S.OverallRating>
          <S.Strong>평점</S.Strong>
          <S.StarInfos>
            <S.H4>{shoppingmallReviewInfoData.data.averageStarScore}</S.H4>

            <S.Stars>
              <StarBox
                score={shoppingmallReviewInfoData.data.averageStarScore}
                starSize={30}
              />
            </S.Stars>
          </S.StarInfos>
          <S.Desc>이번달 평균 평가</S.Desc>
        </S.OverallRating>

        <S.OverallRatingDetail>
          <li>
            <Image src={grayStar} alt="" width={15} height={15} />5{' '}
            <S.PrograssBar
              prograssRange={
                shoppingmallReviewInfoData.data.starScoreArray?.[0] || 0
              }
            />
          </li>
          <li>
            <Image src={grayStar} alt="" width={15} height={15} />4
            <S.PrograssBar
              prograssRange={
                shoppingmallReviewInfoData.data.starScoreArray?.[1] || 0
              }
            />
          </li>
          <li>
            <Image src={grayStar} alt="" width={15} height={15} />3
            <S.PrograssBar
              prograssRange={
                shoppingmallReviewInfoData.data.starScoreArray?.[2] || 0
              }
            />
          </li>
          <li>
            <Image src={grayStar} alt="" width={15} height={15} />2
            <S.PrograssBar
              prograssRange={
                shoppingmallReviewInfoData.data.starScoreArray?.[3] || 0
              }
            />
          </li>
          <li>
            <Image src={grayStar} alt="" width={15} height={15} />1
            <S.PrograssBar
              prograssRange={
                shoppingmallReviewInfoData.data.starScoreArray?.[4] || 0
              }
            />
          </li>
        </S.OverallRatingDetail>
      </S.Container>
    );
  }
  return null;
};

export default ComprehensiveRates;

const S = {
  Strong: styled.strong`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  `,

  H4: styled.h4`
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;

    color: #000000;
  `,

  Desc: styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #828282;
  `,

  Container: styled.div`
    width: 945px;
    height: 150px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 69px;
  `,

  OverallReviewNumber: styled.div`
    width: 235px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  NumberInfos: styled.div`
    height: 43px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
      width: 120px;
      height: 40px;
      background: #e1f9e6;
      border-radius: 30px;

      display: flex;
      flex-direction: row;
      align-items: center;

      div {
        width: 78px;
        margin: auto;

        display: flex;
        flex-direction: row;
        gap: 8px;
      }
    }
  `,

  OverallRating: styled.div`
    width: 238px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  StarInfos: styled.div`
    height: 43px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  Stars: styled.ul`
    width: 175px;
    height: 30px;
    line-height: 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  Star: styled.li`
    fill: #f8bb2b;

    svg {
      fill: #f8bb2b;
      width: 30px;
      height: 30px;

      path {
        fill: #f8bb2b;
        stroke: #f8bb2b;
        background-color: #f8bb2b;
      }
    }
  `,

  OverallRatingDetail: styled.ul`
    width: 192px;
    height: 129px;

    display: flex;
    flex-direction: column;
    gap: 11px;

    li {
      height: 17px;
      display: flex;
      img {
        margin-right: 3px;
      }
    }
  `,

  PrograssBar: styled.div<{ prograssRange: number }>`
    height: 10px;
    width: ${(props) => 192 * props.prograssRange}px;

    margin-left: 15px;

    background: #d9d9d9;
    border-radius: 90px;
  `,
};
