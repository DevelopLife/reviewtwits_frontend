import styled from '@emotion/styled';

const Container = styled.div`
  width: ${({ theme }) => theme.devices.desktop}px;
  height: 651px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #181818;

  position: relative;
`;

const Navbar = styled.div`
  display: flex;
  width: 1156px;
  justify-content: space-between;

  margin-top: 113px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;

  color: #ffffff;
`;

const LeftLists = styled.ul`
  display: flex;
  padding: 0;
  width: 300px;
  justify-content: space-between;
`;

const RightLists = styled.ul`
  display: flex;
  padding: 0;
  width: 300px;
  justify-content: space-between;
`;

const List = styled.li`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;

  color: #ffffff;
`;

const AppName = styled.h3`
  position: absolute;
  top: 88px;
  left: 50%;
  transform: translateX(-50%);

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 61px;

  color: #ffffff;
`;

const Line = styled.div`
  margin-top: 73px;
  width: 1440px;
  border: 1px solid #ffffff;
`;

const SocialButtonContainer = styled.ul`
  display: flex;
  width: 601px;
  justify-content: space-between;

  margin-top: 35px;
  margin-bottom: 34px;
`;

const Box = styled.li`
  width: 100px;
  height: 100px;
  background-color: lightgray;
`;

const RightInfo = styled.p`
  width: 629px;
  height: 36px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;

  color: #ffffff;
`;

export {
  Container,
  Navbar,
  LeftLists,
  RightLists,
  AppName,
  List,
  SocialButtonContainer,
  Box,
  RightInfo,
  Line,
};
