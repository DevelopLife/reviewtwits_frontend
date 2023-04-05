import React from 'react';
import Shadow from './common/Shadow';
import * as S from './ProductStatistics.styles';

const ProductStatistics = () => {
  return (
    <Shadow boxWidth={1440} boxHeight={710}>
      <S.Container>
        <S.ProductStatisticsTitle>상품별 통계정보</S.ProductStatisticsTitle>
        <S.Table>
          <S.TableHeads>
            <S.TableRow>
              <S.TableHead>페이지이름</S.TableHead>
              <S.TableHead>조회수</S.TableHead>
              <S.TableHead>구매수</S.TableHead>
              <S.TableHead>리뷰수</S.TableHead>
              <S.TableHead>주연령대</S.TableHead>
              <S.TableHead>주성별</S.TableHead>
              <S.TableHead>평균 평점</S.TableHead>
            </S.TableRow>
          </S.TableHeads>
          <S.TableBodys>
            <S.TableRow>
              <S.TableBody>하와이안 피자 180g, 2판</S.TableBody>
              <S.TableBody>3,233</S.TableBody>
              <S.TableBody>411</S.TableBody>
              <S.TableBody>322</S.TableBody>
              <S.TableBody>20</S.TableBody>
              <S.TableBody>남성</S.TableBody>
              <S.TableBody>4.5</S.TableBody>
            </S.TableRow>
            <S.TableRow>
              <S.TableBody>하와이안 피자 180g, 2판</S.TableBody>
              <S.TableBody>3,233</S.TableBody>
              <S.TableBody>411</S.TableBody>
              <S.TableBody>322</S.TableBody>
              <S.TableBody>20</S.TableBody>
              <S.TableBody>남성</S.TableBody>
              <S.TableBody>4.5</S.TableBody>
            </S.TableRow>
            <S.TableRow>
              <S.TableBody>하와이안 피자 180g, 2판</S.TableBody>
              <S.TableBody>3,233</S.TableBody>
              <S.TableBody>411</S.TableBody>
              <S.TableBody>322</S.TableBody>
              <S.TableBody>20</S.TableBody>
              <S.TableBody>남성</S.TableBody>
              <S.TableBody>4.5</S.TableBody>
            </S.TableRow>
            <S.TableRow>
              <S.TableBody>하와이안 피자 180g, 2판</S.TableBody>
              <S.TableBody>3,233</S.TableBody>
              <S.TableBody>411</S.TableBody>
              <S.TableBody>322</S.TableBody>
              <S.TableBody>20</S.TableBody>
              <S.TableBody>남성</S.TableBody>
              <S.TableBody>4.5</S.TableBody>
            </S.TableRow>
          </S.TableBodys>
        </S.Table>
      </S.Container>
    </Shadow>
  );
};

export default ProductStatistics;
