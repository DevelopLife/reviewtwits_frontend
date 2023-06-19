import { useRouter } from 'next/router';

/* eslint-disable react-hooks/rules-of-hooks */
import ShoppingMallReview from 'components/ShoppingMallReview/ShoppingMallReview';

const ShoppingMallReviewPage = () => {
  const router = useRouter();
  const {
    projectName = '1',
    productURL = 'http://www.example.com/123',
    title = '12',
    image,
  } = router.query as {
    projectName: string;
    productURL: string;
    title: string;
    image: string;
  };

  return (
    <div>
      <ShoppingMallReview
        projectName={projectName}
        productURL={productURL}
        title={title}
        image={image}
      />
    </div>
  );
};

export default ShoppingMallReviewPage;
