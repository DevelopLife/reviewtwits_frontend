import React from 'react';
import Shadow from './common/Shadow';
import * as S from './ComprehensiveData.styles';

const ComprehensiveData = () => {
  return (
    <S.Container>
      <Shadow boxSize="SMALL">
        <S.Card>
          <img src="" alt="" />
          <div>
            <S.CardTitle>일별 조회수</S.CardTitle>
            <S.CardDesc>1,504</S.CardDesc>
          </div>
        </S.Card>
      </Shadow>
      <Shadow boxSize="SMALL">
        <S.Card>
          <img src="" alt="" />
          <div>
            <S.CardTitle>대기중인 리뷰</S.CardTitle>
            <S.CardDesc>32</S.CardDesc>
          </div>
        </S.Card>
      </Shadow>
      <Shadow boxSize="SMALL">
        <S.Card>
          <img src="" alt="" />
          <S.Orders>
            <S.Order>
              <S.OrderState>배송준비</S.OrderState>
              <S.OrderCount>448건</S.OrderCount>
            </S.Order>
            <S.Order>
              <S.OrderState>배송중</S.OrderState>
              <S.OrderCount>376건</S.OrderCount>
            </S.Order>
            <S.Order>
              <S.OrderState>배송완료</S.OrderState>
              <S.OrderCount>1314건</S.OrderCount>
            </S.Order>
          </S.Orders>
        </S.Card>
      </Shadow>
    </S.Container>
  );
};

export default ComprehensiveData;
