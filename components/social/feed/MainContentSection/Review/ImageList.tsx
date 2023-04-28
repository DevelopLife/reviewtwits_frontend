import Image from 'next/image';
import styled from '@emotion/styled';

import { formattedImageUrl } from 'utils/format';

interface ImageListProps {
  imageUrlList?: string[];
  handleOpenModal: () => void;
}

const ImageList = ({ imageUrlList, handleOpenModal }: ImageListProps) => {
  const props = {
    imageUrlList,
    handleOpenModal,
  };

  return <ImageListView {...props} />;
};

interface ImageListViewProps {
  imageUrlList?: string[];
  handleOpenModal: () => void;
}

const ImageListView = ({
  imageUrlList,
  handleOpenModal,
}: ImageListViewProps) => {
  const openModal = () => {
    handleOpenModal();
  };
  return (
    <S.ImageList>
      {imageUrlList?.map((url, i) => (
        <Image
          onClick={openModal}
          key={i}
          width={84}
          height={84}
          src={formattedImageUrl(url)}
          unoptimized={true}
          alt="reviewImage"
        />
      ))}
    </S.ImageList>
  );
};

export default ImageList;

const S = {
  ImageList: styled.div`
    display: flex;
    gap: 4px;

    border-radius: 15px;
    overflow: hidden;
  `,
};
