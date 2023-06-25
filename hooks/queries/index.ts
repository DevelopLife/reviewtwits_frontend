type ProductURL = string;
type SortOption = 'BEST' | 'NEWEST';
type ReviewId = number;
type Nickname = string;
type CommentId = number;
type SelectedUser = string;

type ProductName = string | undefined;
type SearchValue = string;

export const queryKey = {
  /*

    shoppingMall

  */

  useCachedGetShoppingMallReviewList: (productURL: ProductURL) => [
    'useCachedGetShoppingMallReviewList',
    productURL,
    'NEWEST',
  ],
  shoppingMallReviewInfo: (productURL: ProductURL) => [
    'shoppingMallReviewInfo',
    productURL,
  ],
  shoppingMallReviewList: (productURL: ProductURL, sort: SortOption) => [
    'shoppingMallReviewList',
    productURL,
    sort,
  ],

  /*

    social

  */

  socialProfile: () => ['socialProfile'],

  // social follow
  followingList: () => ['followingList'],
  followingDictionary: () => ['followingDictionary'],
  followerList: () => ['followerList'],
  followerSuggestion: () => ['followSuggestion'],

  // social home
  socialInfiniteFeed: () => ['useSocialInfiniteFeed'],
  userReviews: (nickname: Nickname) => ['userReviews', nickname],
  userOneReview: (reviewId: ReviewId) => ['userOneReview', reviewId],
  review: (reviewId: ReviewId) => ['review', reviewId],
  reviewComments: (reviewId: ReviewId) => ['review', 'comments', reviewId],
  reviewComment: (reviewId: ReviewId, commentId: CommentId) => [
    'review',
    'comment',
    reviewId,
    commentId,
  ],
  infiniteScrapList: () => ['useGetInfiniteScrapList'],
  recentUpdatedUser: () => ['recentUpdatedUser'],
  userInfiniteFeed: (selectedUser: SelectedUser) => [
    'useGetInfiniteFeed',
    selectedUser,
  ],

  socialMyReviews: (nickname: Nickname) => ['socialMyReviews', nickname],

  // social product review

  productInfo: (productName: ProductName) => ['productInfo', productName],
  searchProductName: (searchValue: SearchValue) => [
    'searchProductName',
    searchValue,
  ],

  /*
  
  project
 
  */

  prodjects: () => ['projects'],
};
