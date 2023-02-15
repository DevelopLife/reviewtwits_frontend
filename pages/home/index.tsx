import styled from '@emotion/styled';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

const HomePage = () => {
  const mockQuery = useQuery(QUERY_KEY, apiFunction);

  return (
    <section>
      <S.Box isLoading>{mockQuery.data?.content}</S.Box>
    </section>
  );
};

export default HomePage;

const S = {
  Box: styled.div<{ isLoading: boolean }>`
    background-color: red;
  `,
};

// mock fetch function
const promiseFunction = new Promise((resolve) =>
  setTimeout(() => resolve({ content: 'success' }), 2000)
);
const apiFunction = async () => {
  return (await promiseFunction) as { content: string };
};

const QUERY_KEY = ['mock'];

// SSR
export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(QUERY_KEY, apiFunction);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
