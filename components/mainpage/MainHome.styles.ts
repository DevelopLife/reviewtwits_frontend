import styled from '@emotion/styled';

const SliderView = styled.div`
  width: ${({ theme }) => theme.devices.desktop}px;
  height: ${1011 + 69}px;
  overflow: hidden;
`;

const SliderContainer = styled.div<{
  sliderCount: number;
  currentSlideIndex: number;
}>`
  display: flex;
  width: ${(props) => props.theme.devices.desktop * props.sliderCount}px;
  transform: translateX(
    ${(props) => -1 * props.theme.devices.desktop * props.currentSlideIndex}px
  );
  transition: ${(props) =>
    props.currentSlideIndex !== 0
      ? 'all 500ms ease-in-out'
      : 'all 0ms ease-in-out'};
`;

const Container = styled.div<{ backgroundColor: string }>`
  width: ${({ theme }) => theme.devices.desktop}px;
  height: ${1011 + 69}px;
  background-color: ${(props) => props.backgroundColor};
`;

const MainInfoArea = styled.div`
  display: flex;
`;

const LeftArea = styled.div`
  margin-left: 240px;
`;

const AppInfo = styled.h1<{ infoColor: string }>`
  margin-top: ${69 + 389}px;
  margin-bottom: 47px;

  div {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 66px;
    line-height: 80px;
    /* color: #ffffff; */
    color: ${(props) => props.infoColor};
  }
`;
const AppDesc = styled.p<{ descColor: string }>`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 36px;

  /* color: #ededed; */
  color: ${(props) => props.descColor};
`;

const RightArea = styled.div`
  padding-left: 96px;
`;

const Image = styled.img`
  width: 741px;
  height: 388px;
  margin-top: ${69 + 166}px;
  background-color: lightgray;
  margin-bottom: 457px;
  margin-right: 240px;
`;

const Button = styled.div`
  width: 211px;
  height: 67px;
  display: flex;
  align-items: center;

  margin-top: 26px;
  margin-bottom: 214px;
  border-radius: 60px;

  background-color: #181818;
  color: #ffffff;

  p {
    margin: auto;
  }
`;

export {
  SliderContainer,
  SliderView,
  Container,
  MainInfoArea,
  LeftArea,
  RightArea,
  AppInfo,
  AppDesc,
  Button,
  Image,
};
