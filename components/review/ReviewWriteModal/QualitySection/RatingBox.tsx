import Image from 'next/image';

import * as S from './RatingBox.styles';
import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';

const RatingBox = () => {
  return (
    <S.Box>
      <Image
        width={150}
        height={150}
        src=""
        alt=""
        style={{ background: 'gray' }}
      />
      <div>
        <S.ProductName>오뚜기 콤비네이션 피자 415g 오뚜기, 2개</S.ProductName>
        <S.StarRating>
          {[1, 2, 3].map((_, i) => (
            <S.Star key={i}>
              <Image width={30} height={30} src={FullStarImg} alt="" />
            </S.Star>
          ))}
          {[1, 2].map((_, i) => (
            <S.Star key={i}>
              <Image width={30} height={30} src={EmptyStarImg} alt="" />
            </S.Star>
          ))}
        </S.StarRating>
      </div>
    </S.Box>
  );
};

export default RatingBox;
