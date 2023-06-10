import type { FC, SVGProps } from 'react';
import { useQuery } from '@tanstack/react-query';

import OnePeopleIcon from 'public/icons/one-people.svg';
import MultiPeopleIcon from 'public/icons/multi-people.svg';
import { statisticsAPI } from 'api/statistics';
import Shadow from './common/Shadow';
import * as S from './ComprehensiveData.styles';

type ProjectCountingInformations = {
  monthlyVisitCount: number;
  dailyReviewCount: number;
  pendingReviewCount: number;
  registeredProductCount: number;
};

type CountingInformationKey = keyof ProjectCountingInformations;

type CountingInformationValue = {
  Icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
};

type CountingInformationsTuple = [
  CountingInformationKey,
  CountingInformationValue
];

const COUNTING_INFORMATIONS = {
  monthlyVisitCount: { Icon: MultiPeopleIcon, title: '월간 조회수' },
  dailyReviewCount: { Icon: OnePeopleIcon, title: '일별 리뷰수' },
  pendingReviewCount: { Icon: OnePeopleIcon, title: '대기중인 리뷰' },
  registeredProductCount: { Icon: OnePeopleIcon, title: '등록된 상품수' },
};

interface ComprehensiveDataProps {
  projectId: string;
}

const ComprehensiveData = ({ projectId }: ComprehensiveDataProps) => {
  // TODO: useHooks

  const { data } = useQuery(
    ['simpleProjectInfo', projectId],
    () => statisticsAPI.simpleProjectInfo(projectId),
    { enabled: !!projectId }
  );
  const { data: data1 } = useQuery(
    ['productStatistics', projectId],
    () => statisticsAPI.productStatistics(projectId),
    { enabled: !!projectId }
  );
  const { data: data2 } = useQuery(
    ['requestInflowInfos', projectId],
    () => statisticsAPI.requestInflowInfos(projectId),
    { enabled: !!projectId }
  );

  const countingInformations = Object.entries(
    COUNTING_INFORMATIONS
  ) as Array<CountingInformationsTuple>;

  return (
    <S.Container>
      {data && countingInformations.length
        ? countingInformations.map(([key, { Icon, title }]) => (
            <Shadow boxSize="SMALL" key={title}>
              <S.Card>
                <Icon />
                <div>
                  <S.CardTitle>{title}</S.CardTitle>
                  <S.CardDesc>{data[key] || 0}</S.CardDesc>
                </div>
              </S.Card>
            </Shadow>
          ))
        : null}
    </S.Container>
  );
};

export default ComprehensiveData;
