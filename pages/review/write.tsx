import { useRouter } from 'next/router';

import ReviewWriteModal, {
  ReviewWriteModalProps,
} from 'components/@feature/@shopping/Review/ReviewWriteModal/ReviewWriteModal';

const ReviewWritePage = () => {
  const router = useRouter();
  const { productURL, title } = router.query as ReviewWriteModalProps;

  return productURL && title ? (
    <ReviewWriteModal productURL={productURL} title={title} />
  ) : null;
};

export default ReviewWritePage;
