import styled from '@emotion/styled';
import useModal from 'hooks/useModal';
import React from 'react';
import { useRecoilValue } from 'recoil';
import atomModal from 'states/AtomModal';
import * as modals from './modals';

const ModalContainer = () => {
  const modalState = useRecoilValue(atomModal);
  const modal = useModal();

  const { key, isVisible } = modalState;

  const ModalContent = key ? modals[key] : React.Fragment;
  const onOutsideClick = ({ target, currentTarget }: React.MouseEvent) => {
    if (target !== currentTarget) {
      return;
    }
    modal.hide();
  };

  return (
    <>
      {isVisible && (
        <S.Background onClick={onOutsideClick}>
          <ModalContent />
        </S.Background>
      )}
    </>
  );
};

const S = {
  Background: styled.div`
    width: 100vw;
    height: 100vh;

    position: absolute;
    z-index: 10;

    background: rgba(0, 0, 0, 0.75);
  `,
};
export default ModalContainer;
