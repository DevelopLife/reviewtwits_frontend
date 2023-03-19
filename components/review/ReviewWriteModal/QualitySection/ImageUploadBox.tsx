import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';

import * as S from './ImageUploadBox.styles';
import CameraIcon from 'public/images/camera_icon.svg';

const ImageUploadBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);

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
      }
    }
  };

  return (
    <S.ImageUploadBox>
      <S.ImageUploadButton onClick={handleClickImageUpload}>
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
      <S.ImageList>
        {previews.map((url, i) => (
          <Image
            key={i}
            width={120}
            height={80}
            src={url}
            alt=""
            style={{ objectFit: 'cover' }}
          />
        ))}
      </S.ImageList>
    </S.ImageUploadBox>
  );
};

export default ImageUploadBox;
