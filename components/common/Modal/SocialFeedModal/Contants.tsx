import styled from '@emotion/styled';
import React from 'react';

const Contants = () => {
  return (
    <S.Container>
      <S.TextBox>
        저번에는 냉동피자 중에 좀 가격대가 있는 우주인피자 주문했었는데요.
        불고기 피자가 먹고 싶다고 해서 찾다가 오뚜기 불고기 피자가 있길래 주문
        했어요. 우주인피자는 한 판에 만 원이 훌쩍 넘는데, 오뚜기 피자는 3개에 만
        사천원대라 엄청 저렴해요. 확실히 가성비는 갓뚜기 오뚜기 냉동피자가 넘사
        입니다.오븐조리, 전자레인지 조리, 프라이팬 조리법이 있는데요. 집에서
        드실 때는 오븐 혹은 에어프라이어 추천드려요. 프라이팬은 조리가 좀 어렵고
        전자레인지에 조리하면 눅눅합니다 ㅠㅠ 저는 캠핑 가서 먹어서 난로 위에
        올려 데워 먹었어요.겨울 캠핑의 묘미 아니 겠습니까.
      </S.TextBox>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    padding-top: 16px;
    padding-bottom: 16px;

    width: 500px;
    height: 111px;
  `,

  TextBox: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;

    height: 81px;
    width: 500px;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `,
};

export default Contants;
