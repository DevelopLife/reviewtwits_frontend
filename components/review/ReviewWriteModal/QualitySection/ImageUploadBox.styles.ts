import styled from '@emotion/styled';

import * as S from '../ReviewWriteModal.styles';

const ImageUploadBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  padding: 12px;

  & > input {
    display: none;
  }
`;

const ImageUploadButton = styled(S.Button)`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  padding: 10px 20px;
`;

const ImageList = styled.div`
  display: flex;
  gap: 14px;
`;

const ImageBox = styled.div`
  position: relative;
  > img {
    box-shadow: 0 0 5px 1px #d9d6d6;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -8px;
  right: -12px;

  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export { ImageUploadBox, ImageUploadButton, ImageList, ImageBox, CloseButton };
