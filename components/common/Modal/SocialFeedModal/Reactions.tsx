import styled from '@emotion/styled';
// import PleadingFaceIcon from 'public/icons/pleading_face.svg';
// import SunglassesIcon from 'public/icons/sunglasses.svg';
// import AngryIcon from 'public/icons/angry.svg';
// import KissingHeartIcon from 'public/icons/kissing_heart.svg';

const Reactions = () => {
  return (
    <S.Container>
      <S.Stickers></S.Stickers>

      <S.ReactionBox>
        <S.ReactionButton>
          <S.ReactionCnt>2</S.ReactionCnt>
          {/* <PleadingFaceIcon /> */}
        </S.ReactionButton>
        <S.ReactionButton>
          <S.ReactionCnt>9</S.ReactionCnt>
          {/* <SunglassesIcon /> */}
        </S.ReactionButton>
        <S.ReactionButton>
          <S.ReactionCnt>8</S.ReactionCnt>
          {/* <AngryIcon /> */}
        </S.ReactionButton>
        <S.ReactionButton>
          <S.ReactionCnt>13</S.ReactionCnt>
          {/* <KissingHeartIcon /> */}
        </S.ReactionButton>
      </S.ReactionBox>
    </S.Container>
  );
};
const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    margin-top: 32px;
    margin-bottom: 40px;
  `,
  Stickers: styled.ul`
    width: 112px;
    height: 32px;
    border: 1px solid black;
  `,
  ReactionBox: styled.div`
    display: flex;
    gap: 8px;

    margin-top: 12px;
    margin-bottom: 16px;
  `,

  ReactionButton: styled.button`
    display: flex;
    align-items: center;
    gap: 5px;

    border: 1px solid ${({ theme }) => theme.colors.gray_6};
    border-radius: 15px;
    padding: 4px 10px;
  `,

  ReactionCnt: styled.span``,
};

export default Reactions;
