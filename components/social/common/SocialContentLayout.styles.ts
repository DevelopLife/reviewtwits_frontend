import styled from '@emotion/styled';

const SocialContentLayout = styled.section`
  display: flex;
  justify-content: center;

  height: 100vh;

  padding: 60px 20px;
  margin-left: ${({ theme }) => theme.width.socialSidebar.desktop};

  overflow-y: scroll;
`;

export { SocialContentLayout };
