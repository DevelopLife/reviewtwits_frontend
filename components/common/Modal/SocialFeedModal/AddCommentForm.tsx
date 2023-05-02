import styled from '@emotion/styled';
import useForm from 'hooks/useForm';
import React, { useRef } from 'react';
import Send from 'public/icons/send.svg';
import { snsAPI } from 'api/sns';

interface AddCommentFormProps {
  reviewId: string;
}

interface FormTypes {
  content: string;
  parentId?: number;
}

const AddCommentForm = ({ reviewId }: AddCommentFormProps) => {
  const {
    values,
    setValue,
    errors,
    isSubmitable: isValid,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm<FormTypes>({
    content: '',
    parentId: 0,
  });

  const { content } = values;

  const onCommentSubmit = () => {
    const createdComment = {
      content,
      parentId: 0,
    };

    snsAPI.postReviewComment(Number(reviewId), createdComment);
    setValue('content', '');
  };

  return (
    <S.Form onSubmit={(e) => handleSubmit(e, onCommentSubmit)}>
      <S.Input
        type="text"
        placeholder="Add a comment..."
        name="content"
        onChange={handleChange}
        value={content}
        // ref={inputRef}
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
