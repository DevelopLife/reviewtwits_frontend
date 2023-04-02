import styled from '@emotion/styled';

import * as S from '../ReviewWriteModal/ReviewWriteModal.styles';

const ImageUploadBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > input {
    display: none;
  }
`;

const ImageUploadButton = styled(S.Button)`
  display: flex;
  align-items: center;
  gap: 10px;

  width: fit-content;
  font-size: 16px;
  padding: 7px 15px;
`;

const ImageList = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  width: 790px;
  height: 85px;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const ImageBox = styled.div`
  position: relative;
  > img {
    box-shadow: 0 0 5px 1px #d9d6d6;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2px;
  right: -4px;

  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export { ImageUploadBox, ImageUploadButton, ImageList, ImageBox, CloseButton };
