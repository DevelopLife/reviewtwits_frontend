const colors = {
  primary: '#FC4A55',
  blue_light: '#87b1f3',
  blue_0: '#4c80f1',
  blue_dark: '#2c5ae9',
  green_light: '#76e8ad',
  green_0: '#35d48d',
  green_dark: '#1bbf83',
  red_light: '#ff8e89',
  red_0: '#ff5d5d',
  red_dark: '#f24147',
  gray_0: '#f8fafb',
  gray_1: '#f1f5f5',
  gray_2: '#eaeeef',
  gray_3: '#e1e4e6',
  gray_4: '#ced3d6',
  gray_5: '#a9afb3',
  gray_6: '#878d91',
  gray_7: '#4d5256',
  gray_8: '#363a3c',
  gray_9: '#292a2b',
  black: '#181818',
} as const;

const devices = {
  desktop: 1920,
};

const theme = {
  colors,
  devices,
};

export default theme;
