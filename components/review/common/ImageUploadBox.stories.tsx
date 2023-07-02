import type { Meta, StoryFn } from '@storybook/react';
import type { ImageUploadBoxProps } from 'components/Review/common/ImageUploadBox';

import ImageUploadBox from 'components/Review/common/ImageUploadBox';

const props: ImageUploadBoxProps = {
  buttonColor: 'blue_0',
  setValue: () => {
    return;
  },
};

export default {
  title: 'review/common/ImageUploadBox',
  component: ImageUploadBox,
} as Meta<typeof ImageUploadBox>;

export const Primary: StoryFn<typeof ImageUploadBox> = () => (
  <ImageUploadBox {...props} />
);
