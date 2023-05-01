import ReviewWriteModal from 'components/review/ReviewWriteModal/ReviewWriteModal';
import { useRouter } from 'next/router';

const ReviewWritePage = () => {
  const router = useRouter();
  const { productURL } = router.query as { productURL: string };

  return productURL ? <ReviewWriteModal productURL={productURL} /> : null;
};

export default ReviewWritePage;
