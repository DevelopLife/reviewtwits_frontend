import React from 'react';

import * as S from './MainHome.styles';

const MainHome = () => {
  return (
    <S.Container>
      <S.MainInfoArea>
        <S.LeftArea>
          <S.AppInfo>
            어떤 카테고리의
            <br />
            리뷰를
            <br />
            필요로하시나요?
          </S.AppInfo>
          <S.AppDesc>
            reviewtwits는 다양한 형태의 맞춤형 리뷰를 제공합니다
            <br />
            홈페이지에 리뷰를 적용하고 싶으시다면 reviewtwits를 사용해보세요
            <br />
            고객님들의 경험이 더욱 풍부해질 것입니다.
          </S.AppDesc>

          <S.ButtonContainer>
            <button>Learn More</button>
          </S.ButtonContainer>
        </S.LeftArea>
        <S.RightArea>이미지</S.RightArea>
      </S.MainInfoArea>
    </S.Container>
  );
};

export default MainHome;
