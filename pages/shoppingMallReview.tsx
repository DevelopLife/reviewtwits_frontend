/* eslint-disable react-hooks/rules-of-hooks */
import ShoppingMallReview from 'components/ShoppingMallReview/ShoppingMallReview';
import { useGetShoppingMallReviewInfo } from 'hooks/queries/reviews';

const shoppingMallReview = () => {
  const { data: shoppingmallReviewInfoData } = useGetShoppingMallReviewInfo();

  if (!shoppingmallReviewInfoData) return <h1>데이터가 없습니다</h1>;

  return (
    <div>
      <ShoppingMallReview
        shoppingmallReviewInfoData={shoppingmallReviewInfoData?.data}
      />
    </div>
  );
};

export default shoppingMallReview;
