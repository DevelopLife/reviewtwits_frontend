import styled from '@emotion/styled';

const Strong = styled.strong`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

const H4 = styled.h4`
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;

  color: #000000;
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #828282;
`;

const Container = styled.div`
  width: 945px;
  height: 150px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 69px;

  margin: auto;
`;

const OverallReviewNumber = styled.div`
  width: 235px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NumberInfos = styled.div`
  height: 43px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    width: 120px;
    height: 40px;
    background: #e1f9e6;
    border-radius: 30px;
  }
`;

const OverallRating = styled.div`
  width: 238px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StarInfos = styled.div`
  height: 43px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    width: 175px;
    height: 30px;
    line-height: 30px;
  }
`;

const OverallRatingDetail = styled.ul`
  width: 192px;
  height: 129px;

  display: flex;
  flex-direction: column;
  gap: 11px;

  li {
    height: 17px;
    display: flex;
  }
`;

const PrograssBar = styled.div<{ prograssRange: string }>`
  height: 10px;
  width: ${(props) => props.prograssRange}px;

  margin-left: 15px;

  background: #d9d9d9;
  border-radius: 90px;
`;
export {
  Strong,
  H4,
  Desc,
  Container,
  OverallReviewNumber,
  NumberInfos,
  OverallRating,
  StarInfos,
  OverallRatingDetail,
  PrograssBar,
};
