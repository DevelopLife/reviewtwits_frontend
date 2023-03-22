import { useQuery } from '@tanstack/react-query';
import { usersAPI } from 'api/users';
import Link from 'next/link';

export default function Home() {
  useQuery(['userProfile'], usersAPI.viewMyProile);

  return <Link href={'project/management'}>프로젝트 페이지</Link>;
}
