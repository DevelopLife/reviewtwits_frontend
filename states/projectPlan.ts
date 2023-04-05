import { UppercasePricePlan } from 'api/projects';
import { atom } from 'recoil';

export const projectPlanState = atom<UppercasePricePlan | ''>({
  key: 'projectPlan',
  default: '',
});
