import styled from '@emotion/styled';

const Container = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 32px;
  gap: 159px;

  width: 457px;
  height: 136px;

  background: #181818;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.09);
  border-radius: 20px;
`;

const userBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  width: 175px;
  height: 72px;
`;

const ImageBox = styled.div`
  width: 72px;
  height: 72px;

  border-radius: 50%;

  background-color: white;
`;

const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h3`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  /* White */

  color: #ffffff;
`;

const UserRole = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  /* White */

  color: #ffffff;
`;

const SocialButton = styled.button`
  width: 59px;
  height: 28px;

  /* Secondary */

  background: #2d87ff;
  border-radius: 37px;

  align-items: center;
  text-align: center;

  /* White */

  color: #ffffff;
`;

export {
  Container,
  userBox,
  ImageBox,
  UserInfos,
  UserName,
  UserRole,
  SocialButton,
};
