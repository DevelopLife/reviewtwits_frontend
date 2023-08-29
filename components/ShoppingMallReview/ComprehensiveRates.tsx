import Image from 'next/image';
import React, { useEffect } from 'react';

import risingArray from 'public/images/rising_array.png';
import grayStar from 'public/images/empty_star_img.png';
import * as S from './ComprehensiveRates.styles';
import StarBox from 'components/Social/Common/Review/StarBox';
import { useGetShoppingMallReviewInfo } from 'hooks/queries/reviews';
import { useRegisterShoppingMallProduct } from 'hooks/queries/shopping';
import { useRouter } from 'next/router';
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
