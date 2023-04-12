import { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import AddReactionIcon from 'public/icons/add_reaction.svg';

const emojiList = [
  'LOVE',
  'SUNGLASSES',
  'LAUGHING',
  'SURPRISING',
  'THINKING',
  'PLEADING',
  'SHOCKING',
  'PRAYING',
  'GOOD',
  'NOTICING',
];

const AddReactionBox = () => {
  const [isReactionListOpen, setIsReactionListOpen] = useState(false);

  const toggleListOpen = () => setIsReactionListOpen((prev) => !prev);

  const props = {
    isListOpen: isReactionListOpen,
    toggleListOpen,
  };

  return <AddReactionBoxView {...props} />;
};

interface AddReactionBoxViewProps {
  isListOpen: boolean;
  toggleListOpen: () => void;
}

const AddReactionBoxView = ({
  isListOpen,
  toggleListOpen,
}: AddReactionBoxViewProps) => {
  return (
    <>
      <S.AddReactionButton onClick={toggleListOpen}>
        <AddReactionIcon />
      </S.AddReactionButton>
      {isListOpen && (
        <S.ReactionList>
          {emojiList.map((name, i) => (
            <S.ReactionButton key={i}>
              <Image
                width={24}
                height={24}
                src={`/icons/${name.toLowerCase()}.png`}
                alt=""
              />
            </S.ReactionButton>
          ))}
        </S.ReactionList>
      )}
    </>
  );
};

export default AddReactionBox;

const S = {
  Box: styled.div``,

  AddReactionButton: styled.button`
    padding: 0;
  `,

  ReactionList: styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);

    position: absolute;
    top: 30px;
    left: 0px;

    background: black;
    padding: 10px;
    border-radius: 14px;

    z-index: 10;
  `,

  ReactionButton: styled.button`
    padding: 5px;
  `,
};
