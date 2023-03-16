import type { NextApiRequest, NextApiResponse } from 'next';
import { googleOauthAPI } from 'api/oauth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.query.token as string | undefined;
  if (!token) return res.status(400);

  const userProfile = await googleOauthAPI.getUserDataOrigin(token);
  return res.status(200).json(userProfile.data);
}
