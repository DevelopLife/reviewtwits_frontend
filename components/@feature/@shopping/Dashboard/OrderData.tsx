import styled from '@emotion/styled';

import Button from './Common/Button';
import Shadow from './Common/Shadow';

const OrderData = () => {
  return (
    <Shadow boxSize="LARGE">
      <S.Container>
        <S.OrderHeader>
          <S.Title>Recent Orders</S.Title>
          <Button>배송 통계</Button>
        </S.OrderHeader>
        <S.Margin />
        <S.Table>
          <thead>
            <tr>
              <S.TableHeader>주문목록</S.TableHeader>
              <S.TableHeader>받는사람</S.TableHeader>
              <S.TableHeader>배송현황</S.TableHeader>
              <S.TableHeader>처리일시</S.TableHeader>
              <S.TableHeader>배송사</S.TableHeader>
              <S.TableHeader>송장번호</S.TableHeader>
              <S.TableHeader>리뷰작성</S.TableHeader>
            </tr>
          </thead>
          <tbody>
            <S.TableRow>
              <S.TableData>하와이안 피자 180g, 2판</S.TableData>
              <S.TableData>ghdic</S.TableData>
              <S.TableData>집하</S.TableData>
              <S.TableData>2023.03.10T09:11:22</S.TableData>
              <S.TableData>CJ대한통운</S.TableData>
              <S.TableData>123412341234</S.TableData>
              <S.TableData>대기중</S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>블랙짜파게티 30봉, 1박스</S.TableData>
              <S.TableData>asdf123</S.TableData>
              <S.TableData>출하</S.TableData>
              <S.TableData>2023.03.10T09:11:22</S.TableData>
              <S.TableData>로젠택배</S.TableData>
              <S.TableData>123412341234</S.TableData>
              <S.TableData>승인</S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>맥북 M2 256G 16G</S.TableData>
              <S.TableData>qqersdf</S.TableData>
              <S.TableData>배송중</S.TableData>
              <S.TableData>2023.02.10T23:22:40</S.TableData>
              <S.TableData>CJ대한통운</S.TableData>
              <S.TableData>123412341234</S.TableData>
              <S.TableData>리뷰완료</S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>애자일회고, 1권</S.TableData>
              <S.TableData>ereadfjk111</S.TableData>
              <S.TableData>배송완료</S.TableData>
              <S.TableData>2023.02.01T12:11:22</S.TableData>
              <S.TableData>CJ대한통운</S.TableData>
              <S.TableData>123412341234</S.TableData>
              <S.TableData>리뷰완료</S.TableData>
            </S.TableRow>
          </tbody>
        </S.Table>
      </S.Container>
    </Shadow>
  );
};

export default OrderData;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    padding-top: 60px;
    padding-left: 45px;
    padding-right: 44px;
  `,

  OrderHeader: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  Title: styled.h1`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;

    color: #000000;
  `,

  Table: styled.table`
    width: 1348px;
    height: 283px;

    border: 1px solid black;
  `,

  TableHeader: styled.th``,

  TableRow: styled.tr``,

  TableData: styled.td``,

  Margin: styled.div`
    height: 40px;
  `,
};
