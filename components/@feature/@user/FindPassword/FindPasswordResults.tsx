import styled from '@emotion/styled';
import Button from 'components/@ui/Button';

import { Card } from 'components/@ui/Card';
import { ERROR_MESSAGE } from 'constants/account';
import { PAGE_LIST } from 'constants/routers';
import Link from 'next/link';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { findUserPasswords } from 'states/atomFindUserInfo';
import { FindPasswordType } from 'typings/account';

interface FindPasswordResultsProps {
  handleFindPassword: (params: FindPasswordType) => Promise<number>;
}

const FindPasswordResults = ({
  handleFindPassword,
}: FindPasswordResultsProps) => {
  const findPasswordValues = useRecoilValue(findUserPasswords);

  const requestAgain = async () => {
    const status = await handleFindPassword(findPasswordValues);
    if (status !== 200) {
      alert(ERROR_MESSAGE.FIND_PASSWORD);
      return;
    }
  };

  return (
    <Card>
      <S.CardHeader>
        <S.CardTitle>가입시 입력한 이메일을 확인해주세요</S.CardTitle>
        <S.CardDesc>
          {findPasswordValues.accountId}으로 비밀번호 초기화 이메일이
          전송되었습니다
        </S.CardDesc>
        <S.RequestAgain>
          <S.RequestAgainButton onClick={requestAgain}>
            이메일이 오지 않았나요? 다시 요청 보내기
          </S.RequestAgainButton>
        </S.RequestAgain>
      </S.CardHeader>
      <S.FormMargin space={400} />

      <S.ButtonsContainer>
        <Link href={PAGE_LIST.SIGN_IN}>
          <Button type="submit" large color="primary">
            로그인 페이지로 이동
          </Button>
        </Link>
      </S.ButtonsContainer>
    </Card>
  );
};

export default FindPasswordResults;

const S = {
  CardHeader: styled.div`
    display: flex;
    flex-direction: column;
    gap: 19px;
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
  RequestAgain: styled.div`
    font-size: 16px;
    line-height: 19px;

    display: flex;
    box-sizing: content-box;
    margin-left: 0;
    color: #2f80ed;
  `,

  RequestAgainButton: styled.p`
    z-index: 0;
    cursor: grab;

    &:hover {
      opacity: 0.8;
    }
  `,

  FormContainer: styled.div`
    height: 200px;
    width: 100%;
    margin-bottom: 100px;
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

  FormMargin: styled.div<{ space: number }>`
    height: ${({ space }) => space}px;
  `,
};
