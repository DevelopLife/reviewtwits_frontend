import { WrapProps } from 'typings/wrapperProps';
import Shadow from './common/Shadow';
import * as S from './ViewsStatistics.styles';
// import SimpleBarChart from 'components/common/Charts/BarChart';

const ViewsStatistics = ({ children }: WrapProps) => {
  return (
    <Shadow boxWidth={1440} boxHeight={710}>
      <S.Container>
        <S.StatisticsTitle>일간 조회수</S.StatisticsTitle>
        <S.StatisticsHeader>
          <S.StatisticsSubTitle>2023.02.15 수</S.StatisticsSubTitle>
          <div>
            <button>일간</button>
            <button>주간</button>
            <button>월간</button>
          </div>
        </S.StatisticsHeader>
        <S.GraphBox>{children}</S.GraphBox>
      </S.Container>
    </Shadow>
  );
};

export default ViewsStatistics;
