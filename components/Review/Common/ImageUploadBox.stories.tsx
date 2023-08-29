import type { Meta, StoryFn } from '@storybook/react';
import type { ImageUploadBoxProps } from 'components/Review/Common/ImageUploadBox';

import ImageUploadBox from 'components/Review/Common/ImageUploadBox';

const props: ImageUploadBoxProps = {
  buttonColor: 'blue_0',
  setValue: () => {
    return;
  },
};

export default {
  title: 'review/Common/ImageUploadBox',
  component: ImageUploadBox,
} as Meta<typeof ImageUploadBox>;

export const Primary: StoryFn<typeof ImageUploadBox> = () => (
  <ImageUploadBox {...props} />
);
