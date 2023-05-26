import styled from '@emotion/styled';
import Image from 'next/image';
import { formattedLastTime, formattedProfileImageUrl } from 'utils/format';
import StarBox from 'components/social/feed/MainContentSection/Review/StarBox';
import SocialUserNicknameLink from 'components/social/common/SocialUserNicknameLink';
import useModal from 'hooks/useModal';

interface ReviewerProps {
  nickname: string;
  profileImageUrl: string | null;
  lastModifiedDate: number[];
  starScore: number;
}

const Reviewer = ({
  nickname,
  profileImageUrl,
  lastModifiedDate,
  starScore,
}: ReviewerProps) => {
  const modal = useModal();
  return (
    <S.ReviewInfoBox>
      <SocialUserNicknameLink nickname={nickname}>
        <S.UserImage
          src={formattedProfileImageUrl(profileImageUrl)}
          alt=""
          width={60}
          height={60}
          onClick={() => modal.hide()}
        />
      </SocialUserNicknameLink>

      <S.UserInfo>
        <SocialUserNicknameLink nickname={nickname}>
          <S.Nickname onClick={() => modal.hide()}>{nickname}</S.Nickname>
        </SocialUserNicknameLink>
        <S.TimeAndStar>
          <S.LastTime>{formattedLastTime(lastModifiedDate)}</S.LastTime>
          <S.StarBox>
            <StarBox score={starScore} />
          </S.StarBox>
        </S.TimeAndStar>
      </S.UserInfo>
    </S.ReviewInfoBox>
  );
};

const S = {
  ReviewInfoBox: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  `,

  UserInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  UserImage: styled(Image)`
    background: gray;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  `,

  Nickname: styled.span`
    font-size: 16px;
    font-weight: 500;
    color: black;
  `,
  TimeAndStar: styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
  `,

  LastTime: styled.span`
    font-size: 12px;
  `,

  StarBox: styled.div`
    display: flex;
    gap: 3px;
  `,
};

export default Reviewer;
