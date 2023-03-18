import { StoryFn, Meta } from '@storybook/react';
import SocialLoginBox from './SocialLoginBox';

export default {
  title: 'SignIn/SocialLoginBox',
  component: SocialLoginBox,
} as Meta<typeof SocialLoginBox>;

export const Basic: StoryFn<typeof SocialLoginBox> = () => <SocialLoginBox />;
