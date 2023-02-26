import { StoryFn, Meta } from '@storybook/react';
import { KakaoOauth } from 'components/common/Oauth/@index';

export default {
  title: 'Components/Oauth/KakaoOauth',
  component: KakaoOauth,
} as Meta<typeof KakaoOauth>;

export const Primary: StoryFn<typeof KakaoOauth> = () => <KakaoOauth />;
