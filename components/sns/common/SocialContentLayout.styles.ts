import styled from '@emotion/styled';

const SocialContentLayout = styled.section`
  display: flex;
  justify-content: center;

  padding: 60px 20px;
  margin-left: ${({ theme }) => theme.width.socialSidebar.desktop};

  overflow-y: scroll;
`;

export { SocialContentLayout };
