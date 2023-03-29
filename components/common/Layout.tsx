import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface LayoutProps {
  color?: 'gray';
  children: ReactNode;
}

const Layout = ({ children, color }: LayoutProps) => (
  <StyledLayout color={color}>{children}</StyledLayout>
);

const StyledLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ color }) => {
    switch (color) {
      case 'gray':
        return '#f8f8f8';
      default:
        return '#fffff';
    }
  }};
`;

export default Layout;
