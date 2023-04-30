import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useState } from 'react';
import { formattedImageUrl } from 'utils/format';

import Backward from 'public/icons/backward.svg';
import Forward from 'public/icons/forward.svg';

interface DetailImageProps {
  reviewImageUrlList: string[];
}

const DetailImage = ({ reviewImageUrlList }: DetailImageProps) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number>(0);

  const onImageClick = (idx: number) => {
    setSelectedImageIdx((prev) => idx);
  };

  const onSelectNextImage = () => {
    if (reviewImageUrlList.length <= selectedImageIdx + 1) {
      setSelectedImageIdx((prev) => 0);
      return;
    }
    setSelectedImageIdx((prev) => prev + 1);
  };

  const onSelectBeforeImage = () => {
    if (0 >= selectedImageIdx - 1) {
      setSelectedImageIdx((prev) => reviewImageUrlList.length - 1);
      return;
    }
    setSelectedImageIdx((prev) => prev - 1);
  };
  return (
    <S.Container>
      <S.Backward onClick={onSelectBeforeImage}>
        <Backward />
      </S.Backward>
      <S.ImageContainer>
        <S.SelectedImageBox>
          <Image
            src={formattedImageUrl(reviewImageUrlList[selectedImageIdx])}
            alt=""
            width={568}
            height={603}
          />
        </S.SelectedImageBox>

        <S.ImagePaginators>
          {reviewImageUrlList.map((reviewImageUrl, idx) => (
            <S.ImagePaginator
              key={reviewImageUrl}
              src={formattedImageUrl(reviewImageUrl)}
              alt=""
              width={160}
              height={160}
              onClick={() => onImageClick(idx)}
              isActiveImage={selectedImageIdx === idx}
            />
          ))}
        </S.ImagePaginators>
      </S.ImageContainer>
      <S.Forward onClick={onSelectNextImage}>
        <Forward />
      </S.Forward>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;

    width: 744px;

    padding-top: 48px;
    padding-bottom: 48px;

    background: #181818;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.21);
    border-radius: 20px 0px 0px 20px;
  `,

  ImageContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  Backward: styled.button`
    color: white;
  `,
  Forward: styled.button`
    color: white;
  `,

  SelectedImageBox: styled.div`
    width: 568px;
    height: 603px;
    overflow: hidden;
  `,
  ImagePaginators: styled.ul`
    display: flex;
    flex-direction: row;
    gap: 16px;

    align-items: center;
    justify-content: left;

    width: 512px;
    height: 160px;
    margin-top: 40px;

    /* overflow-x: scroll; */
  `,
  ImagePaginator: styled(Image)<{ isActiveImage: boolean }>`
    width: 160px;
    height: 160px;

    opacity: ${({ isActiveImage }) => (isActiveImage ? '0.9' : '0.5')};

    border-radius: 26px;
  `,
};

export default DetailImage;
