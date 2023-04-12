import { ChangeEvent } from 'react';

import styled from '@emotion/styled';

export interface ReviewTextAreaProps {
  content: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReviewTextArea = ({ content, handleChange }: ReviewTextAreaProps) => {
  return (
    <S.TextArea
      name="content"
      value={content}
      placeholder={`다른 고객님에게 도움이 될 수 있도록 솔직한 평가를 남겨주세요.\n고객님의 피드백이 더 나은 제품 제공되는데 도움이 됩니다.\n\n\n\n\n\n\n\n\n\n\n\n상품과 관계 없거나 악의적 내용은 비공개 처리될 수 있습니다.`}
      onChange={handleChange}
    />
  );
};

export default ReviewTextArea;

const S = {
  TextArea: styled.textarea`
    width: 790px;
    height: 256px;
    padding: 14px;
    font-size: 14px;

    outline: none;
    resize: none;
    border: ${({ theme }) => `2px solid ${theme.colors.gray_4}`};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray_5};
    }
  `,
};
