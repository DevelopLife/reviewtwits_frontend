import styled from '@emotion/styled';

const SocialMenuItem = styled.li<{ isCurrent: boolean }>`
  width: 100%;

  border-radius: 8px;
  background-color: ${({ theme, isCurrent }) =>
    isCurrent && theme.colors.secondary + '3D'};

  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 16px;
    gap: 16px;
    text-decoration: none;
    font-size: 20px;
    font-weight: ${({ isCurrent }) => (isCurrent ? 700 : 400)};
    color: ${({ theme, isCurrent }) =>
      isCurrent ? theme.colors.secondary : theme.colors.gray_4};
  }
`;

export { SocialMenuItem };
