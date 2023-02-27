import { StoryFn, Meta } from '@storybook/react';
import SignUpForm from './SignUpForm';

export default {
  title: 'SignUp/SignUpForm',
  component: SignUpForm,
} as Meta<typeof SignUpForm>;

export const Basic: StoryFn<typeof SignUpForm> = () => <SignUpForm />;
