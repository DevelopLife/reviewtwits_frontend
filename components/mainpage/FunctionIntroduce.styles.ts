import styled from '@emotion/styled';
import { SelectedButton } from './FunctionIntroduce';

const Container = styled.div`
  width: ${({ theme }) => theme.devices.desktop};
  height: ${1011 + 69}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #4a4a4a;
`;

const Title = styled.h4`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 53px;
  color: #ffffff;

  margin-top: 81px;
  margin-bottom: 50px;
`;

const Lists = styled.ul`
  width: 1214px;
  height: 78px;

  display: flex;
  padding: 0;
  gap: 50px;
`;

type ButtonProps = {
  selected: boolean;
  // id: SelectedButton;
};

const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 26px 70px;
  gap: 10px;

  background: #ffffff;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.08);
  border-radius: 20px;

  background-color: ${(props) => props.selected && '#FC4A55'};

  flex: none;
  order: 2;
  flex-grow: 0;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

  color: #181818;
`;

const Desc = styled.p`
  width: 523px;
  height: 72px;

  margin-top: 84px;
  margin-bottom: 27px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;

  color: #ffffff;
`;

const FunctionImage = styled.div`
  width: 1235px;
  height: 538px;
  margin-bottom: 97px;

  background: #d9d9d9;
`;

export { Container, Title, Lists, Button, Desc, FunctionImage };
