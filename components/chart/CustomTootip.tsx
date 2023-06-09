import styled from '@emotion/styled';
import type { TooltipProps } from 'recharts';
import type {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';

const CustomTooltip = (props: TooltipProps<ValueType, NameType>) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const { value } = payload[0];

    return (
      <S.CustomTootipItem>
        <S.Intro>방문자수 : {value}명</S.Intro>
      </S.CustomTootipItem>
    );
  }

  return null;
};

export default CustomTooltip;

const S = {
  CustomTootipItem: styled.div`
    background-color: white;
    padding: 15px;
    border-radius: 5px;
  `,
  Intro: styled.div``,
};
