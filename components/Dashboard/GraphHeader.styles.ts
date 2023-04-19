import styled from '@emotion/styled';

const Container = styled.div`
  width: 1200px;
  height: 129px;

  margin: auto;
  padding-left: 35px;
  padding-right: 35px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Datas = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  width: 350px;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DataTitle = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  /* Black */

  color: #181818;
`;

const DataDesc = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;

  /* Secondary */

  color: #181818;
`;

export { Container, Datas, Data, DataTitle, DataDesc };
