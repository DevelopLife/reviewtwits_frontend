import styled from '@emotion/styled';

const Container = styled.div`
  width: 424px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const WriterInfo = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

const WriterImage = styled.div`
  width: 50px;
  height: 50px;

  background: #d9d9d9;
  border-radius: 90px;
`;

const WriterDesc = styled.div`
  display: flex;
  flex-direction: column;

  color: #000000;
  font-style: normal;
  font-weight: 500;
`;

const WriterName = styled.p`
  font-family: 'Inter';
  font-size: 18px;
  line-height: 22px;
`;

const SellerName = styled.p`
  font-family: 'Pretendard';
  font-size: 12px;
  line-height: 14px;
`;

const StarRateWithDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  margin-bottom: 4px;
`;

const WriteDate = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;

  color: #828282;
`;

const Stars = styled.ul`
  display: flex;
  flex-direction: row;

  margin-right: 8px;

  li {
    img {
      width: 18px;
      height: 18px;
    }
  }
`;

const ProductImageBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  p {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #828282;
  }
`;

const ProductImages = styled.div`
  width: 424px;
  height: 80px;

  margin-top: 8px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: row;
  gap: 8px;

  /* Image {
    width: 100px;
    height: 80px;

    background: #d9d9d9;
  } */
`;

const ProductDesc = styled.div`
  width: 413px;
  max-height: 126px;

  font-family: 'Pretendard';
  font-style: normal;
  font-size: 12px;
  line-height: 120%;

  margin-bottom: 15px;

  color: #333333;
  strong {
    font-weight: 700;
  }
`;

const Keywords = styled.div`
  width: 133px;
  height: 31px;

  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const KeywordDetail = styled.div`
  height: 12px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-family: 'Pretendard';
  font-style: normal;
  font-size: 10px;
  line-height: 12px;

  color: #181818;

  strong {
    font-weight: 700;
  }
  p {
    font-weight: 400;
  }
`;

const HelpfulRates = styled.div`
  width: 128px;

  margin-top: 21px;
  margin-bottom: 28px;

  display: flex;
  flex-direction: row;

  p {
    width: 100px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #333333;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

export {
  Container,
  WriterInfo,
  WriterImage,
  WriterDesc,
  WriterName,
  SellerName,
  StarRateWithDate,
  Stars,
  WriteDate,
  ProductImageBox,
  ProductImages,
  ProductDesc,
  Keywords,
  KeywordDetail,
  HelpfulRates,
};
