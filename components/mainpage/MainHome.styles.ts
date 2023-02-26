import styled from '@emotion/styled';

const Container = styled.div`
  width: ${({ theme }) => theme.devices.desktop};
  height: ${1011 + 69}px;
  background-color: ${({ theme }) => theme.colors.red_0};
`;

const MainInfoArea = styled.div`
  display: flex;
`;

const LeftArea = styled.div`
  margin-left: 240px;
`;

const AppInfo = styled.h1`
  margin-top: ${69 + 389}px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 66px;
  line-height: 80px;
  color: #ffffff;

  margin-bottom: 47px;
`;
const AppDesc = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;

  color: #ededed;
`;

const RightArea = styled.div`
  padding-left: 96px;
`;

const Image = styled.img`
  width: 741px;
  height: 388px;
  margin-top: ${69 + 166}px;
  background-color: lightgray;
  margin-bottom: 457px;
  margin-right: 240px;
`;

const Button = styled.div`
  width: 211px;
  height: 67px;
  display: flex;
  align-items: center;

  margin-top: 26px;
  margin-bottom: 214px;
  border-radius: 60px;

  background-color: #181818;
  color: #ffffff;

  p {
    margin: auto;
  }
`;

export {
  Container,
  MainInfoArea,
  LeftArea,
  RightArea,
  AppInfo,
  AppDesc,
  Button,
  Image,
};
