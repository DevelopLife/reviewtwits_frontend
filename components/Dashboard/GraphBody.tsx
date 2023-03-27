import styled from '@emotion/styled';
import React from 'react';

const GraphBody = () => {
  return (
    <S.Container>
      <h1>그래프 들어갈 자리</h1>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    height: 448px;
    border: 1px solid black;
  `,
};

export default GraphBody;
