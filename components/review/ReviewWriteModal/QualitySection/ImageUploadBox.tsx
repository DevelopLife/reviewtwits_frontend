import { useState, useRef, ChangeEvent, MouseEvent, useEffect } from 'react';
import Image from 'next/image';

import { formattedImageUrl } from 'utils/format';
import * as S from './ImageUploadBox.styles';
import CameraIcon from 'public/images/camera_icon.svg';
import CloseIcon from 'public/images/close_icon.svg';
import useHorizontalScroll from 'hooks/useHorizontalScroll';

interface ImageUploadBox {
  imageNameList?: string[];
  setValue: (name: string, value: File[] | string[]) => void;
}

const ImageUploadBox = ({ imageNameList, setValue }: ImageUploadBox) => {
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
    setValue('newImageFiles', newFiles);
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
              <Image width={16} height={16} src={CloseIcon} alt="closeIcon" />
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
      <S.ImageUploadButton type="button" onClick={handleClickImageUpload}>
        <Image width={24} height={24} src={CameraIcon} alt="" />
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
