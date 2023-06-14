import { useGetInfiniteScrapList } from 'hooks/queries/sns';
import ReviewList from '../common/ReviewList';

const ScrapList = () => {
  const infiniteScrapListProps = useGetInfiniteScrapList();

  return <ReviewList {...infiniteScrapListProps} />;
};

export default ScrapList;
