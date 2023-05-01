/* eslint-disable react-hooks/rules-of-hooks */
import {
  useGetShoppingMallReviewInfo,
  useGetShoppingMallReviewList,
} from 'hooks/queries/reviews';
import { useRouter } from 'next/router';
import ShoppingMallReview from 'components/ShoppingMallReview/ShoppingMallReview';

const ShoppingMallReviewPage = () => {
  const router = useRouter();
  const { productURL } = router.query as { productURL: string };
  const { data: shoppingmallReviewInfoData } =
    useGetShoppingMallReviewInfo(productURL);
  const { data: shoppingmallReviewList } =
    useGetShoppingMallReviewList(productURL);

  if (!shoppingmallReviewInfoData || !shoppingmallReviewList) {
    return <h1>데이터가 없습니다</h1>;
  }

  return (
    <div>
      <ShoppingMallReview
        shoppingmallReviewInfoData={shoppingmallReviewInfoData?.data}
        shoppingmallReviewList={shoppingmallReviewList?.data}
      />
    </div>
  );
};

export default ShoppingMallReviewPage;
