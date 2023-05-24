import { useRouter } from 'next/router';
import { useEffect } from 'react';

/* eslint-disable react-hooks/rules-of-hooks */
import {
  useGetShoppingMallReviewInfo,
  useGetShoppingMallReviewList,
} from 'hooks/queries/reviews';
import { useRegisterShoppingMallProduct } from 'hooks/queries/shopping';
import ShoppingMallReview from 'components/ShoppingMallReview/ShoppingMallReview';
import { RegisterProjectParams } from 'typings/register';
import { replaceUrlProtocool } from 'utils/regExp';

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
  console.log(productURL, router.query);

  const { data: shoppingmallReviewInfoData } =
    useGetShoppingMallReviewInfo(productURL);
  const { data: shoppingmallReviewList } =
    useGetShoppingMallReviewList(productURL);

  console.log(shoppingmallReviewInfoData, useGetShoppingMallReviewList);

  const { mutateAsync } = useRegisterShoppingMallProduct();

  useEffect(() => {
    if (
      shoppingmallReviewInfoData?.status === 202 &&
      router.query.projectName &&
      router.query.productURL &&
      router.query.title &&
      router.query.image
    ) {
      const params: RegisterProjectParams = {
        projectName: projectName,
        body: {
          productUrl: productURL,
          productName: title,
          imageUrl: replaceUrlProtocool(image),
        },
      };

      mutateAsync(params);
    }
  }, [
    shoppingmallReviewInfoData?.status,
    router.query,
    mutateAsync,
    projectName,
    productURL,
    title,
    image,
  ]);

  if (shoppingmallReviewInfoData?.data && shoppingmallReviewList?.data) {
    return (
      <div>
        <ShoppingMallReview
          shoppingmallReviewInfoData={shoppingmallReviewInfoData?.data}
          shoppingmallReviewList={shoppingmallReviewList?.data}
        />
      </div>
    );
  }

  return null;
};

export default ShoppingMallReviewPage;
