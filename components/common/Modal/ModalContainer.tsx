import styled from '@emotion/styled';
import useModal from 'hooks/useModal';
import React from 'react';
import { useRecoilValue } from 'recoil';
import atomModal from 'states/atomModal';
import * as modals from './modals';
import { useRouter } from 'next/router';

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
