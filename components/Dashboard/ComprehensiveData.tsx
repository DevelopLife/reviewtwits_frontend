import type { FC, SVGProps } from 'react';

import ReactIcon from 'public/icons/react.svg';

import Shadow from './common/Shadow';
import * as S from './ComprehensiveData.styles';

type ProjectCountingInformations = {
  monthViews: number;
  dailyReviews: number;
  pendingReviews: number;
  registeredProducts: number;
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
  monthViews: { Icon: ReactIcon, title: '월간 조회수' },
  dailyReviews: { Icon: ReactIcon, title: '일별 리뷰수' },
  pendingReviews: { Icon: ReactIcon, title: '대기중인 리뷰' },
  registeredProducts: { Icon: ReactIcon, title: '등록된 상품수' },
};

interface ComprehensiveDataProps {
  projectId: string;
}

const ComprehensiveData = ({ projectId }: ComprehensiveDataProps) => {
  // TODO: useHooks
  // const { data } = useGetCountingInformations(projectId)
  // const { monthViews, dailyReviews, pendingReviews, registeredProducts } = data;

  const mockData: ProjectCountingInformations = {
    monthViews: 0,
    dailyReviews: 0,
    pendingReviews: 0,
    registeredProducts: 0,
  };
  const countingInformations = Object.entries(
    COUNTING_INFORMATIONS
  ) as Array<CountingInformationsTuple>;

  return (
    <S.Container>
      {mockData && countingInformations.length
        ? countingInformations.map(([key, { Icon, title }]) => (
            <Shadow boxSize="SMALL" key={title}>
              <S.Card>
                <Icon />
                <div>
                  <S.CardTitle>{title}</S.CardTitle>
                  <S.CardDesc>{mockData[key]}</S.CardDesc>
                </div>
              </S.Card>
            </Shadow>
          ))
        : null}
    </S.Container>
  );
};

export default ComprehensiveData;
