import React, { useState } from 'react';
import FindId from './FindId';
import FindIdResults from './FindResults';

type FindIdCardType = 'FindId' | 'FindResults';

const FindIdContainer = () => {
  const [cardKey, setCardKey] = useState<FindIdCardType>('FindId');
  const handleCardKeyToResult = () => {
    setCardKey('FindResults');
  };
  return cardKey === 'FindId' ? (
    <FindId handleCardKey={handleCardKeyToResult} />
  ) : (
    <FindIdResults />
  );
};

export default FindIdContainer;
