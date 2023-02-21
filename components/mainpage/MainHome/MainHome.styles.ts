import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  min-height: 100vh;
`;

const MainInfoArea = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 200px;
  justify-content: space-between;
`;

const LeftArea = styled.div``;

const AppInfo = styled.h1`
  font-size: 100px;
  margin: 0;
`;
const AppDesc = styled.p`
  /* position: absolute; */
  font-size: 30px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const RightArea = styled.div`
  width: 807px;
  height: 423px;
  background-color: lightgray;
`;

const ButtonContainer = styled.div`
  margin-left: 100px;
`;

export {
  Container,
  MainInfoArea,
  LeftArea,
  RightArea,
  AppInfo,
  AppDesc,
  ButtonContainer,
};
