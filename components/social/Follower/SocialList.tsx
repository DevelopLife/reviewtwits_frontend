import styled from '@emotion/styled';
import SocialCard from 'components/social/common/SocialCard';
import React from 'react';

const MockDatas = [
  { name: '1', role: '모델' },
  { name: '2', role: '모델' },
  { name: '3', role: '모델' },
  { name: '4', role: '모델' },
  { name: '5', role: '모델' },
];

const SocialList = () => {
  return (
    <S.Container>
      {MockDatas.map(({ name, role }) => (
        <SocialCard key={name} name={name} role={role} />
      ))}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 457px;
    height: auto;

    margin-top: 32px;
    margin-bottom: 98px;
  `,
};

export default SocialList;
