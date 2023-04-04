import styled from '@emotion/styled';

const SidebarTitle = styled.h1`
  margin-bottom: 24px;

  & > a {
    text-decoration: none;
    font-weight: 700;
    font-size: 22px;
    cursor: pointer;

    color: ${({ theme }) => theme.colors.black};
  }
`;

export { SidebarTitle };
