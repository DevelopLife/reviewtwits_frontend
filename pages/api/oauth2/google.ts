import { oauthApi } from 'api/instance';
import { NextApiRequest, NextApiResponse } from 'next';

const getGoogleUserProfile = (accessToken: string) =>
  oauthApi.get(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
  );

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.query.token as string | undefined;

  if (!token) {
    res.status(400).send('');
  }
  if (token) {
    const userProfile = await getGoogleUserProfile(token);

    // TODO: userProfile.data.sub를 담아 reviewTwits api 서버로 login request
    res.status(200).send(userProfile.data);
  }
}
