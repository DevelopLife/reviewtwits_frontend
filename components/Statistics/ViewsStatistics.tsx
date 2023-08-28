import { useState, MouseEvent } from 'react';
import { useRecoilValue } from 'recoil';

import Shadow from './Common/Shadow';
import * as S from './ViewsStatistics.styles';
import type { TimePeriod } from 'typings/chart';
import VisitorChart from 'components/Chart/VisitorChart/VisitorChart';
import chartState from 'states/atomCharts';

const TIME_PEROID_BUTTONS = [
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

interface ViewsStatisticsProps {
  projectName: string;
}

const ViewsStatistics = ({ projectName }: ViewsStatisticsProps) => {
  const isFocusedTimeStamp = useRecoilValue(chartState);
  const [timePeroid, setTimePeroid] = useState<TimePeriod>('daily');

  const onClickTriggerButton = (e: MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name as TimePeriod;
    setTimePeroid(name || 'daily');
  };

  const timePeroidButtonDatas = TIME_PEROID_BUTTONS.map(({ name, text }) => ({
    name,
    text,
    isFocus: timePeroid === name,
  }));

  return (
    <Shadow boxWidth={1440} boxHeight={710}>
      <S.Container>
        <S.StatisticsTitle>일간 조회수</S.StatisticsTitle>
        <S.StatisticsHeader>
          <S.StatisticsSubTitle>
            {isFocusedTimeStamp.visitorChart.focusedTimeStamp}
          </S.StatisticsSubTitle>
          <S.IntervalButtonWrap>
            {timePeroidButtonDatas.map(({ name, text, isFocus }) => (
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
          <VisitorChart
            projectName={projectName}
            timePeriod={timePeroid}
            type="bar"
            isButton
          />
        </S.GraphBox>
      </S.Container>
    </Shadow>
  );
};

export default ViewsStatistics;
