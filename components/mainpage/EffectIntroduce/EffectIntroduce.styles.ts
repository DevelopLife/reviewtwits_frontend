import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

const Title = styled.h4`
  font-size: 50px;
  margin: 0;
  margin-top: 117px;
  margin-bottom: 50px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.div`
  background-color: lightgray;
  width: 175px;
  height: 153px;
`;

const CardTitle = styled.h5`
  margin: 0%;
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
`;

const CardDesc = styled.p`
  margin: 0;
  font-size: 30px;
  margin: 30px 0;
`;

export {
  Container,
  Title,
  CardContainer,
  Card,
  CardImage,
  CardTitle,
  CardDesc,
};
