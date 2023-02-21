import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border: 1px solid black;
`;

const Title = styled.h4`
  font-size: 50px;
  margin: 0;
  margin-top: 117px;
  margin-bottom: 50px;
`;

const Desc = styled.p`
  font-size: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  margin: 50px;
  height: 45%;
  justify-content: space-between;
  width: 90%;
`;

const Card = styled.div`
  border: 1px solid black;
  width: 20%;
`;

const CardImg = styled.div`
  background-color: lightgray;
  height: 47%;
`;

const CardTitle = styled.h5`
  margin: 0;
  font-size: 20px;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const CardDesc = styled.p`
  font-size: 15px;
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
