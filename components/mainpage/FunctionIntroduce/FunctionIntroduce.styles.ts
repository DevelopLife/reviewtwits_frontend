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

const Lists = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 90%;
  padding: 0;
`;

const List = styled.li`
  font-size: 30px;
  border: 1px solid black;
  padding: 20px 40px;
`;

const Desc = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const FunctionImage = styled.div`
  width: 80%;
  height: 50%;
  background-color: lightgray;
`;

export { Container, Title, Lists, List, Desc, FunctionImage };
