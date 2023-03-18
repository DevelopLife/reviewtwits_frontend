import { StoryFn, Meta } from '@storybook/react';
import SignInForm from './SignInForm';

export default {
  title: 'SignIn/SignInForm',
  component: SignInForm,
} as Meta<typeof SignInForm>;

export const Basic: StoryFn<typeof SignInForm> = () => <SignInForm />;
