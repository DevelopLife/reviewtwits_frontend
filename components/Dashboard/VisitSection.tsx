import styled from '@emotion/styled';

// import VisitGraph from 'components/Dashboard/Graph/VisitGraph';
import VisitCount from 'components/Dashboard/VisitCount';
import VisitorChart from 'components/chart/VisitorChart/VisitorChart';

interface VisitSectionProps {
  projectId: string;
}

const DashBoardVisitSection = ({ projectId }: VisitSectionProps) => {
  return (
    <S.Container>
      <VisitCount projectId={projectId} />
      <VisitorChart projectId={projectId} type="bar" />
      {/* <VisitGraph projectId={projectId} boxSize="MEDIUM" graphType="line" /> */}
    </S.Container>
  );
};

export default DashBoardVisitSection;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 46px;

    width: 1200px;
  `,
};
