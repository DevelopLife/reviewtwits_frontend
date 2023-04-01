import styled from '@emotion/styled';

import Card from '../Card';
import Product from './Product';

const TrendyProductsContent = () => {
  return (
    <Card color="black">
      <S.Content>
        <S.ContentTitle>오늘의 트렌드 상품</S.ContentTitle>
        <S.MainContent>
          {Array.from({ length: 3 }).map((_, i) => (
            <Product key={i} />
          ))}
        </S.MainContent>
      </S.Content>
    </Card>
  );
};

export default TrendyProductsContent;

const S = {
  Content: styled.div`
    width: 400px;
    padding: 40px;
  `,

  ContentTitle: styled.h2`
    font-size: 16px;
    font-weight: 700;
    color: white;

    margin-bottom: 18px;
  `,

  MainContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};
