import styled from '@emotion/styled';

const SidebarLayout = styled.aside`
  padding: 60px 40px;
  width: ${({ theme }) => theme.width.socialSidebar.desktop};
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colors.gray_0};
`;

export { SidebarLayout };
