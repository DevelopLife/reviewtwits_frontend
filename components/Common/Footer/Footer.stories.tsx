import { StoryFn } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Component/Footer',
  component: Footer,
};

export const Basic: StoryFn<typeof Footer> = (args) => <Footer {...args} />;
