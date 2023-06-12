import styled from '@emotion/styled';
import React from 'react';
import ReviewWriteForm from 'components/social/review/ReviewWriteForm';

const SocialReviewCreateModal = () => {
  return (
    <S.CreateReviewContainer>
      <ReviewWriteForm />
    </S.CreateReviewContainer>
  );
};

export default SocialReviewCreateModal;

const S = {
  CreateReviewContainer: styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 1488px;
    height: 899px;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.21);
    border-radius: 20px;
  `,
};
