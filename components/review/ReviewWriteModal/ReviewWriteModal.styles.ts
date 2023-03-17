import styled from '@emotion/styled';
import theme from 'styles/theme';

const Container = styled.div`
  width: 1000px;
  padding: 60px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  margin: 13px 24px;
`;

const TitleLine = styled.hr`
  height: 2px;
  background: ${theme.colors.gray_7};
  border: none;
  margin: 0;
`;

const ReviewContent = styled.div`
  padding: 0 24px;
`;

export { Container, Title, TitleLine, ReviewContent };
