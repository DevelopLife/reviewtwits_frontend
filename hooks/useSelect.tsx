import { useState } from 'react';

export const useSelect = (changeOptions: (value: string) => void) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickTrigger = () => setIsOpen((pre) => !pre);
  const onClickOption = (value: string) => {
    changeOptions(value);
    setIsOpen(false);
  };

  return {
    isOpen,
    onClickTrigger,
    onClickOption,
  };
};
