/* eslint-disable react/no-children-prop */
import type { StoryFn, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';
import styled from '@emotion/styled';

import Button2 from 'components/@ui/Button2';

export default {
  title: '@ui/Button',
  component: Button2,
} as Meta<typeof Button2>;

const defaultProps: ComponentProps<typeof Button2> = {
  paddingSize: 'medium',
  children: 'Button',
};

// accent

export const Accent: StoryFn<typeof Button2> = () => (
  <S.Row>
    <Button2 {...defaultProps} children="primary" />
    <Button2 {...defaultProps} accent="secondary" children="secondary" />
    <Button2 {...defaultProps} accent="common" children="common" />
  </S.Row>
);

// paddingSize

export const PaddingSize: StoryFn<typeof Button2> = () => (
  <S.Row>
    <Button2 {...defaultProps} paddingSize="small" children="small" />
    <Button2 {...defaultProps} paddingSize="medium" children="medium" />
  </S.Row>
);

// isFull

export const IsFull: StoryFn<typeof Button2> = () => (
  <S.Column>
    <Button2 {...defaultProps} isFull children="true" />
    <Button2 {...defaultProps} isFull={false} children="false" />
  </S.Column>
);

// layout
export const Layout: StoryFn<typeof Button2> = () => (
  <S.Row>
    <S.Item height={100}>
      <Button2 {...defaultProps} layout children="true" />
    </S.Item>
    <S.Item height={50}>
      <Button2 {...defaultProps} layout={false} children="false" />
    </S.Item>
  </S.Row>
);

// fill

export const Fill: StoryFn<typeof Button2> = () => (
  <S.Row>
    <Button2 {...defaultProps} fill children="true" />
    <Button2 {...defaultProps} fill={false} children="false" />
  </S.Row>
);

// shape

export const Shape: StoryFn<typeof Button2> = () => (
  <S.Row>
    <Button2 {...defaultProps} shape="circle" children="circle" />
    <Button2 {...defaultProps} shape="rectangle" children="rectangle" />
  </S.Row>
);

const S = {
  Row: styled.div`
    display: flex;
    justify-content: center;

    gap: 20px;
  `,

  Column: styled.div`
    & > button {
      margin-bottom: 20px;
    }
  `,

  Item: styled.div<{ height?: number }>`
    height: ${({ height }) => height && `${height}px`};
  `,
};
