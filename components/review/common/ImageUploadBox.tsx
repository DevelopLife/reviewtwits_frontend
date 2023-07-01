import { useState, useRef, ChangeEvent, MouseEvent, useEffect } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import { Colors } from 'styles/theme';
import { formattedImageUrl } from 'utils/format';
import CameraIcon from 'public/icons/camera.svg';
import CloseIcon from 'public/icons/close.svg';
import useHorizontalScroll from 'hooks/useHorizontalScroll';
import { CommonS as ReviewWriteModalCommonStyles } from 'components/Review/ReviewWriteModal/ReviewWriteModal';

export interface ImageUploadBoxProps {
  buttonColor: Colors;
  imageNameList?: string[];
  setValue: (name: string, value: File[] | string[]) => void;
}

const ImageUploadBox = ({
  buttonColor,
  imageNameList,
  setValue,
}: ImageUploadBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useHorizontalScroll();
  const existImageCnt = useRef<number>(imageNameList?.length || 0);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [deleteFileNameList, setDeleteFileNameList] = useState<string[]>([]);
  const [previews, setPreviews] = useState<string[]>(imageNameList || []);

  const validateExistImage = (url: string) => !url.includes('data:image');

  const handleClickImageUpload = () =>
    inputRef.current && inputRef.current.click();

  const loadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileArr = e.target.files;
    const listLength = fileArr?.length || 0;

    if (fileArr) {
      for (let i = 0; i < listLength; i++) {
        const file = fileArr[i];
        const reader = new FileReader();

        reader.onload = () =>
          setPreviews((prev) => [...prev, reader.result as string]);
        reader.readAsDataURL(file);

        setNewFiles((prev) => prev && [...prev, file]);
      }
    }

    e.currentTarget.value = '';
  };

  const removeImagePreview = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedImageId = Number(e.currentTarget.id);
    const imageElement = e.currentTarget.parentElement
      ?.childNodes[1] as HTMLImageElement;
    const imageUrl = decodeURIComponent(imageElement.src);
    const isExistImage = validateExistImage(imageUrl);

    if (isExistImage) {
      const fileName = imageUrl.split('request-images/')[1].split('&')[0];
      const newDeleteFileNameList = [...deleteFileNameList, fileName];

      setDeleteFileNameList(newDeleteFileNameList);
      setValue('deleteImageList', newDeleteFileNameList);
      existImageCnt.current--;
    } else {
      const files = [...newFiles];

      files.splice(selectedImageId - existImageCnt.current, 1);
      setNewFiles(files);
    }

    const newPreviews = [...previews];

    newPreviews.splice(selectedImageId, 1);
    setPreviews(newPreviews);
  };

  useEffect(() => {
    if (newFiles.length) setValue('newImageFiles', newFiles);
  }, [newFiles, setValue]);

  return (
    <S.ImageUploadBox>
      <S.ImageList ref={scrollRef}>
        {previews.map((url, i) => (
          <S.ImageBox key={i}>
            <S.CloseButton
              id={i.toString()}
              type="button"
              onClick={removeImagePreview}
            >
              <CloseIcon />
            </S.CloseButton>
            <Image
              width={120}
              height={80}
              src={validateExistImage(url) ? formattedImageUrl(url) : url}
              alt="reviewImg"
              style={{ objectFit: 'cover' }}
            />
          </S.ImageBox>
        ))}
      </S.ImageList>
      <S.ImageUploadButton
        type="button"
        color={buttonColor}
        onClick={handleClickImageUpload}
      >
        <CameraIcon />
        사진 올리기
      </S.ImageUploadButton>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={loadFile}
      />
    </S.ImageUploadBox>
  );
};

export default ImageUploadBox;

const S = {
  ImageUploadBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    & > input {
      display: none;
    }
  `,

  ImageUploadButton: styled(ReviewWriteModalCommonStyles.Button)<{
    color: Colors;
  }>`
    display: flex;
    align-items: center;
    gap: 10px;

    width: fit-content;
    font-size: 16px;
    padding: 7px 15px;

    background: ${({ theme, color }) => theme.colors[color]};
  `,

  ImageList: styled.div`
    display: flex;
    gap: 10px;
    overflow-x: scroll;
    width: 790px;
    height: 85px;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  ImageBox: styled.div`
    position: relative;
    > img {
      box-shadow: 0 0 5px 1px #d9d6d6;
    }
  `,

  CloseButton: styled.button`
    position: absolute;
    top: 2px;
    right: -4px;

    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  `,
};
