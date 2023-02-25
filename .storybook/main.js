module.exports = {
  // stories 파일을 포함하고 싶은 폴더가 존재하면 해당 부분을 수정해주세요.
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
