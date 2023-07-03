import { useGetInfiniteFeed } from 'hooks/queries/sns';
import ReviewList from '../Common/ReviewList';

const MainContentSection = () => {
  const infiniteFeedProps = useGetInfiniteFeed();

  return <ReviewList {...infiniteFeedProps} />;
};

export default MainContentSection;
