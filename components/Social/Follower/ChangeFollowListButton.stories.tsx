import { SetStateAction } from 'react';
import ChangeFollowListButton from './ChangeFollowListButton';

export default {
  title: 'Social/Follower/ChangeFollowListButton',
  component: ChangeFollowListButton,
};

export const Basic = () => (
  <ChangeFollowListButton
    targettedButton={'FOLLOWER'}
    setTargettedButton={function (
      value: SetStateAction<'FOLLOWER' | 'FOLLOWING'>
    ): void {
      throw new Error('Function not implemented.');
    }}
  />
);
