import { useState } from 'react';
import Shadow from './common/Shadow';
import * as S from './ViewsStatistics.styles';

import SimpleBarChart from 'components/common/Charts/SimpleBarChart';
import useVisitorChart from 'hooks/useVisitorChart';

const ViewsStatistics = () => {
  // TODO: 하루 간격 한달 범위
  const [mo, setMo] = useState({
    range: '1mo',
    interval: '1d',
  });

  const {
    referenceDate,
    focusedDate,
    visitInfos,
    onClickPrevButton,
    onClickNextButton,
    onClickBar,
  } = useVisitorChart();

  return (
    <Shadow boxWidth={1440} boxHeight={710}>
      <S.Container>
        <S.StatisticsTitle>일간 조회수</S.StatisticsTitle>
        <S.StatisticsHeader>
          <S.StatisticsSubTitle>
            {focusedDate.toLocaleDateString()}
          </S.StatisticsSubTitle>
          <div onClick={() => void 0}>
            {
              //TODO: 버튼 클릭 시 간격 state 조정하기
            }
            <button name="day">일간</button>
            <button name="week">주간</button>
            <button name="month">월간</button>
          </div>
        </S.StatisticsHeader>
        <S.GraphBox>
          {visitInfos?.length ? (
            <SimpleBarChart
              data={visitInfos}
              focusedDate={focusedDate}
              onClickLeftButton={onClickPrevButton}
              onClickRightButton={onClickNextButton}
              onClickBar={onClickBar}
            />
          ) : null}
        </S.GraphBox>
      </S.Container>
    </Shadow>
  );
};

export default ViewsStatistics;
