import React from 'react';

import styled from '@emotion/styled';

const GraphSide = () => {
  return (
    <S.Container>
      <S.SerchedDataBox>
        <S.Title>검색</S.Title>
        <S.Line></S.Line>
        <S.SerchedDatas>
          <S.SerchedData>
            <p>네이버 검색</p>
            <p>6</p>
          </S.SerchedData>
          <S.SerchedData>
            <p>다음 검색</p>
            <p>0</p>
          </S.SerchedData>
          <S.SerchedData>
            <p>구글 검색</p>
            <p>81</p>
          </S.SerchedData>
          <S.SerchedData>
            <p>기타 검색</p>
            <p>5</p>
          </S.SerchedData>
        </S.SerchedDatas>
      </S.SerchedDataBox>
      <S.Layout />
      <S.DeviceDataBox>
        <S.Title>디바이스</S.Title>
        <S.Line></S.Line>
        <S.DeviceDatas>
          <S.DeviceData>
            <p>모바일</p>
            <p>23%</p>
          </S.DeviceData>
          <S.DeviceData>
            <p>PC</p>
            <p>77%</p>
          </S.DeviceData>
        </S.DeviceDatas>
      </S.DeviceDataBox>
    </S.Container>
  );
};

export default GraphSide;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    width: 151px;
  `,

  SerchedDataBox: styled.div`
    display: flex;
    flex-direction: column;

    width: 151px;
    height: 128px;
  `,

  SerchedDatas: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  SerchedData: styled.li`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
  `,

  DeviceDataBox: styled.div`
    display: flex;
    flex-direction: column;

    width: 151px;
    height: 81px;
  `,

  DeviceDatas: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,

  DeviceData: styled.li`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
  `,

  Title: styled.strong`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    /* Black */

    color: #181818;
  `,

  Line: styled.div`
    width: 151px;
    height: 0px;

    margin-top: 8.5px;
    margin-bottom: 10.5px;

    border: 1px solid #e9e9e9;
  `,

  Layout: styled.div`
    height: 40px;
  `,
};
