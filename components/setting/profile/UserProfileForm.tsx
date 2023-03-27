import { useRef, useState, MouseEvent, RefObject, ChangeEvent } from 'react';
import Image from 'next/image';

import useForm from 'hooks/useForm';
import { UserProfileType } from 'typings/account';

import * as S from './UserProfileForm.styles';
import DefaultUserProfileImg from 'public/images/default_user_profile_img.png';

const UserProfileForm = () => {
  const { setValue, handleChange } = useForm<UserProfileType>({
    nickname: '',
    intro: '',
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string>('');

  const handleUploadImageButtonClick = () =>
    inputRef.current && inputRef.current.click();

  const loadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    const reader = new FileReader();

    if (!file) return;

    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
    setValue('userImg', file);

    e.currentTarget.value = '';
  };

  const props = {
    preview,
    inputRef,
    loadFile,
    handleChange,
    handleUploadImageButtonClick,
  };

  return <UserProfileFormView {...props} />;
};

interface UserProfileFormViewProps {
  preview: string;
  inputRef: RefObject<HTMLInputElement>;
  loadFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUploadImageButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const UserProfileFormView = ({
  preview,
  inputRef,
  loadFile,
  handleChange,
  handleUploadImageButtonClick,
}: UserProfileFormViewProps) => {
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
              src={preview || DefaultUserProfileImg}
              width={145}
              height={145}
              alt="userProfileImg"
            />
            <S.ImageUploadButton
              type="button"
              onClick={handleUploadImageButtonClick}
            >
              Upload Image
            </S.ImageUploadButton>
            <S.ImageUploadInput
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={loadFile}
            />
          </S.UserImageBox>
          <S.FormItem>
            <S.IntroductionInput
              type="text"
              name="intro"
              placeholder="한 줄로 소개해 볼까요?"
              onChange={handleChange}
            />
          </S.FormItem>
          <S.FormItem>
            <S.InputLabel>닉네임</S.InputLabel>
            <S.Input
              type="text"
              name="nickname"
              placeholder="나를 표현할 수 있는 이름이 있을까요?"
              handleChange={handleChange}
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
