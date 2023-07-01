import styled from '@emotion/styled';

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

const S = {
  Container: styled.div`
    width: 691px;
    height: 123px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,

  KeywordBox: styled.div`
    width: 321px;
    height: 123px;

    strong {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
  `,

  Line: styled.div`
    width: 320px;
    height: 2px;
    margin-top: 8px;

    background: #d9d9d9;
  `,

  Rates: styled.div`
    width: 314px;
    height: 75px;
    margin-top: 19px;
  `,

  Rate: styled.div`
    display: flex;
    flex-direction: row;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #000000;
  `,

  Keyword: styled.p`
    width: 33%;
    margin-right: 24px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  `,

  PrograssWidth: styled.div`
    width: 150px;
    height: 10px;

    background: #eeeeee;
    border-radius: 15px;

    margin-right: 12px;
  `,
  PrograssBar: styled.div<{ prograssRange: string }>`
    width: ${(props) => (parseInt(props.prograssRange) * 150) / 100}px;
    height: 10px;

    background: #6abb6f;
    border-radius: 15px;
  `,

  RateNumber: styled.p`
    width: 29px;
    height: 17px;
  `,
};
