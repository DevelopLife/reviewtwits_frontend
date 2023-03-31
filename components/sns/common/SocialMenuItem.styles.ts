import styled from '@emotion/styled';

const SocialMenuItem = styled.li<{ isCurrent: boolean }>`
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

export { SocialMenuItem };
