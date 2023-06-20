import styled from '@emotion/styled';

// import VisitGraph from 'components/Dashboard/Graph/VisitGraph';
import VisitCount from 'components/Dashboard/VisitCount';
import VisitorChart from 'components/chart/VisitorChart/VisitorChart';

interface VisitSectionProps {
  projectName: string;
}

const DashBoardVisitSection = ({ projectName }: VisitSectionProps) => {
  return (
    <S.Container>
      <VisitCount projectName={projectName} />
      <VisitorChart projectName={projectName} type="bar" timePeriod={'daily'} />
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
    height: 1000px;
  `,
};
