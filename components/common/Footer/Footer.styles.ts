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
  width: 800px;
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
  width: 200px;
  justify-content: space-between;
`;

const RightLists = styled.ul`
  display: flex;
  padding: 0;
  width: 200px;
  justify-content: space-between;
`;

const List = styled.li`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 1;

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
  font-size: 26px;
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
  width: 401px;
  justify-content: space-between;

  margin-top: 35px;
  margin-bottom: 34px;
`;

const RightInfo = styled.p`
  width: 629px;
  height: 36px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 36px;
  text-align: center;

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
  RightInfo,
  Line,
};
