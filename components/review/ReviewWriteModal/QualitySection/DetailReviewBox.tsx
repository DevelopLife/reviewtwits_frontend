import { ChangeEvent } from 'react';
import * as S from './DetailReviewBox.styles';

interface DetailReviewBox {
  content: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const DetailReviewBox = ({ content, handleChange }: DetailReviewBox) => {
  return (
    <S.Box>
      <S.ReviewFor>상세리뷰</S.ReviewFor>
      <S.TextArea
        name="content"
        value={content}
        placeholder={`다른 고객님에게 도움이 될 수 있도록 솔직한 평가를 남겨주세요.\n고객님의 피드백이 더 나은 제품 제공되는데 도움이 됩니다.\n\n\n\n\n\n\n\n\n\n\n\n상품과 관계 없거나 악의적 내용은 비공개 처리될 수 있습니다.`}
        onChange={handleChange}
      />
    </S.Box>
  );
};

export default DetailReviewBox;
