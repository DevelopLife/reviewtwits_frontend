import React from 'react';
import Review from './Review';
import { ShoppingMallReviewDetail } from 'typings/reviews';

interface ReviewsProps {
  shoppingmallReviewList: ShoppingMallReviewDetail[];
}

const Reviews = ({ shoppingmallReviewList }: ReviewsProps) => {
  return (
    <div>
      {shoppingmallReviewList.map((review) => (
        <Review reviewDetail={review} key={review.reviewId} />
      ))}
    </div>
  );
};

export default Reviews;
