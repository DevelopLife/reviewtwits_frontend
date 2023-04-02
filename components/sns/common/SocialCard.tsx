import Image from 'next/image';
import * as S from './SocialCard.styles';
const SocialCard = () => {
  return (
    <S.Container>
      <S.userBox>
        <S.ImageBox>
          <Image src="" alt="" />
        </S.ImageBox>
        <S.UserInfos>
          <S.UserName>name</S.UserName>
          <S.UserRole>모델</S.UserRole>
        </S.UserInfos>
      </S.userBox>

      <S.SocialButton>팔로우</S.SocialButton>
    </S.Container>
  );
};

export default SocialCard;
