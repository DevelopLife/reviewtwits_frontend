import styled from '@emotion/styled';

import ProductStatisticsTable from 'components/Dashboard/Table/ProductStatisticsTable';
import Shadow from 'components/Dashboard/Common/Shadow';

interface ProductStatisticsSectionProps {
  projectName: string;
}

const ProductStatisticsSection = ({
  projectName,
}: ProductStatisticsSectionProps) => {
  return (
    <Shadow>
      <S.Container>
        <S.OrderHeader>
          <S.Title>상품별 통계정보</S.Title>
        </S.OrderHeader>
        <ProductStatisticsTable projectName={projectName} />
      </S.Container>
    </Shadow>
  );
};

export default ProductStatisticsSection;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    padding-top: 60px;
    padding-left: 45px;
    padding-right: 44px;
  `,

  OrderHeader: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  Title: styled.h1`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;

    color: #000000;
  `,
};
