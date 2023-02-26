import type { NextApiRequest, NextApiResponse } from 'next';
import { naverOauthAPI } from 'api/oauth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.query.token as string | undefined;
  if (!token) return res.status(401);

  const userData = await naverOauthAPI.getUserDataOrigin(token);
  if (!userData) return res.status(401);

  return res.status(200).json(userData.data.response);
}
