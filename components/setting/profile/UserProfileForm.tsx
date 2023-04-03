import {
  useRef,
  useState,
  MouseEvent,
  RefObject,
  ChangeEvent,
  FormEvent,
  useEffect,
} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';

import useForm from 'hooks/useForm';
import useUserProfile from 'hooks/useUserProfile';
import { usersAPI } from 'api/users';
import { UserProfileFormType } from 'typings/account';
import { formattedImageUrl } from 'utils/format';

import * as S from './UserProfileForm.styles';
import DefaultUserProfileImg from 'public/images/default_user_profile_img.png';
import { SUCCESS_MESSAGE } from 'constants/account';

const UserProfileForm = () => {
  const router = useRouter();
  const [pathFrom, setPathFrom] = useState<string | null>('');
  const userData = useUserProfile();
  const { values, setValue, initializeForm, handleChange, handleSubmit } =
    useForm<UserProfileFormType>({
      nickname: '',
      intro: '',
    });
  const { mutate } = useMutation(
    (data: FormData) => usersAPI.setUserProfile(data),
    {
      onSuccess: () => {
        window.sessionStorage.clear();
        alert(SUCCESS_MESSAGE.SETTING.PROFILE);

        if (pathFrom === 'sign-up') router.push('/');
      },
      onError: ({ response }) => {
        alert(response?.data[0]?.message);
      },
    }
  );

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

  const setUserDataIntoFormData = () => {
    const formData = new FormData();
    const { nickname, intro, userImg } = values;

    if (nickname) formData.append('nickname', nickname);
    if (intro) formData?.append('introduceText', intro);
    if (userImg) formData?.append('profileImage', userImg);

    return formData;
  };

  const changeUserProfile = () => {
    const userProfileData = setUserDataIntoFormData();

    mutate(userProfileData);
  };

  const setProfileLater = () => {
    window.sessionStorage.clear();
    pathFrom === 'sign-up' ? router.push('/') : router.back();
  };

  useEffect(() => {
    const pathFrom = window.sessionStorage.getItem('pathFrom');

    setPathFrom(pathFrom);
  }, []);

  useEffect(() => {
    if (!userData) return;

    const initialData = {
      nickname: userData.nickname,
      intro: userData.introduceText,
    };

    if (userData.profileImage) {
      const formattedUserImage = formattedImageUrl(userData.profileImage);
      setPreview(formattedUserImage);
    }
    initializeForm(initialData);
  }, [initializeForm, userData]);

  const props = {
    values,
    preview,
    inputRef,
    loadFile,
    onValid: changeUserProfile,
    handleChange,
    handleSubmit,
    handleUploadImageButtonClick,
    setProfileLater,
  };

  return <UserProfileFormView {...props} />;
};

interface UserProfileFormViewProps {
  values: UserProfileFormType;
  preview: string;
  inputRef: RefObject<HTMLInputElement>;
  loadFile: (e: ChangeEvent<HTMLInputElement>) => void;
  onValid: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, onValid: () => void) => void;
  handleUploadImageButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
  setProfileLater: () => void;
}

const UserProfileFormView = ({
  values,
  preview,
  inputRef,
  loadFile,
  onValid,
  handleChange,
  handleSubmit,
  handleUploadImageButtonClick,
  setProfileLater,
}: UserProfileFormViewProps) => {
  return (
    <S.Card>
      <S.Form title="Profile" onValid={onValid} handleSubmit={handleSubmit}>
        <S.FormContent>
          <S.UserImageBox>
            <Image
              src={preview !== '' ? preview : DefaultUserProfileImg}
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
              value={values?.intro}
              placeholder="한 줄로 소개해 볼까요?"
              onChange={handleChange}
            />
          </S.FormItem>
          <S.FormItem>
            <S.InputLabel>닉네임</S.InputLabel>
            <S.Input
              type="text"
              name="nickname"
              value={values?.nickname}
              placeholder="나를 표현할 수 있는 이름이 있을까요?"
              handleChange={handleChange}
            />
          </S.FormItem>
          <S.ButtonBox>
            <S.Button large type="submit" color="primary">
              설정 완료
            </S.Button>
            <S.Button large color="black" handleClick={setProfileLater}>
              나중에 하기
            </S.Button>
          </S.ButtonBox>
        </S.FormContent>
      </S.Form>
    </S.Card>
  );
};

export default UserProfileForm;
