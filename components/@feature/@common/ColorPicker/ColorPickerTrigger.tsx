import styled from '@emotion/styled';
import { ColorPicker } from 'components/@feature/@common/ColorPicker/ColorPicker';
import { useBoolean } from 'hooks/useBoolean';
import { useState } from 'react';
import { DEFAULT_PROJECT_COLOR } from 'states/createProjectForm';

interface ColorPickerTriggerProps {
  onChangeColor: (color: string) => void;
}

export const ColorPickerTrigger = ({
  onChangeColor,
}: ColorPickerTriggerProps) => {
  const { isOpen, setToggle } = useBoolean(false);
  const [color, setColor] = useState(DEFAULT_PROJECT_COLOR);

  const onMouseUp = () => onChangeColor(color);

  return (
    <S.Picker>
      <S.Trigger color={color} onClick={setToggle} />
      {isOpen && (
        <ColorPicker color={color} onClick={setColor} onMouseUp={onMouseUp} />
      )}
    </S.Picker>
  );
};

const S = {
  Trigger: styled.div<{ color: string }>`
    width: 30px;
    height: 30px;
    border-radius: 50%;

    background-color: ${({ color }) => color};
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  `,
  Picker: styled.div``,
};
