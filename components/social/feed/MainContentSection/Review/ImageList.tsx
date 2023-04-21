import Image from 'next/image';
import styled from '@emotion/styled';

import { formattedImageUrl } from 'utils/format';

interface ImageListProps {
  imageNameList?: string[];
  handleOpenModal: () => void;
}

const ImageList = ({ imageNameList, handleOpenModal }: ImageListProps) => {
  const props = {
    imageNameList,
    handleOpenModal,
  };

  return <ImageListView {...props} />;
};

interface ImageListViewProps {
  imageNameList?: string[];
  handleOpenModal: () => void;
}

const ImageListView = ({
  imageNameList,
  handleOpenModal,
}: ImageListViewProps) => {
  const openModal = () => {
    handleOpenModal();
  };
  return (
    <S.ImageList>
      {imageNameList?.map((url, i) => (
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
