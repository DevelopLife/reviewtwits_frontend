import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 1360px;
  height: auto;

  padding-top: 52px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 31.85px;
`;

const ProductStatisticsTitle = styled.h3`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  /* Black */

  color: #181818;
`;

const Table = styled.table`
  width: 1304px;
  height: auto;

  text-align: left;
`;

const TableRow = styled.tr``;

const TableHeads = styled.thead``;

const TableHead = styled.th`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  padding-bottom: 24px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* gray/gray_6 */

  color: #363a3c;
`;

const TableBodys = styled.tbody``;

const TableBody = styled.td`
  padding: 16px;

  border-bottom: 1px solid #e9e9e9;
`;

export {
  Container,
  ProductStatisticsTitle,
  Table,
  TableRow,
  TableHeads,
  TableHead,
  TableBodys,
  TableBody,
};
