import Image from 'next/image';

import * as S from './UserProfileForm.styles';
import DefaultUserProfileImg from 'public/images/default_user_profile_img.png';

const UserProfileForm = () => {
  return <UserProfileFormView />;
};

const UserProfileFormView = () => {
  return (
    <S.Card>
      <S.Form
        title="Profile"
        onValid={() => {
          return;
        }}
        handleSubmit={(e) => {
          return;
        }}
      >
        <S.FormContent>
          <S.UserImageBox>
            <Image
              src={DefaultUserProfileImg}
              width={174}
              height={174}
              alt="userProfileImg"
            />
            <S.ImageUploadButton>Upload Image</S.ImageUploadButton>
            <S.ImageUploadInput type="file" accept="image/*" />
          </S.UserImageBox>
          <S.FormItem>
            <S.IntroductionInput
              type="text"
              placeholder="한 줄로 소개해 볼까요?"
            />
          </S.FormItem>
          <S.FormItem>
            <S.InputLabel>닉네임</S.InputLabel>
            <S.Input
              type="text"
              name="nickname"
              placeholder="나를 표현할 수 있는 이름이 있을까요?"
              handleChange={(e) => {
                return;
              }}
            />
          </S.FormItem>
          <S.ButtonBox>
            <S.Button large color="primary">
              설정 완료
            </S.Button>
            <S.Button large color="black">
              나중에 하기
            </S.Button>
          </S.ButtonBox>
        </S.FormContent>
      </S.Form>
    </S.Card>
  );
};

export default UserProfileForm;
