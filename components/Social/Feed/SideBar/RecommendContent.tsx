import styled from '@emotion/styled';

import Card from '../Card';
import UserProfileBox from './UserProfileBox';
import RecommendUserList from './RecommendUserList';

const RecommendContent = () => {
  return (
    <Card color="text_black_100">
      <S.Content>
        <UserProfileBox />
        <S.MainContent>
          <S.RecommendContentBox>
            <S.ContentTitle>내가 좋아할만한 컨텐츠</S.ContentTitle>
            <S.ShowAllButton>전체보기</S.ShowAllButton>
          </S.RecommendContentBox>
          <RecommendUserList />
        </S.MainContent>
      </S.Content>
    </Card>
  );
};

export default RecommendContent;

const S = {
  Content: styled.div`
    width: 400px;
    padding: 40px;
  `,

  MainContent: styled.div``,

  RecommendContentBox: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 16px;
  `,

  ContentTitle: styled.h2`
    color: white;
    font-size: 16px;
  `,

  ShowAllButton: styled.button`
    color: white;
    font-size: 16px;

    padding: 0;
  `,
};
