import styled from '@emotion/styled';

const Box = styled.div`
  display: flex;
  gap: 20px;

  padding: 12px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 12px;

    padding: 14px 0;
  }
`;

const ProductName = styled.span`
  font-size: 16px;
  color: black;
`;

const StarRating = styled.div`
  display: flex;
  gap: 5px;
`;

const Star = styled.button`
  outline: none;
  background: none;
  border: none;
  padding: 0;

  cursor: pointer;
`;

export { Box, ProductName, StarRating, Star };
