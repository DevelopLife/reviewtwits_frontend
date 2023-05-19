/* eslint-disable react-hooks/rules-of-hooks */
import ShoppingMallReview from 'components/ShoppingMallReview/ShoppingMallReview';
import {
  useGetShoppingMallReviewInfo,
  useGetShoppingMallReviewList,
} from 'hooks/queries/reviews';
import { useEffect, useState } from 'react';

const shoppingMallReviewPage = () => {
  const { data: shoppingmallReviewInfoData } = useGetShoppingMallReviewInfo();
  const { data: shoppingmallReviewList } = useGetShoppingMallReviewList();

  const [referrer, setReffer] = useState('');

  useEffect(() => {
    setReffer(document?.referrer);
  }, []);

  if (!shoppingmallReviewInfoData || !shoppingmallReviewList)
    return <h1>{referrer}</h1>;

  return (
    <div>
      <ShoppingMallReview
        shoppingmallReviewInfoData={shoppingmallReviewInfoData}
        shoppingmallReviewList={shoppingmallReviewList}
      />
    </div>
  );
};

export default shoppingMallReviewPage;
