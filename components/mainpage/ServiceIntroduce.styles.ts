import styled from '@emotion/styled';

const Container = styled.div`
  width: ${({ theme }) => theme.devices.desktop};
  height: 1352px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 44px;
  font-weight: bold;
  margin-top: 332px;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-size: 18px;
  margin-bottom: 138px;
  line-height: 28px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1440px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  height: 410px;
  border-radius: 20px;
  box-shadow: 4px 4px 19px 5px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
`;

const CardImg = styled.div`
  width: 112px;
  height: 112px;
  margin-top: 85px;
  margin-bottom: 58px;
  img {
    width: 112px;
    height: 112px;
  }
`;

const CardTitle = styled.h5`
  margin: 0;
  font-size: 30px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  margin-bottom: 30px;
  line-height: 36px;

  color: #181818;
`;

const CardDesc = styled.p`
  width: 240px;
  height: 56px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #292929;
`;

export {
  Container,
  Title,
  Desc,
  CardContainer,
  Card,
  CardImg,
  CardTitle,
  CardDesc,
};
