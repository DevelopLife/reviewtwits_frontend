import { FollowListType } from 'typings/sns';
import SocialList from './SocialList';

export default {
  title: 'Social/Follower/SocialList',
  component: SocialList,
};

const MOCK_USER_LIST: FollowListType = [
  {
    userId: 0,
    nickname: '이순신',
    accountId: '이순신@naver.com',
    introduceText: '나는 이순신입니다.',
    profileImageUrl: null,
    detailIntroduce: '장군',
    reviewCount: 10,
    followers: 10,
    followings: 10,
  },
  {
    userId: 0,
    nickname: '일론머스크',
    accountId: '일론머스크@naver.com',
    introduceText: '나는 일론머스크입니다.',
    profileImageUrl: null,
    detailIntroduce: 'Coin Master',
    reviewCount: 10000000,
    followers: 100000000000,
    followings: 10000000000,
  },
];

const mockRef = { current: null };

export const Basic = () => (
  <SocialList userList={MOCK_USER_LIST} targetRef={mockRef} />
);
