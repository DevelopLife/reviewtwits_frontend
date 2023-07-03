import styled from '@emotion/styled';

import RecommendContent from './RecommendContent';
import TrendyProductsContent from './TrendyProductsContent';

const SideBar = () => {
  return (
    <S.Aside>
      <RecommendContent />
      <TrendyProductsContent />
    </S.Aside>
  );
};

export default SideBar;

const S = {
  Aside: styled.aside`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};
