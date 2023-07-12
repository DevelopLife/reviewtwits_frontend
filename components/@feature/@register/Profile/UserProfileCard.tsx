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
import styled from '@emotion/styled';

import Button from 'components/@ui/Button';
import Card from 'components/@ui/Card';
import Form from 'components/@ui/Form';
import Input from 'components/@ui/Input';
import { SUCCESS_MESSAGE } from 'constants/account';
import { PAGE_LIST } from 'constants/routers';
import { useUserProfile, useSetUserProfile } from 'hooks/queries/users';
import useForm from 'hooks/useForm';
import { UserProfileFormType } from 'typings/account';
import { formattedImageUrl } from 'utils/format';
import DefaultUserProfileImg from 'public/images/default_user_profile_img.png';

const UserProfileForm = () => {
  const router = useRouter();
  const [pathFrom, setPathFrom] = useState<string | null>('');
  const { nickname, introduceText, profileImageUrl } = useUserProfile();
  const { values, setValue, initializeForm, handleChange, handleSubmit } =
    useForm<UserProfileFormType>({
      nickname: '',
      intro: '',
    });

  const afterSuccess = (newname: string) => {
    window.sessionStorage.clear();
    alert(SUCCESS_MESSAGE.SETTING.PROFILE);
    if (pathFrom === 'sign-up') router.push(PAGE_LIST.HOME);
    router.push(`${PAGE_LIST.SOCIAL_PROFILE}/${newname}`);
  };

  const { mutate } = useSetUserProfile(afterSuccess);

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
    pathFrom === 'sign-up' ? router.push(PAGE_LIST.HOME) : router.back();
  };

  useEffect(() => {
    const pathFrom = window.sessionStorage.getItem('pathFrom');

    setPathFrom(pathFrom);
  }, []);

  useEffect(() => {
    const initialData = {
      nickname: nickname,
      intro: introduceText,
    };

    if (profileImageUrl) {
      const formattedUserImage = formattedImageUrl(profileImageUrl);
      setPreview(formattedUserImage);
    }
    initializeForm(initialData);
  }, [initializeForm, nickname, introduceText, profileImageUrl]);

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
    <Card>
      <Form title="Profile" onValid={onValid} handleSubmit={handleSubmit}>
        <S.FormContent>
          <S.UserImageBox>
            <Image
              src={preview !== '' ? preview : DefaultUserProfileImg}
              width={145}
              height={145}
              unoptimized={true}
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
            <Input
              type="text"
              name="nickname"
              value={values?.nickname}
              placeholder="나를 표현할 수 있는 이름이 있을까요?"
              handleChange={handleChange}
            />
          </S.FormItem>
          <S.ButtonBox>
            <Button large type="submit" color="primary">
              설정 완료
            </Button>
            <Button large color="black" handleClick={setProfileLater}>
              나중에 하기
            </Button>
          </S.ButtonBox>
        </S.FormContent>
      </Form>
    </Card>
  );
};

export default UserProfileForm;

const S = {
  FormContent: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 36px;

    width: 387px;
  `,

  FormItem: styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
  `,

  UserImageBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-bottom: 12px;

    > img {
      border-radius: 50%;
    }
  `,

  ImageUploadButton: styled.button`
    font-weight: 500;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};

    background: none;
    border: none;
  `,

  ImageUploadInput: styled.input`
    display: none;
  `,

  IntroductionInput: styled.input`
    padding: 15px;
    border: 1px solid ${({ theme }) => theme.colors.gray_5};
    outline: none;
    border-radius: 10px;

    font-size: 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_5};
    }
  `,

  InputLabel: styled.label`
    color: black;
    font-weight: 500;
    font-size: 18px;
  `,

  ButtonBox: styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
  `,
};
