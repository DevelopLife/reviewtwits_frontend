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
  webpackFinal: (webpackConfig) => {
    // This modifies the existing image rule to exclude .svg files
    // since we handle those with @svgr/webpack.
    const imageRule = webpackConfig.module.rules.find((rule) => {
      if (typeof rule !== 'string' && rule.test instanceof RegExp) {
        return rule.test.test('.svg');
      }
    });
    if (typeof imageRule !== 'string') {
      imageRule.exclude = /.svg$/;
    }

    webpackConfig.module.rules.push({
      test: /.svg$/,
      use: ['@svgr/webpack'],
    });

    return webpackConfig;
  },
};
