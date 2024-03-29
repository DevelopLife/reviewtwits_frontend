import styled from '@emotion/styled';

import type { Colors } from 'styles/theme';
import type { SocialProfile } from 'typings/social';
import SocialFollowAndUnfollowButton from 'components/Social/Profile/SocialFollowAndUnfollowButton';
import EditProfileButton from 'components/Social/Profile/EditProfileButton';
import SocialProfileImage from 'components/Social/Profile/SocialProfileImage';

interface SocialProfileCardViewProps {
  isMyPage: boolean;
  followButtonTextList?: [string, string];
  profile: SocialProfile;
}

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
                    size={'normal'}
                    TextList={followButtonTextList}
                  />
                ) : null}

                <S.Button color={'secondary'}>Message</S.Button>
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
  Button: styled.button<{ color: Colors }>`
    padding: 17px 37px;
    border-radius: 15px;

    font-weight: 700;
    font-size: 18px;
    color: white;
    background-color: ${({ theme, color }) => theme.colors[color]};
  `,
};
