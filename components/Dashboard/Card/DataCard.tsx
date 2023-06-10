import styled from '@emotion/styled';
import type { FC, SVGProps } from 'react';

import Shadow from 'components/Dashboard/common/Shadow';

interface DataCardProps {
  Icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  data: string | number;
}

const DataCard = ({ Icon, title, data }: DataCardProps) => {
  return (
    <Shadow>
      <S.Card>
        <S.IconWrap>
          <Icon />
        </S.IconWrap>
        <div>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDesc>{data || 0}</S.CardDesc>
        </div>
      </S.Card>
    </Shadow>
  );
};

export default DataCard;

const S = {
  Card: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    padding: 40px 60px;

    min-width: 200px;
    min-height: 70px;
  `,

  IconWrap: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 60px;
  `,

  CardTitle: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    /* Black */

    color: #181818;
  `,

  CardDesc: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    /* Secondary */

    color: #2d87ff;
  `,
};
