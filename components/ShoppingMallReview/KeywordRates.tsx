import React from 'react';
import * as S from './KeywordRates.styles';

const KeywordRates = () => {
  return (
    <S.Container>
      <S.KeywordBox>
        <strong>맛 만족도</strong>
        <S.Line></S.Line>
        <S.Rates>
          <S.Rate>
            <S.Keyword>예상보다 맛있어요</S.Keyword>
            <S.PrograssWidth>
              <S.PrograssBar prograssRange={'66'} />
            </S.PrograssWidth>
            <S.RateNumber>66%</S.RateNumber>
          </S.Rate>
          <S.Rate>
            <S.Keyword>괜찮아요</S.Keyword>
            <S.PrograssWidth>
              <S.PrograssBar prograssRange={'22'} />
            </S.PrograssWidth>
            <S.RateNumber>22%</S.RateNumber>
          </S.Rate>
          <S.Rate>
            <S.Keyword>예상보다 맛 없어요</S.Keyword>
            <S.PrograssWidth>
              <S.PrograssBar prograssRange={'11'} />
            </S.PrograssWidth>
            <S.RateNumber>11%</S.RateNumber>
          </S.Rate>
        </S.Rates>
      </S.KeywordBox>

      <S.KeywordBox>
        <strong>간편함</strong>
        <S.Line></S.Line>
        <S.Rates>
          <S.Rate>
            <S.Keyword>조리가 간편해요</S.Keyword>
            <S.PrograssWidth>
              <S.PrograssBar prograssRange={'44'} />
            </S.PrograssWidth>
            <S.RateNumber>44%</S.RateNumber>
          </S.Rate>
          <S.Rate>
            <S.Keyword>보통이에요</S.Keyword>
            <S.PrograssWidth>
              <S.PrograssBar prograssRange={'33'} />
            </S.PrograssWidth>
            <S.RateNumber>33%</S.RateNumber>
          </S.Rate>
          <S.Rate>
            <S.Keyword>조리하기 불편해요</S.Keyword>
            <S.PrograssWidth>
              <S.PrograssBar prograssRange={'22'} />
            </S.PrograssWidth>
            <S.RateNumber>22%</S.RateNumber>
          </S.Rate>
        </S.Rates>
      </S.KeywordBox>
    </S.Container>
  );
};

export default KeywordRates;
