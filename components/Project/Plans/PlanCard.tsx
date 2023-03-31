import styled from '@emotion/styled';

import CheckedIconSVG from 'public/images/checked_icon.svg';

interface IsSelected {
  isSelected: boolean;
}
interface PlanCardProps extends IsSelected {
  title: string;
  price: number;
  options: string[];
  onClick: () => void;
}

export const PlanCard = ({
  title,
  price,
  options,
  isSelected,
  onClick,
}: PlanCardProps) => {
  return (
    <PlanCardView
      title={title}
      price={price}
      options={options}
      isSelected={isSelected}
      onClick={onClick}
    />
  );
};

export const PlanCardView = ({
  title,
  price,
  options,
  isSelected,
  onClick,
}: PlanCardProps) => {
  const planPrice = price === -1 ? 'custom pricing' : `$${price} per month`;

  return (
    <S.PlanCardContainer isSelected={isSelected} onClick={onClick}>
      <S.Title isSelected={isSelected}>{title}</S.Title>
      <S.Price>{planPrice}</S.Price>
      <S.Plans>
        {options.map((option) => (
          <S.PlanWrap key={option}>
            <CheckedIconSVG />

            <S.Plan isSelected={isSelected}>{option}</S.Plan>
          </S.PlanWrap>
        ))}
      </S.Plans>
    </S.PlanCardContainer>
  );
};

const S = {
  PlanCardContainer: styled.div<IsSelected>`
    width: 273px;
    height: 369px;
    border-radius: 15px;
    padding: 56px 25px 56px 29px;

    :hover {
      cursor: pointer;
      opacity: 0.9;
    }

    border: ${() => `1px solid ${Colors.border}`};
    background-color: ${({ isSelected }) =>
      isSelected
        ? Colors.backgroundColor.selected
        : Colors.backgroundColor.primary};
  `,
  Title: styled.h2<IsSelected>`
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;

    color: ${({ isSelected }) =>
      isSelected ? Colors.optionsColor.selected : Colors.optionsColor.primary};
  `,
  Price: styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${() => Colors.priceColor.primary};
  `,
  Plans: styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-top: 35px;
  `,
  PlanWrap: styled.li`
    display: flex;
    align-items: flex-end;
    gap: 2px;
  `,
  Plan: styled.span<IsSelected>`
    font-weight: 500;
    font-size: 16px;
    vertical-align: bottom;
    color: ${({ isSelected }) =>
      isSelected ? Colors.optionsColor.selected : Colors.optionsColor.primary};
  `,
};

const Colors = {
  border: '#e9e9e9;',
  color: {
    primary: '#181818',
    selected: '#FFFFFF',
  },
  priceColor: {
    primary: '#878D91',
  },
  optionsColor: {
    primary: '#181818',
    selected: '#FFFFFF',
  },
  backgroundColor: {
    primary: '#FFFFFF',
    selected: '#393939',
  },
};
