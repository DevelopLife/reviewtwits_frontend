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

export { ImageUploadBox, ImageUploadButton, ImageList };
