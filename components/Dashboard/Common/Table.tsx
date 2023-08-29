import styled from '@emotion/styled';

interface TableProps {
  heads: string[];
  datas: ProductStatisticsList;
}

type ProductStatisticsList = ProductStatistics[];

type ProductStatistics = {
  productId: number;
  productName: string;
  viewCount: number;
  reviewCount: number;
  mainGender: '남성' | '여성';
  mainAgeGroup: number;
  averageRating: number;
};

const Table = ({ heads, datas }: TableProps) => {
  return (
    <S.Table>
      <thead>
        <S.TableRow>
          {heads.map((head) => (
            <S.TableHeader key={head}>{head}</S.TableHeader>
          ))}
        </S.TableRow>
      </thead>
      <tbody>
        {datas.map((data) => (
          <S.TableRow key={data.productId}>
            {Object.entries(data).map(
              ([key, value]) =>
                key !== 'productId' && (
                  <S.TableData key={key}>{value}</S.TableData>
                )
            )}
          </S.TableRow>
        ))}
      </tbody>
    </S.Table>
  );
};

export default Table;

const S = {
  Table: styled.table`
    margin: 1rem;
  `,
  TableHeader: styled.th`
    text-align: left;
    padding-bottom: 1.5rem;
  `,
  TableRow: styled.tr``,
  TableData: styled.td`
    vertical-align: middle;

    border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray_3}`};
    padding: 2rem 0;
  `,
};
