import { selected } from './../components/Project/Plans/PlanCard.stories';
import { atom } from 'recoil';

interface AtomReviewSortButtonState {
  selected: 'NEWEST' | 'BEST';
}

export const atomReviewSortButtonState = atom<AtomReviewSortButtonState>({
  key: 'atomReviewSortButtonState',
  default: {
    selected: 'NEWEST',
  },
});
