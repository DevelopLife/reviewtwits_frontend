import { useState } from 'react';

export const useBoolean = (defaultState: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultState);

  const setTrue = () => setIsOpen(true);
  const setFalse = () => setIsOpen(false);
  const setToggle = () => setIsOpen((pre) => !pre);

  return {
    isOpen,
    setTrue,
    setFalse,
    setToggle,
  };
};
