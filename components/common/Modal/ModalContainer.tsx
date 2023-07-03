import styled from '@emotion/styled';
import useModal from 'hooks/useModal';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import * as modals from 'components/common/Modal/modals';
import { useRouter } from 'next/router';
import atomModal from 'states/AtomModal';

const ModalContainer = () => {
  const modalState = useRecoilValue(atomModal);
  const modal = useModal();
  const router = useRouter();

  const { key, isVisible } = modalState;

  const ModalContent = key ? modals[key] : React.Fragment;
  const onOutsideClick = ({ target, currentTarget }: React.MouseEvent) => {
    if (target !== currentTarget) {
      return;
    }
    modal.hide();
    router.back();
  };

  const listenPopstateEvent = () => {
    router.beforePopState(() => {
      modal.hide();
      return true;
    });
  };
  useEffect(() => {
    listenPopstateEvent();
    return () => listenPopstateEvent();
  }, []);

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
    overflow: hidden;

    position: absolute;
    z-index: 10;

    background: rgba(0, 0, 0, 0.75);
  `,
};
export default ModalContainer;
