import styled from '@emotion/styled';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 1px solid black;
`;

const Title = styled.h3`
  font-weight: bold;
  font-stretch: 50px;
`;

const HeaderRight = styled.div`
  border: 1px solid black;
  font-stretch: 48px;
  display: flex;
  width: auto;
`;

const Navbar = styled.div`
  display: flex;
  list-style: none;
  width: 50vw;
`;

const NavLink = styled.li`
  border: 1px solid pink;
  padding: 13px;
`;

const Profile = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 50%;
`;

export { Container, Title, HeaderRight, Navbar, NavLink, Profile };
