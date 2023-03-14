import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      accountId: string;
      token: string;
    };
  }
}
