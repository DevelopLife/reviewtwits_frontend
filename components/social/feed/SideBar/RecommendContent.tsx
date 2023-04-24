import Image from 'next/image';
import styled from '@emotion/styled';

import useUserProfile from 'hooks/useUserProfile';
import { formattedImageUrl } from 'utils/format';

import SocialUserNicknameLink from 'components/social/common/SocialUserNicknameLink';
import Card from '../Card';

const RecommendContent = () => {
  const { nickname, profileImageUrl } = useUserProfile();

  return (
    <Card color="text_black_100">
      <S.Content>
        <S.UserProfileBox>
          <S.UserImage
            width={68}
            height={68}
            src={
              profileImageUrl
                ? formattedImageUrl(profileImageUrl)
                : '/images/default_user_profile_img.png'
            }
            alt="userImg"
          />
          <S.UserInfoBox>
            <S.UserNickname>{nickname}</S.UserNickname>
            <SocialUserNicknameLink nickname={nickname}>
              <S.EditButton>수정하기</S.EditButton>
            </SocialUserNicknameLink>
          </S.UserInfoBox>
        </S.UserProfileBox>
        <S.MainContent>
          <S.RecommendContentBox>
            <S.ContentTitle>내가 좋아할만한 컨텐츠</S.ContentTitle>
            <S.ShowAllButton>전체보기</S.ShowAllButton>
          </S.RecommendContentBox>
          <S.RecommendUserContainer>
            {Array.from({ length: 5 }).map((_, i) => (
              <S.RecommendUser key={i}>
                <S.RecommendUserBox>
                  <S.RecommendUserImage src="" alt="" />
                  <S.RecommendUserInfoBox>
                    <S.RecommendUserNickname>nickname2</S.RecommendUserNickname>
                    <S.FollowedByText>followed by nickname</S.FollowedByText>
                  </S.RecommendUserInfoBox>
                </S.RecommendUserBox>
                <S.FollowButton>팔로우</S.FollowButton>
              </S.RecommendUser>
            ))}
          </S.RecommendUserContainer>
        </S.MainContent>
      </S.Content>
    </Card>
  );
};

export default RecommendContent;

const Button = styled.button`
  color: white;
  font-size: 14px;
  padding: 4px 10px;

  border-radius: 37px;
`;

const S = {
  Content: styled.div`
    width: 400px;
    padding: 40px;
  `,

  UserProfileBox: styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

    margin-bottom: 32px;
  `,

  UserImage: styled(Image)`
    border-radius: 50%;
  `,

  UserInfoBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  UserNickname: styled.span`
    font-size: 16px;
  `,

  EditButton: styled(Button)`
    background: ${({ theme }) => theme.colors.primary};
  `,

  MainContent: styled.div``,

  RecommendUserBox: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  `,

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

  RecommendUserContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  RecommendUser: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  RecommendUserImage: styled(Image)`
    width: 40px;
    height: 40px;

    border-radius: 50%;
    background: gray;
  `,

  RecommendUserInfoBox: styled.div`
    display: flex;
    flex-direction: column;

    gap: 3px;
  `,

  RecommendUserNickname: styled.span`
    font-size: 14px;
    font-weight: 700;
  `,

  FollowedByText: styled.span`
    font-size: 10px;
    font-weight: 300;
  `,

  FollowButton: styled(Button)`
    background: ${({ theme }) => theme.colors.secondary};
    color: white;
    float: left;
  `,
};
