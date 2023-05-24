import styled from '@emotion/styled';
import Link from 'next/link';

const Layout = styled.div`
  width: 1200px;
`;

const ComprehensiveRatesLayout = styled.div`
  margin-top: 40px;
  margin-left: 127px;
`;
const KeywordRatesLayout = styled.div`
  margin-top: 40px;
  margin-left: 127px;
`;

const ReviewHeaderLayout = styled.div`
  margin-top: 67px;
  margin-left: 50px;
`;
const ReviewsLayout = styled.div`
  margin-top: 32px;
  margin-bottom: 69px;

  margin-left: 50px;
`;

const LinkButton = styled(Link)`
  position: sticky;
  width: 137px;
  height: 56px;
  padding: 17px 37px;
  bottom: 48px;
  margin-left: 971px;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`;
export {
  Layout,
  ComprehensiveRatesLayout,
  KeywordRatesLayout,
  ReviewHeaderLayout,
  ReviewsLayout,
  LinkButton,
};
