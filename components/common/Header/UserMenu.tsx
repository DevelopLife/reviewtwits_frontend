import { useRouter } from 'next/router';
import { doSignOut } from 'utils/auth';

import styled from '@emotion/styled';

interface UserMenuProps {
  closeMenu: () => void;
}

const UserMenu = ({ closeMenu }: UserMenuProps) => {
  const router = useRouter();

  const onClickMenu = (url: string) => {
    router.push(url);
    closeMenu();
  };

  return (
    <S.Box>
      <S.Menu onClick={() => onClickMenu('/')}>홈</S.Menu>
      <S.Menu onClick={() => onClickMenu('/setting/profile')}>프로필</S.Menu>
      <S.Menu onClick={() => onClickMenu('/project/management')}>
        프로젝트
      </S.Menu>
      <S.Menu onClick={() => onClickMenu('/dashboard')}>서비스</S.Menu>
      <S.Menu onClick={doSignOut}>로그아웃</S.Menu>
    </S.Box>
  );
};

export default UserMenu;

const S = {
  Box: styled.div`
    position: absolute;
    top: 50px;
    left: -45px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 130px;

    background: #242424;
    border-radius: 30px;
    padding: 20px 0;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.24);

    z-index: 10;
  `,

  Menu: styled.button`
    color: white;
    font-size: 18px;
    padding: 10px 0;
    width: 100%;
  `,
};
