import Table from 'components/Dashboard/common/Table';
import useStatistics from 'hooks/queries/statistics';

interface ProductStatisticsTableProps {
  projectId: string;
}

const mockData = Array.from({ length: 5 }, (_, index) => ({
  productId: '',
  productName: '',
  viewCount: '',
  reviewCount: '',
  mainAgeGroup: '',
  mainGender: '',
  averageRating: '',
}));

const ProductStatisticsTable = ({ projectId }: ProductStatisticsTableProps) => {
  const { useProductStatistics, useRequestInflowInfos } = useStatistics({
    projectId,
  });

  const { data: productStatisticsData } = useProductStatistics();
  // TODO: after DEL check success reqeust
  const { data: requestInflowInfosData } = useRequestInflowInfos();

  return productStatisticsData ? (
    <Table
      heads={['상품명', '조회수', '리뷰수', '주연령대', '주성별', '평균평점']}
      datas={productStatisticsData ? productStatisticsData : mockData}
    />
  ) : (
    <div>표시할 데이터가 없습니다.</div>
  );
};

export default ProductStatisticsTable;

// const S = {};
