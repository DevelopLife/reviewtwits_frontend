import { useRouter } from 'next/router';

import ShoppingMallReview from 'components/@feature/@shopping/ShoppingMallReview/ShoppingMallReview';

const ShoppingMallReviewPage = () => {
  const router = useRouter();

  // TODO: remove default state
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
