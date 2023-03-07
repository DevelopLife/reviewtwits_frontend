import styled from '@emotion/styled';

export const PlanCard = () => {
  return <PlanCardView />;
};
export const PlanCardView = () => {
  return (
    <S.PlanCardContainer>
      <S.PlanTitle>Plan</S.PlanTitle>
      <S.Plans></S.Plans>
    </S.PlanCardContainer>
  );
};

const S = {
  PlanCardContainer: styled.div`
    width: 273px;
    height: 369px;
    border-radius: 15px;
    padding: 56px 33px;

    :hover {
      cursor: pointer;
      opacity: 0.9;
    }

    border: ${() => `1px solid ${Colors.border}`};
    background-color: ${() => Colors.backgroundColor.selected};
  `,
  PlanTitle: styled.h2`
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;

    color: ${() => Colors.color.selected};
  `,
  Plans: styled.ul``,
  Plan: styled.li``,
};

const Colors = {
  border: '#e9e9e9;',
  color: {
    primary: '#181818',
    selected: '#FFFFFF',
  },
  backgroundColor: {
    primary: '#FFFFFF',
    selected: '#181818',
  },
};
