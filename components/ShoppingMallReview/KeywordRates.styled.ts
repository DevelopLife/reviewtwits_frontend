import styled from '@emotion/styled';

const Container = styled.div`
  width: 691px;
  height: 123px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const KeywordBox = styled.div`
  width: 321px;
  height: 123px;

  strong {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
  }
`;

const Line = styled.div`
  width: 320px;
  height: 2px;

  background: #d9d9d9;
`;

const Rates = styled.div`
  width: 314px;
  height: 75px;
  margin-top: 19px;
`;

const Rate = styled.div`
  display: flex;
  flex-direction: row;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;

const Keyword = styled.p`
  width: 33%;
  margin-right: 26px;
`;

const PrograssWidth = styled.div`
  width: 150px;
  height: 10px;

  background: #eeeeee;
  border-radius: 15px;

  margin-right: 12px;
`;
const PrograssBar = styled.div<{ prograssRange: string }>`
  width: ${(props) => (parseInt(props.prograssRange) * 150) / 100}px;
  height: 10px;

  background: #6abb6f;
  border-radius: 15px;
`;

const RateNumber = styled.p`
  width: 29px;
  height: 17px;
`;

export {
  Container,
  KeywordBox,
  Line,
  Keyword,
  Rates,
  Rate,
  PrograssWidth,
  PrograssBar,
  RateNumber,
};
