import styled from '@emotion/styled';

import GraphHeader from './GraphHeader';
import GraphBody from './GraphBody';
import GraphSide from './GraphSide';
import Shadow from './Common/Shadow';

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

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    gap: 46px;

    width: 1200px;
  `,
};
