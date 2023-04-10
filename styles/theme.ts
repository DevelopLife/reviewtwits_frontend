const colors = {
  primary: '#FC4A55',
  secondary: '#2D87FF',
  blue_light: '#87b1f3',
  blue_0: '#4c80f1',
  blue_1: '#2D87FF',
  blue_dark: '#2c5ae9',
  green_light: '#76e8ad',
  green_0: '#35d48d',
  green_dark: '#1bbf83',
  red_light: '#ff8e89',
  red_0: '#ff5d5d',
  red_dark: '#f24147',
  gray_0: '#f8fafb',
  gray_1: '#efefef',
  gray_2: '#eaeeef',
  gray_3: '#a9afb3',
  gray_4: '#878d91',
  gray_5: '#4d5256',
  gray_6: '#363a3c',
  gray_7: '#292a2b',
  gray_8: '#363a3c',
  gray_9: '#292a2b',
  black: '#3d3d3d',
  yellow: '#F8BB2B',
  border_gray: '#e9e9e9',
  white: '#ffffff',
} as const;

const devices = {
  desktop: 1920,
};

const width = {
  socialSidebar: {
    desktop: '345px',
  },
};

const theme = {
  colors,
  devices,
  width,
};

export type Colors = keyof typeof theme.colors;

export default theme;
