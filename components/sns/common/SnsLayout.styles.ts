import styled from '@emotion/styled';

const SnsLayout = styled.div``;

const SnsSidebarLayout = styled.aside`
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

const SocialTitleSection = styled.div``;
const SocialContentTitle = styled.h1`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 36px;
`;

const SocialContentLayout = styled.section`
  display: flex;
  justify-content: center;

  padding: 60px 20px;
  margin-left: ${({ theme }) => theme.width.socialSidebar.desktop};

  overflow-y: scroll;
`;

const SnsMenuLayout = styled.nav``;
const SnsMenuList = styled.ul``;
const SnsMenuItem = styled.li<{ isCurrent: boolean }>`
  width: 153px;
  height: 24px;
  margin-bottom: 36px;

  & > a {
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    font-weight: 400;
    font-size: 20px;

    color: ${({ theme, isCurrent }) =>
      isCurrent ? theme.colors.black : theme.colors.gray_4};
  }
`;

const Link = styled.a``;

export {
  SnsLayout,
  SnsSidebarLayout,
  SocialContentLayout,
  SocialTitleSection,
  SocialContentTitle,
  SnsMenuLayout,
  SnsMenuList,
  SnsMenuItem,
  Link,
};
