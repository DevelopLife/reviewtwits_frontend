import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 60px;
  padding-left: 45px;
  padding-right: 44px;
`;

const OrderHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;

  color: #000000;
`;

const Table = styled.table`
  width: 1348px;
  height: 283px;

  border: 1px solid black;
`;

const TableHeader = styled.th``;

const TableRow = styled.tr``;

const TableData = styled.td``;

const Margin = styled.div`
  height: 40px;
`;

export {
  Container,
  OrderHeader,
  Title,
  Table,
  TableHeader,
  TableRow,
  TableData,
  Margin,
};
