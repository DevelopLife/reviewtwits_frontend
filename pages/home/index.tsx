import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';

const QUERY_KEY = ['mock'];

const promiseFunction = new Promise((resolve) =>
  setTimeout(() => resolve({ content: 'success' }), 2000)
);

const apiFunction = async () => {
  return (await promiseFunction) as { content: string };
};

const HomePage = () => {
  const mockQuery = useQuery(QUERY_KEY, apiFunction);

  return <div>{mockQuery.data?.content}</div>;
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(QUERY_KEY, apiFunction);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
