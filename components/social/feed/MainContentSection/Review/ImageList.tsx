import Image from 'next/image';
import styled from '@emotion/styled';

import { formattedImageUrl } from 'utils/format';

interface ImageListProps {
  imageNameList?: string[];
}

const ImageList = ({ imageNameList }: ImageListProps) => {
  const props = {
    imageNameList,
  };

  return <ImageListView {...props} />;
};

interface ImageListViewProps {
  imageNameList?: string[];
}

const ImageListView = ({ imageNameList }: ImageListViewProps) => {
  return (
    <S.ImageList>
      {imageNameList?.map((url, i) => (
        <Image
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
