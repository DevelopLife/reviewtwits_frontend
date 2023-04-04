import styled from '@emotion/styled';
import Image from 'next/image';

const UserFilterBar = () => {
  return (
    <S.Bar>
      {Array.from({ length: 4 }).map((_, i) => (
        <S.UserBox key={i}>
          <S.UserImage src="" alt="" />
          <S.Nickname>nickname</S.Nickname>
        </S.UserBox>
      ))}
    </S.Bar>
  );
};

export default UserFilterBar;

const S = {
  Bar: styled.div`
    display: flex;
    gap: 30px;
  `,

  UserBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    color: black;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  `,

  UserImage: styled(Image)`
    border-radius: 50%;
    background: gray;

    width: 92px;
    height: 92px;
  `,

  Nickname: styled.span`
    font-size: 18px;
  `,
};
