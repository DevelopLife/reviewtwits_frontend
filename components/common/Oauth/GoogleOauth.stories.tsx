import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GoogleOauth } from 'components/common/Oauth/@index';

export default {
  title: 'Components/Oauth/GooglaOauth',
  component: GoogleOauth,
} as ComponentMeta<typeof GoogleOauth>;

export const Primary: ComponentStory<typeof GoogleOauth> = () => (
  <GoogleOauth />
);
