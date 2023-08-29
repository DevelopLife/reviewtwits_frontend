import styled from '@emotion/styled';

// import VisitGraph from 'components/Dashboard/Graph/VisitGraph';
import VisitCount from 'components/Dashboard/VisitCount';
import Shadow from 'components/Dashboard/Common/Shadow';
import VisitorChart from 'components/Chart/VisitorChart/VisitorChart';

interface VisitSectionProps {
  projectName: string;
}

const DashBoardVisitSection = ({ projectName }: VisitSectionProps) => {
  return (
    <S.Container>
      <VisitCount projectName={projectName} />
      <Shadow>
        <VisitorChart
          projectName={projectName}
          type="line"
          isButton={false}
          timePeriod={'daily'}
        />
      </Shadow>
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
