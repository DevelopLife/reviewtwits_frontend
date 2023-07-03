import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { formattedImageUrl } from 'utils/format';

import Backward from 'public/icons/backward.svg';
import Forward from 'public/icons/forward.svg';

interface DetailImageProps {
  reviewImageUrlList: string[];
}

const DetailImage = ({ reviewImageUrlList }: DetailImageProps) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number>(0);
  const scrollRef = useRef<number>(0);
  const currentRef = useRef<HTMLImageElement>(null);

  const onImageClick = (idx: number) => {
    setSelectedImageIdx((prev) => idx);
  };

  const onSelectNextImage = () => {
    if (reviewImageUrlList.length <= selectedImageIdx + 1) {
      setSelectedImageIdx((prev) => 0);
      return;
    }
    setSelectedImageIdx((prev) => prev + 1);
    currentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onSelectBeforeImage = () => {
    if (0 >= selectedImageIdx - 1) {
      setSelectedImageIdx((prev) => reviewImageUrlList.length - 1);
      return;
    }
    setSelectedImageIdx((prev) => prev - 1);
  };

  const onWheelOnImage = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      scrollRef.current = scrollRef.current + 1;
    } else if (e.deltaY < 0) {
      scrollRef.current = scrollRef.current - 1;
    }
    scrollImage();
  };

  const scrollImage = () => {
    if (scrollRef.current >= 3) {
      scrollRef.current = 0;
      onSelectNextImage();
    } else if (scrollRef.current <= -3) {
      scrollRef.current = 0;
      onSelectBeforeImage();
    }
  };

  const scrollIntoView = () => {
    currentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollIntoView();
  }, [selectedImageIdx]);

  return (
    <S.Container onWheel={(e) => onWheelOnImage(e)}>
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
              ref={selectedImageIdx === idx ? currentRef : null}
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

    overflow-x: scroll;
    overflow-y: hidden;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  ImagePaginator: styled(Image)<{ isActiveImage: boolean }>`
    width: 160px;
    height: 160px;

    opacity: ${({ isActiveImage }) => (isActiveImage ? '0.9' : '0.5')};

    border-radius: 26px;
  `,
};

export default DetailImage;
