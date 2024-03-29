import styled from '@emotion/styled';

import { spinner } from 'styles/animation';

const Box = styled.div`
  display: flex;
  gap: 20px;

  padding: 12px 0;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 12px;

    font-weight: 500;
    padding: 5px 0;
  }
`;

const NullImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 150px;
  font-size: 20px;
  background: ${({ theme }) => theme.colors.gray_1};
  color: ${({ theme }) => theme.colors.gray_5};
`;

const LoadingBox = styled(NullImage)``;

const Spinner = styled.div`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: ${({ theme }) => theme.colors.blue_0};
  animation: ${spinner} 1s linear infinite;
`;

const ProductName = styled.span`
  font-size: 16px;
  color: black;
`;

export { Box, ProductName, LoadingBox, Spinner, NullImage };
