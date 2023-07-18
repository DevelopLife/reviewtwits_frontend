import styled from '@emotion/styled';

import type { SocialProfile } from 'typings/social';
import SocialFollowAndUnfollowButton from 'components/@feature/@social/Profile/SocialFollowAndUnfollowButton';
import EditProfileButton from 'components/@feature/@social/Profile/EditProfileButton';
import SocialProfileImage from 'components/@feature/@social/Profile/SocialProfileImage';
import Button2 from 'components/@ui/Button2';

interface SocialProfileCardViewProps {
  isMyPage: boolean;
  followButtonTextList?: [string, string];
  profile: SocialProfile;
}

// TODO: 공용으로 사용되는 View 라서 현재단계에서 변경 불가

const SocialProfileCardView = ({
  isMyPage,
  followButtonTextList,
  profile,
}: SocialProfileCardViewProps) => {
  const {
    nickname,
    detailIntroduce,
    introduceText,
    profileImageUrl,
    reviewCount,
    followers,
    followings,
  } = profile;

  return (
    <S.ProfileCard>
      <S.ProfileCardContent>
        <S.ProfileDetail>
          <SocialProfileImage profileImageUrl={profileImageUrl} />
          <S.FlexItem>
            <S.SocialNickname>{nickname}</S.SocialNickname>
            <S.Carrer>{detailIntroduce}</S.Carrer>
          </S.FlexItem>
          <S.Description>{introduceText}</S.Description>
        </S.ProfileDetail>
        <S.AccountDetail>
          <S.FollowBox>
            <S.FollowBoxItem>
              <S.FollowBoxName>Review</S.FollowBoxName>
              {reviewCount}
            </S.FollowBoxItem>
            <S.FollowBoxItem>
              <S.FollowBoxName>Followers</S.FollowBoxName>
              {followers}
            </S.FollowBoxItem>
            <S.FollowBoxItem>
              <S.FollowBoxName>Following</S.FollowBoxName>
              {followings}
            </S.FollowBoxItem>
          </S.FollowBox>
          <S.ButtonBox>
            {isMyPage ? (
              <EditProfileButton />
            ) : (
              <>
                {followButtonTextList?.length ? (
                  <SocialFollowAndUnfollowButton
                    nickname={nickname}
                    TextList={followButtonTextList}
                    size="large"
                    accent="secondary"
                    shape="rectangle"
                    fontSize={18}
                    fontWeight={700}
                  />
                ) : null}
                <Button2
                  accent="secondary"
                  paddingSize="large"
                  shape="rectangle"
                  fontSize={18}
                  fontWeight={700}
                >
                  Message
                </Button2>
              </>
            )}
          </S.ButtonBox>
        </S.AccountDetail>
      </S.ProfileCardContent>
    </S.ProfileCard>
  );
};

export default SocialProfileCardView;

const S = {
  ProfileCard: styled.div`
    width: 635px;
    height: 328px;
    border-radius: 20px;
    margin-bottom: 40px;

    overflow: hidden;
    color: white;
    background-color: ${({ theme }) => theme.colors.gray_7};
  `,
  FlexItem: styled.div``,
  ProfileCardContent: styled.div`
    padding: 30px 40px;
    gap: 60px;
  `,
  ProfileDetail: styled.div`
    display: flex;
    gap: 20px;
  `,
  AccountDetail: styled.div`
    width: 296px;
  `,
  SocialNickname: styled.h2`
    font-weight: 700;
    font-size: 24px;
    color: white;
    margin: 10px 0;
  `,
  Carrer: styled.p`
    font-weight: 400;
    font-size: 14px;
  `,
  Description: styled.p`
    // overflow text ellipsis
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
  `,
  ButtonBox: styled.div`
    display: flex;
    gap: 16px;
  `,
  FollowBox: styled.ul`
    display: flex;
    gap: 24px;
    margin: 16px 0px 40px 0px;
  `,
  FollowBoxItem: styled.li`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  `,
  FollowBoxName: styled.div`
    margin-bottom: 9px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  `,
};
