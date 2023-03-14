import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import GoogleProvider from 'next-auth/providers/google';
import { usersAPI } from 'api/users';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          id: {
            label: '아이디',
            type: 'email',
            placeholder: '아이디',
          },
          password: {
            label: '비밀번호',
            type: 'password',
            placeholder: '비밀번호',
          },
        },
        async authorize(credentials: any) {
          // type 수정 필요
          return credentials;
        },
      }),
      NaverProvider({
        clientId: process.env.NAVER_CLIENT_ID || '',
        clientSecret: process.env.NAVER_CLIENT_SECRET || '',
      }),
      KakaoProvider({
        clientId: process.env.KAKAO_CLIENT_ID || '',
        clientSecret: process.env.KAKAO_CLIENT_SECRET || '',
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      }),
    ],
    callbacks: {
      async jwt({ token }) {
        return token;
      },
      async session({ session }) {
        // const { user } = session;

        // (로그인 할 때만 작동) token 요청 후 session에 저장

        return session;
      },
    },
    pages: {
      signIn: '/sign-in',
    },
  });
};

export default handler;
