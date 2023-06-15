import { useState, MouseEvent } from 'react';
import Shadow from './common/Shadow';
import * as S from './ViewsStatistics.styles';

// import SimpleBarChart from 'components/common/Charts/SimpleBarChart';
// import useVisitorChart from 'hooks/useVisitorChart';
// import { StatisticsRange } from 'hooks/queries/statistics';
import VisitorChart from 'components/chart/VisitorChart/VisitorChart';
import type { TimePeriod } from 'typings/chart';
// import { transformData } from 'utils/charts';

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
  projectId: string;
}

const ViewsStatistics = ({ projectId }: ViewsStatisticsProps) => {
  // TODO: 하루 간격 한달 범위
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

  // TODO: interval key 값을 가진 value를 api 요청 시 params로 할당
  // const {
  // referenceDate,
  // focusedDate,
  // visitInfos,
  // onClickPrevButton,
  // onClickNextButton,
  // onClickBar,
  // } = useVisitorChart({ projectId, ...intervals[interval] });
  // const transformedData = visitInfos ? transformData(visitInfos) : [];

  // const focusedDateString = focusedDate.toLocaleDateString();

  return (
    <Shadow boxWidth={1440} boxHeight={710}>
      <S.Container>
        <S.StatisticsTitle>일간 조회수</S.StatisticsTitle>
        <S.StatisticsHeader>
          {/* <S.StatisticsSubTitle>{focusedDateString}</S.StatisticsSubTitle> */}
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
            projectId={projectId}
            type="bar"
            timePeriod={timePeroid}
          />
          {/* <SimpleBarChart
            data={transformedData}
            focusedDate={focusedDate}
            onClickLeftButton={onClickPrevButton}
            onClickRightButton={onClickNextButton}
            onClickBar={onClickBar}
          /> */}
        </S.GraphBox>
      </S.Container>
    </Shadow>
  );
};

export default ViewsStatistics;
