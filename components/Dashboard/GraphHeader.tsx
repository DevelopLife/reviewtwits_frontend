import Image from 'next/image';
import styled from '@emotion/styled';

import Button from './common/Button';

const PageData = () => {
  return (
    <S.Container>
      <S.Datas>
        <S.Data>
          <S.DataTitle>오늘 방문수</S.DataTitle>
          <S.DataDesc>98</S.DataDesc>
        </S.Data>
        <S.Data>
          <S.DataTitle>어제 방문수</S.DataTitle>
          <S.DataDesc>407</S.DataDesc>
        </S.Data>
        <S.Data>
          <S.DataTitle>누적 방문수</S.DataTitle>
          <S.DataDesc>571,146</S.DataDesc>
        </S.Data>
      </S.Datas>
      <Button>
        방문 통계
        <Image width={30} height={30} src="" alt="mock" />
      </Button>
    </S.Container>
  );
};

export default PageData;

const S = {
  Container: styled.div`
    width: 1200px;
    height: 129px;

    margin: auto;
    padding-left: 35px;
    padding-right: 35px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  Datas: styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;

    width: 350px;
  `,

  Data: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  DataTitle: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height */

    /* Black */

    color: #181818;
  `,

  DataDesc: styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;

    /* Secondary */

    color: #181818;
  `,
};
