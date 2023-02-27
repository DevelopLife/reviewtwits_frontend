import styled from '@emotion/styled';

const Box = styled.div``;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.span`
  color: #6d6d6d;
  background: #f7f7f7;
  padding: 0 15px;
  z-index: 1;
  margin-top: -10px;
`;

const DividingLine = styled.div`
  background: #cacaca;
  width: 100%;
  height: 2px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  > * {
    cursor: pointer;
  }
`;

export { Box, TitleBox, Title, DividingLine, ButtonBox };
