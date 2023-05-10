import ReviewWriteModal, {
  ReviewWriteModalProps,
} from 'components/review/ReviewWriteModal/ReviewWriteModal';
import { useRouter } from 'next/router';

const ReviewWritePage = () => {
  const router = useRouter();
  const { productURL, title } = router.query as ReviewWriteModalProps;

  return productURL && title ? (
    <ReviewWriteModal productURL={productURL} title={title} />
  ) : null;
};

export default ReviewWritePage;
