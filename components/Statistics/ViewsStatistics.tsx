import { useState, MouseEvent } from 'react';
import Shadow from './common/Shadow';
import * as S from './ViewsStatistics.styles';

import SimpleBarChart from 'components/common/Charts/SimpleBarChart';
import useVisitorChart from 'hooks/useVisitorChart';
import { transformData } from 'utils/charts';

const INTERVAL_BUTTONS = [
  {
    name: 'daily',
    text: '일간',
  },
  {
    name: 'weekly',
    text: '주간',
  },
  {
    name: 'monthly',
    text: '월간',
  },
];

const ViewsStatistics = () => {
  // TODO: 하루 간격 한달 범위
  const [interval, setInterval] = useState('daily');

  const onClickTriggerButton = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setInterval(name || 'daily');
  };

  const intervalButtonDatas = INTERVAL_BUTTONS.map(({ name, text }) => ({
    name,
    text,
    isFocus: interval === name,
  }));

  // TODO: interval key 값을 가진 value를 api 요청 시 params로 할당
  const {
    referenceDate,
    focusedDate,
    visitInfos,
    onClickPrevButton,
    onClickNextButton,
    onClickBar,
  } = useVisitorChart();

  const transformedData = visitInfos ? transformData(visitInfos) : [];

  return (
    <Shadow boxWidth={1440} boxHeight={710}>
      <S.Container>
        <S.StatisticsTitle>일간 조회수</S.StatisticsTitle>
        <S.StatisticsHeader>
          <S.StatisticsSubTitle>
            {focusedDate.toLocaleDateString()}
          </S.StatisticsSubTitle>
          <S.IntervalButtonWrap>
            {intervalButtonDatas.map(({ name, text, isFocus }) => (
              <S.IntervalButton
                type="button"
                key={name}
                name={name}
                isFocus={isFocus}
                onClick={onClickTriggerButton}
              >
                {text}
              </S.IntervalButton>
            ))}
          </S.IntervalButtonWrap>
        </S.StatisticsHeader>
        <S.GraphBox>
          {transformedData?.length ? (
            <SimpleBarChart
              data={transformedData}
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
