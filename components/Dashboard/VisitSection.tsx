import styled from '@emotion/styled';

import VisitGraph from 'components/Dashboard/Graph/VisitGraph';
import VisitCount from 'components/Dashboard/VisitCount';

interface VisitSectionProps {
  projectId: string;
}

const VisitSection = ({ projectId }: VisitSectionProps) => {
  return (
    <S.Container>
      <VisitCount projectId={projectId} />
      <VisitGraph projectId={projectId} boxSize="MEDIUM" graphType="line" />
    </S.Container>
  );
};

export default VisitSection;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 46px;

    width: 1200px;
  `,
};
