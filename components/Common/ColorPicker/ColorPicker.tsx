import { Dispatch, SetStateAction } from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorPickerProps {
  color: string;
  onClick: Dispatch<SetStateAction<string>>;
  onMouseUp: () => void;
}

export const ColorPicker = ({
  color,
  onClick,
  onMouseUp,
}: ColorPickerProps) => {
  return (
    <HexColorPicker color={color} onChange={onClick} onMouseUp={onMouseUp} />
  );
};
