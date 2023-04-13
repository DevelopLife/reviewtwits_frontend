import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';
import FullStarImg from 'public/images/full_star_img.png';
import EmptyStarImg from 'public/images/empty_star_img.png';

const Reviewer = () => {
  return (
    <S.ReviewInfoBox>
      <S.UserImage src="" alt="" />
      <S.UserInfo>
        <S.Nickname>nickname</S.Nickname>
        <S.TimeAndStar>
          <S.LastTime>1h</S.LastTime>
          <S.StarBox>
            {Array.from({ length: 4 }).map((_, i) => (
              <Image key={i} width={15} height={15} src={FullStarImg} alt="" />
            ))}
            <Image width={15} height={15} src={EmptyStarImg} alt="" />
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
