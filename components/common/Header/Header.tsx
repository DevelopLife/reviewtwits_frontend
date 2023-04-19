import { APP_NAME } from 'constants/index';
import Image from 'next/image';
import { useState } from 'react';
import * as S from './Header.styles';

const Header = () => {
  const [userLoggedIn] = useState<boolean>(false);
  return (
    <S.Container>
      <S.Header>
        <S.Title>{APP_NAME}</S.Title>
        <S.Navbar>
          <S.NavLink>서비스 소개</S.NavLink>
          <S.NavLink>메뉴얼</S.NavLink>
          <S.NavLink>가격</S.NavLink>
          <S.NavLink>Docs</S.NavLink>
        </S.Navbar>
        {userLoggedIn ? (
          <S.Profile>
            <Image
              src="https://s3-alpha-sig.figma.com/img/bb12/da5f/d8677bd88607c96432496808e0e191d2?Expires=1678060800&amp;Signature=Rkde6MRIbKJc3j5My4a6xUvnZPe9GhqxjXjMJOk9iV4-CHGuFnPI-hXnSig4WyhZGHbSELzra2MT6u0rMyiXM48MggRqcCq35zyFWkl3P8rMnN~95c7mIEXXZNacE7QYXT3OWgY~nhLTW4MbpivikVUMhhS-Un4Ut2kiAPDQbG-wFIuClZs3b-v1oRdMzFvGPU9J2~8PiSbFWBDf0svozdV6oE16npwK617OjPwQDxscqVQLeDI2FT-uYm5EV7i6MSR59pQgrFYRsAUNJm5DRYu8CIzUB0U-~yz9TQjxb-rKYEQLCkqWIaQEQLhsdrXXQMjKy6QKIv9oqUryjnwVtA__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width={40}
              height={40}
              alt={''}
            />
          </S.Profile>
        ) : (
          <S.AuthButtons>
            <S.Login>로그인</S.Login>
            <S.Signup>회원가입</S.Signup>
          </S.AuthButtons>
        )}
      </S.Header>
    </S.Container>
  );
};

export default Header;
