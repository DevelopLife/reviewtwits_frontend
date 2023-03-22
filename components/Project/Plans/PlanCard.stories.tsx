import { Meta } from '@storybook/react';

import { PlanCard } from 'components/Project/Plans/PlanCard';
import { PLAN_DATAS } from 'constants/planDatas';

export default {
  title: 'project/plans/PlanCard',
  component: PlanCard,
} as Meta;

export const primary = () => (
  <PlanCard
    title={PLAN_DATAS.free.title}
    price={PLAN_DATAS.free.price}
    options={PLAN_DATAS.free.options}
    onClick={() => void 0}
    isSelected={false}
  />
);

export const selected = () => (
  <PlanCard
    title={PLAN_DATAS.free.title}
    price={PLAN_DATAS.free.price}
    options={PLAN_DATAS.free.options}
    onClick={() => void 0}
    isSelected
  />
);
