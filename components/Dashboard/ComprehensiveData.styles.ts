import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;

  width: 1440px;
`;

const Card = styled.div`
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
`;

const CardTitle = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* Black */

  color: #181818;
`;
const CardDesc = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  /* Secondary */

  color: #2d87ff;
`;

const Orders = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 130px;
`;

const Order = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OrderState = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  /* gray/gray_5 */

  color: #4d5256;
`;
const OrderCount = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  /* Black */

  color: #181818;
`;

export {
  Container,
  Card,
  CardTitle,
  CardDesc,
  Orders,
  Order,
  OrderState,
  OrderCount,
};
