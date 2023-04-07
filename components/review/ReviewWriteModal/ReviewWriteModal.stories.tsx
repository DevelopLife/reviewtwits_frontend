import type { Meta, StoryFn } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ReviewWriteModal from 'components/review/ReviewWriteModal/ReviewWriteModal';

const queryClient = new QueryClient();

export default {
  title: 'review/ReviewWriteModal/ReviewWriteModal',
  component: ReviewWriteModal,
} as Meta<typeof ReviewWriteModal>;

export const Primary: StoryFn<typeof ReviewWriteModal> = () => (
  <QueryClientProvider client={queryClient}>
    <ReviewWriteModal />
  </QueryClientProvider>
);
