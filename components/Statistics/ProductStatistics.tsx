import styled from '@emotion/styled';

import Shadow from './common/Shadow';

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

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 1360px;
    height: auto;

    padding-top: 52px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 31.85px;
  `,

  ProductStatisticsTitle: styled.h3`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;

    /* Black */

    color: #181818;
  `,

  Table: styled.table`
    width: 1304px;
    height: auto;

    text-align: left;
  `,

  TableRow: styled.tr``,

  TableHeads: styled.thead``,

  TableHead: styled.th`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 24px;
    padding-bottom: 24px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    /* gray/gray_6 */

    color: #363a3c;
  `,

  TableBodys: styled.tbody``,

  TableBody: styled.td`
    padding: 16px;

    border-bottom: 1px solid #e9e9e9;
  `,
};
