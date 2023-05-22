import styled from '@emotion/styled';

const Container = styled.div`
  width: ${({ theme }) => theme.devices.desktop}px;

  position: absolute;
  z-index: 1;

  background-color: #ffffff;
`;

const Header = styled.header`
  width: 1692px;
  height: 69px;

  display: flex;
  margin: auto;

  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;

  color: #000000;
`;

const Navbar = styled.div`
  display: flex;
  list-style: none;
  width: 307px;
  justify-content: space-between;
`;

const NavLink = styled.li`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`;

const RightBox = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;

  img {
    border-radius: 50%;
  }

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const AuthButtons = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Login = styled.button`
  width: 99px;
  height: 38px;
  border: 1px solid #000000;
  border-radius: 60px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #181818;
`;

const Signup = styled.button`
  width: 99px;
  height: 38px;
  border-radius: 60px;

  background: #181818;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
`;

const SNSButton = styled.button`
  width: 120px;
  height: 46px;

  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-size: 18px;
  border-radius: 12px;
`;

export {
  Container,
  Header,
  Title,
  Navbar,
  NavLink,
  RightBox,
  Profile,
  AuthButtons,
  Login,
  Signup,
  SNSButton,
};
