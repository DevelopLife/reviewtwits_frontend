import React from 'react';
import GraphHeader from './GraphHeader';
import GraphBody from './GraphBody';
import GraphSide from './GraphSide';
import Shadow from './common/Shadow';

import * as S from './Graph.styles';

const Graph = () => {
  return (
    <S.Container>
      <Shadow boxSize="MEDIUM">
        <GraphHeader />
        <GraphBody />
      </Shadow>
      <GraphSide />
    </S.Container>
  );
};

export default Graph;
