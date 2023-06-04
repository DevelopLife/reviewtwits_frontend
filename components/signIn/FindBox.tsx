import Link from 'next/link';
import styled from '@emotion/styled';
import { PAGE_LIST } from 'constants/routers';

const FindBox = () => {
  return (
    <S.FindBox>
      <Link href={PAGE_LIST.FIND_ID}>
        <S.FindId>아이디 찾기</S.FindId>
      </Link>
      <Link href={PAGE_LIST.FIND_PASSWORD}>
        <S.FindPassword>비밀번호 찾기</S.FindPassword>
      </Link>
    </S.FindBox>
  );
};

export default FindBox;

const FindButton = styled.button`
  background: none;
  outline: none;
  border: none;
  color: #6d6d6d;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const S = {
  FindBox: styled.div`
    margin: 24px auto 80px auto;
  `,

  FindId: styled(FindButton)`
    &::after {
      content: '|';
      color: #cacaca;
      margin: 0 10px;
    }
  `,

  FindPassword: styled(FindButton)``,
};
