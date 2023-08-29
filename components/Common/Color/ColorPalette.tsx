import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { HexColorPicker } from 'react-colorful';

import type { PresetColors } from 'constants/presetColors';

interface ColorPalatteProps {
  color: string;
  presetColors: PresetColors;
  showPalatte?: boolean;
  onClick: Dispatch<SetStateAction<string>>;
}

const ColorPalatte = ({
  color,
  presetColors,
  showPalatte,
  onClick,
}: ColorPalatteProps) => {
  return (
    <S.ColorPickerContainer>
      <HexColorPicker color={color} onChange={onClick} />
      {showPalatte && (
        <S.PresetPalatte>
          {presetColors.map((presetColor, index) => (
            <S.PresetColorsButton
              key={presetColor + index}
              type="button"
              onClick={() => onClick(presetColor)}
              backgroundColor={presetColor}
            />
          ))}
        </S.PresetPalatte>
      )}
    </S.ColorPickerContainer>
  );
};

export default ColorPalatte;

const S = {
  ColorPickerContainer: styled.div`
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.gray_2};
    border-radius: 10px;
  `,
  PresetPalatte: styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 2%;
  `,
  PresetColorsButton: styled.button<{ backgroundColor: string }>`
    width: 12%;
    aspect-ratio: 1 / 1;
    margin: 4%;
    border-radius: 50%;
    background-color: ${({ backgroundColor }) => backgroundColor};
  `,
};
