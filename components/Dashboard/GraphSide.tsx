import React from 'react';
import * as S from './GraphSide.styles';

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
