import styled from '@emotion/styled';
import useForm from 'hooks/useForm';
import React from 'react';
import Send from 'public/icons/send.svg';

const AddCommentForm = () => {
  const {
    values,
    errors,
    isSubmitable: isValid,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm({
    accountId: '',
    accountPw: '',
  });

  const onCommentSubmit = () => {
    console.log(values);
  };

  return (
    <S.Form onSubmit={(e) => handleSubmit(e, onCommentSubmit)}>
      <S.Input
        type="text"
        placeholder="Add a comment..."
        onChange={handleChange}
      />
      <S.SendButton>
        <Send />
      </S.SendButton>
    </S.Form>
  );
};

const S = {
  Form: styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 564px;
    height: 54px;

    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 32px;
  `,
  Input: styled.input`
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 100%;
    flex: 1;

    padding-left: 32px;
    border-bottom-left-radius: 32px;
    border-top-left-radius: 32px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    border: none;
    outline: none;

    color: ${({ theme }) => theme.colors.white};

    ::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  `,
  SendButton: styled.button`
    margin-right: 32px;

    width: 24px;
    height: 24px;
  `,
};
export default AddCommentForm;
