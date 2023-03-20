import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <StyledLayout>{children}</StyledLayout>
);

const StyledLayout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
`;

export default Layout;
