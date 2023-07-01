import { useSetRecoilState } from 'recoil';

import * as modals from '../components/common/Modal/modals';
import atomModal from 'states/atomModal';

interface ShowModalProps {
  key: keyof typeof modals;
}

const useModal = () => {
  const setModalState = useSetRecoilState(atomModal);

  const showModal = ({ key }: ShowModalProps) => {
    setModalState({
      key,
      isVisible: true,
    });
  };

  const hideModal = () => {
    setModalState((currentModal) => ({
      ...currentModal,
      isVisible: false,
    }));
  };

  return { show: showModal, hide: hideModal };
};

export default useModal;
