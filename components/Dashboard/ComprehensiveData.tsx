import styled from '@emotion/styled';
import Image from 'next/image';

import Shadow from './common/Shadow';

const ComprehensiveData = () => {
  return (
    <S.Container>
      <Shadow boxSize="SMALL">
        <S.Card>
          <Image width={30} height={30} src={''} alt={'mock'} />
          <div>
            <S.CardTitle>일별 조회수</S.CardTitle>
            <S.CardDesc>1,504</S.CardDesc>
          </div>
        </S.Card>
      </Shadow>
      <Shadow boxSize="SMALL">
        <S.Card>
          <Image width={30} height={30} src={''} alt={'mock'} />
          <div>
            <S.CardTitle>대기중인 리뷰</S.CardTitle>
            <S.CardDesc>32</S.CardDesc>
          </div>
        </S.Card>
      </Shadow>
      <Shadow boxSize="SMALL">
        <S.Card>
          <Image width={30} height={30} src={''} alt={'mock'} />
          <S.Orders>
            <S.Order>
              <S.OrderState>배송준비</S.OrderState>
              <S.OrderCount>448건</S.OrderCount>
            </S.Order>
            <S.Order>
              <S.OrderState>배송중</S.OrderState>
              <S.OrderCount>376건</S.OrderCount>
            </S.Order>
            <S.Order>
              <S.OrderState>배송완료</S.OrderState>
              <S.OrderCount>1314건</S.OrderCount>
            </S.Order>
          </S.Orders>
        </S.Card>
      </Shadow>
    </S.Container>
  );
};

export default ComprehensiveData;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 24px;

    width: 1440px;
  `,

  Card: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 200px;
    min-height: 70px;

    img {
      width: 60px;
      height: 60px;
    }
  `,

  CardTitle: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    /* Black */

    color: #181818;
  `,
  CardDesc: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    /* Secondary */

    color: #2d87ff;
  `,

  Orders: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 130px;
  `,

  Order: styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  OrderState: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    /* gray/gray_5 */

    color: #4d5256;
  `,
  OrderCount: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    /* Black */

    color: #181818;
  `,
};
