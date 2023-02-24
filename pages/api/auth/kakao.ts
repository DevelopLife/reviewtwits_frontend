import type { NextApiRequest, NextApiResponse } from 'next';
import { kakaoOauth } from '@api/oauth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const code = req.query.code as string;

  if (req.method !== 'GET') return res.status(403);
  if (!code) return res.status(400);

  const { access_token } = await kakaoOauth.getToken(code);

  if (!access_token) return res.status(401);

  const {
    kakao_account: { email },
  } = await kakaoOauth.getUserData(access_token);

  if (!email) return res.status(401);

  const isUserExist = false; //

  if (!isUserExist) {
    res.setHeader('Set-Cookie', `email=${email}; path=/;`);

    return res.status(200).redirect('/sign_up');
  }
}
