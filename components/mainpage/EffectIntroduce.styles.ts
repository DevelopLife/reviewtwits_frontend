import styled from '@emotion/styled';

const Container = styled.div`
  width: ${({ theme }) => theme.devices.desktop}px;
  height: 1266px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 60px;

  margin-top: 273px;
  margin-bottom: 133px;

  color: #000000;
`;

const CardContainer = styled.div`
  width: 1551px;
  height: 345px;
  display: flex;
  justify-content: space-between;

  margin-bottom: 129px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 484px;
`;

const CardImage = styled.div`
  width: 112px;
  height: 112px;
`;

const CardTitle = styled.h5`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;

  margin-top: 55px;
  margin-bottom: 35px;
  color: #000000;
`;

const CardDesc = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;

  color: #000000;
`;

const Button = styled.button`
  width: 239px;
  height: 66px;
  background: #181818;
  border-radius: 60px;
  color: #ffffff;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
`;

export {
  Container,
  Title,
  CardContainer,
  Card,
  CardImage,
  CardTitle,
  CardDesc,
  Button,
};
