import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 151px;
`;

const SerchedDataBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 151px;
  height: 128px;
`;

const SerchedDatas = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SerchedData = styled.li`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

const DeviceDataBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 151px;
  height: 81px;
`;

const DeviceDatas = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DeviceData = styled.li`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

const Title = styled.strong`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  /* Black */

  color: #181818;
`;

const Line = styled.div`
  width: 151px;
  height: 0px;

  margin-top: 8.5px;
  margin-bottom: 10.5px;

  border: 1px solid #e9e9e9;
`;

const Layout = styled.div`
  height: 40px;
`;

export {
  Container,
  SerchedDataBox,
  SerchedDatas,
  SerchedData,
  DeviceDataBox,
  DeviceDatas,
  DeviceData,
  Title,
  Line,
  Layout,
};
