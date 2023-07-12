import styled from '@emotion/styled';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import Button from 'components/@ui/Button';
import Card from 'components/@ui/Card';
import { PAGE_LIST } from 'constants/routers';
import { foundUserIds } from 'states/atomFindUserInfo';
import { formattedCreateDate } from 'utils/format';

const FindIdResults = () => {
  const foundIds = useRecoilValue(foundUserIds);

  const handleFindpassword = () => {
    console.log('비밀번호 찾기 페이지로 이동');
  };
  return (
    <Card>
      <S.CardHeader>
        <S.CardTitle>총 {foundIds.counts}개의 아이디를 찾았습니다</S.CardTitle>
        <S.CardDesc>입력하신 개인정보로 가입된 내역을 알려드립니다</S.CardDesc>
      </S.CardHeader>

      <S.IdsTable>
        <S.THead>
          <S.Tr>
            <S.Th>아이디</S.Th>
            <S.Th>가입일</S.Th>
          </S.Tr>
        </S.THead>
        <S.TBody>
          {foundIds.userIds.map(({ accountId, createdDate, nickname }) => (
            <S.Tr key={createdDate}>
              <S.Td>{accountId}</S.Td>
              <S.Td>{formattedCreateDate(createdDate)}</S.Td>
            </S.Tr>
          ))}
        </S.TBody>
      </S.IdsTable>

      <S.ButtonsContainer>
        <Link href={PAGE_LIST.FIND_PASSWORD}>
          <Button
            type="submit"
            large
            color="secondary"
            fontColor="white"
            borderType="none"
            onClick={handleFindpassword}
          >
            비밀번호 찾기
          </Button>
        </Link>

        <Link href={PAGE_LIST.SIGN_IN}>
          <Button type="submit" large color="primary">
            로그인 페이지로 이동
          </Button>
        </Link>
      </S.ButtonsContainer>
    </Card>
  );
};

const S = {
  CardHeader: styled.div`
    width: 343px;
    height: 79px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;

    color: #000000;
  `,
  CardTitle: styled.h1`
    font-size: 30px;
    line-height: 36px;
  `,
  CardDesc: styled.p`
    font-size: 20px;
    line-height: 24px;
  `,

  IdsTable: styled.table`
    height: 200px;
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    text-align: left;
  `,

  THead: styled.thead``,
  TBody: styled.tbody``,
  Tr: styled.tr`
    padding-top: 19px;
  `,
  Th: styled.th``,
  Td: styled.td`
    padding-top: 19px;
  `,

  DivideBox: styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;

    > div {
      width: 50%;
    }
  `,

  FormWrap: styled.div`
    margin: 0 200px;
  `,

  FormContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,

  FormItem: styled.div`
    display: flex;
    flex-direction: column;
    color: black;
  `,

  WarnText: styled.small`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.red_0};
    font-weight: 500;
    margin-top: 10px;
  `,

  InputLabel: styled.label`
    font-size: 18px;
    margin-bottom: 12px;
    font-weight: 500;
  `,

  DateInput: styled.input`
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 30px;
    color: white;
    padding: 8px;
    text-align: center;
    font-size: 16px;

    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
  `,

  EmailBox: styled.div`
    position: relative;
  `,

  VerifyButtonWrap: styled.div`
    position: absolute;
    right: -160px;
    top: 10px;
  `,

  Notice: styled.p`
    font-size: 14px;
    font-weight: 500;
    color: black;
    text-align: center;
    margin: 33px 0 15px 0;
  `,

  ButtonBox: styled.div`
    display: flex;
    gap: 10px;

    > button {
      width: 50%;
    }
  `,

  EmailInputBox: styled.div`
    display: flex;
    align-items: center;
    > input,
    select {
      width: 50%;
    }
  `,

  ButtonsContainer: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,
};

export default FindIdResults;
