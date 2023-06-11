import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import ColorPalatte from 'components/common/Color/ColorPalatte';
import { useBoolean } from 'hooks/useBoolean';
import { DEFAULT_PROJECT_COLOR } from 'states/createProjectForm';
import { PRESET_COLORS } from 'constants/presetColors';

type ColorPickerOptions = {
  showPalatte: boolean;
};

interface ColorPickerTriggerProps {
  onChangeColor: (color: string) => void;
  colorPickerOptions?: ColorPickerOptions;
}

export const ColorPickerTrigger = ({
  onChangeColor,
  colorPickerOptions,
}: ColorPickerTriggerProps) => {
  const { isOpen, setToggle } = useBoolean(false);
  const [color, setColor] = useState(DEFAULT_PROJECT_COLOR);

  useEffect(() => {
    onChangeColor(color);
  }, [color, onChangeColor]);

  return (
    <S.Picker>
      <S.Trigger color={color} onClick={setToggle} />
      {isOpen && (
        <ColorPalatte
          color={color}
          onClick={setColor}
          presetColors={PRESET_COLORS}
          {...colorPickerOptions}
        />
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
