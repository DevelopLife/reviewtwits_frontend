import { Button, ButtonProps } from '@components/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  // 스토리북 사이드바에서 폴더명 혹은 파일명이 됩니다. 중복 x
  title: 'Component/Button2',
  component: Button,
  parameters: {
    // https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

/*
컴포넌트 사용할때와 동일한 방식 
구성요소가 적은 경우에는 아래와 같이 사용하면 좋을 것으로 보입니다.
*/
export const Basic: ComponentStory<typeof Button> = () => (
  <Button
    left="왼쪽"
    center="가운데"
    right="오른쪽"
    styleProps={{
      color: 'green',
    }}
  />
);

/* 
2. Using args
하나의 공통되는 템플릿을 생성하고 그 이후로는 bind로 새로운 함수를 생성
args로 props만 넘겨주면 되는 방식
*/
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// 아래 export 들은 각각 하나의 스토리 컴포넌트라고 보시면 됩니다.
export const Confirm = Template.bind({});
Confirm.args = {
  left: '왼쪽',
  center: '승인',
  right: '오른쪽',
  styleProps: {
    color: 'blue',
  },
} as ButtonProps;

export const Reject = Template.bind({});

// Spread Operator를 이용해서도 활용가능
Reject.args = {
  ...Confirm.args,
  center: '거절',
  styleProps: {
    color: 'red',
  },
} as ButtonProps;
