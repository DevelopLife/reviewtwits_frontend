import styled from '@emotion/styled';

const Container = styled.div`
  border: 1px solid black;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Navbar = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 15vh;
`;

const LeftLists = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const RightLists = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const AppName = styled.h3`
  margin: 0;
  font-size: 50px;
  font-weight: bold;
`;

const List = styled.li`
  list-style: none;
  margin: 30px 60px;
  font-size: 30px;
`;

const BoxContainer = styled.ul`
  display: flex;
  width: 30%;
  margin: 2rem;
  justify-content: space-between;
`;

const Box = styled.li`
  width: 100px;
  height: 100px;
  background-color: lightgray;
`;

const RightInfo = styled.p`
  margin-top: 1rem;
`;

const Line = styled.div`
  width: 80%;
  height: 1px;
  background-color: black;
`;

export {
  Container,
  Navbar,
  LeftLists,
  RightLists,
  AppName,
  List,
  BoxContainer,
  Box,
  RightInfo,
  Line,
};
