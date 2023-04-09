import styled from '@emotion/styled';
import Image from 'next/image';

import { Colors } from 'styles/theme';

export const SocialProfileCard = () => {
  const mockProfileData: SocialProfileCardViewProps = {
    profileImage: '',
    nickName: 'mockNickname',
    carrer: 'IT 엔지니어',
    description: `안녕하세요! 저는 전문 리뷰어입니다.
      영화, 책, 음악, 레스토랑, 여행지 등을 평가하며,
      공정하고 중립적인 리뷰를 작성합니다.
      늘 사용자들이 신뢰할 수 있는 정보를 제공하는 것을 목표로 하고 있습니다.
      영화, 책, 음악, 레스토랑, 여행지 등을 평가하며,
      공정하고 중립적인 리뷰를 작성합니다.
      늘 사용자들이 신뢰할 수 있는 정보를 제공하는 것을 목표로 하고 있습니다.
      영화, 책, 음악, 레스토랑, 여행지 등을 평가하며,
      공정하고 중립적인 리뷰를 작성합니다.
      늘 사용자들이 신뢰할 수 있는 정보를 제공하는 것을 목표로 하고 있습니다.
      영화, 책, 음악, 레스토랑, 여행지 등을 평가하며,
      공정하고 중립적인 리뷰를 작성합니다.
      늘 사용자들이 신뢰할 수 있는 정보를 제공하는 것을 목표로 하고 있습니다.`,
    reviewCount: 1,
    follwerCount: 20,
    follwingCount: 300,
  };
  return <SocialProfileCardView {...mockProfileData} />;
};

interface SocialProfileCardViewProps {
  profileImage: string;
  nickName: string;
  carrer: string;
  description: string;
  reviewCount: number;
  follwerCount: number;
  follwingCount: number;
}

export const SocialProfileCardView = ({
  profileImage,
  nickName,
  carrer,
  description,
  reviewCount,
  follwerCount,
  follwingCount,
}: SocialProfileCardViewProps) => {
  return (
    <S.ProfileCard>
      <S.ProfileCardContent>
        <S.ProfileDetail>
          <div
            style={{
              minWidth: '80px',
              height: '80px',
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundColor: 'white',
            }}
          ></div>
          {/* <Image
            width={80}
            height={80}
            src={profileImage}
            alt={'socialProfileImage'}
          /> */}
          <S.FlexItem>
            <S.SocialNickname>{nickName}</S.SocialNickname>
            <S.Carrer>{carrer}</S.Carrer>
          </S.FlexItem>
          <S.Description>{description}</S.Description>
        </S.ProfileDetail>
        <S.AccountDetail>
          <S.FollowBox>
            <S.FollowBoxItem>
              <S.FollowBoxName>Review</S.FollowBoxName>
              {reviewCount}
            </S.FollowBoxItem>
            <S.FollowBoxItem>
              <S.FollowBoxName>Followers</S.FollowBoxName>
              {follwerCount}
            </S.FollowBoxItem>
            <S.FollowBoxItem>
              <S.FollowBoxName>Following</S.FollowBoxName>
              {follwingCount}
            </S.FollowBoxItem>
          </S.FollowBox>
          <S.ButtonBox>
            <S.Button color={'secondary'}>Follow</S.Button>
            <S.Button color={'secondary'}>Message</S.Button>
          </S.ButtonBox>
        </S.AccountDetail>
      </S.ProfileCardContent>
    </S.ProfileCard>
  );
};

const S = {
  ProfileCard: styled.div`
    width: 880px;
    height: 328px;
    border-radius: 20px;
    margin-bottom: 40px;
    padding: 20px;

    overflow: hidden;
    color: white;
    background-color: ${({ theme }) => theme.colors.gray_7};
  `,
  FlexItem: styled.div``,
  ProfileCardContent: styled.div`
    padding: 40px 53px;
    gap: 60px;
  `,
  ProfileDetail: styled.div`
    display: flex;
    width: 726px;
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
