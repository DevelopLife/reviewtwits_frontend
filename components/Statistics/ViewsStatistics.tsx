import { useState, MouseEvent } from 'react';
import { useRecoilValue } from 'recoil';

import Shadow from './common/Shadow';
import * as S from './ViewsStatistics.styles';
import VisitorChart from 'components/chart/VisitorChart/VisitorChart';
import type { TimePeriod } from 'typings/chart';
import { isFocusedTimeStampAtom } from 'states/isFocusedTimeStamp';

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
  // TODO: 하루 간격 한달 범위
  const isFocusedTimeStamp = useRecoilValue(isFocusedTimeStampAtom);
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
          <S.StatisticsSubTitle>{isFocusedTimeStamp}</S.StatisticsSubTitle>
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
