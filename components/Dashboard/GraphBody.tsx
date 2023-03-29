import styled from '@emotion/styled';
import SimpleLineChart from 'components/common/Charts/SimpleLineChart';
import mockDateData from 'constants/mockDate';

const GraphBody = () => {
  const dataKeys: Array<keyof (typeof mockDateData)[0]> = ['값'];

  return (
    <S.Container>
      <SimpleLineChart data={mockDateData} dataKeys={dataKeys} />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    height: 448px;
  `,
};

export default GraphBody;
