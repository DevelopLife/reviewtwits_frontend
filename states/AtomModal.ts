import { atom } from 'recoil';
import * as modals from 'components/common/Modal/modals';
export interface AtomModalProps {
  key?: keyof typeof modals;
  isVisible: boolean;
}

const atomModal = atom<AtomModalProps>({
  key: 'modal',
  default: {
    isVisible: false,
  },
});

export default atomModal;
