import Image from 'next/image';

import styled from '@emotion/styled';

const Reactions = () => {
  return (
    <S.Container>
      <S.Stickers></S.Stickers>

      <S.ReactionBox>
        <S.ReactionButton>
          <S.ReactionCnt>2</S.ReactionCnt>
          <Image width={20} height={20} src="/icons/leading.png" alt="" />
        </S.ReactionButton>
        <S.ReactionButton>
          <S.ReactionCnt>9</S.ReactionCnt>
          <Image width={20} height={20} src="/icons/sunglasses.png" alt="" />
        </S.ReactionButton>
        <S.ReactionButton>
          <S.ReactionCnt>8</S.ReactionCnt>
          <Image width={20} height={20} src="/icons/angry.png" alt="" />
        </S.ReactionButton>
        <S.ReactionButton>
          <S.ReactionCnt>13</S.ReactionCnt>
          <Image width={20} height={20} src="/icons/kissing.png" alt="" />
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
