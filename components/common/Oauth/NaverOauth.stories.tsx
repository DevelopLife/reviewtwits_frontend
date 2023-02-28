import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NaverOauth } from 'components/common/Oauth/@index';

export default {
  title: 'Components/Oauth/NaverOauth',
  component: NaverOauth,
} as ComponentMeta<typeof NaverOauth>;

export const Primary: ComponentStory<typeof NaverOauth> = () => <NaverOauth />;
