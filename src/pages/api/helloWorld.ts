import type { NextApiRequest, NextApiResponse } from 'next';

// @endpoint http://example.com/api/helloWorld
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'Hello World!' });
};
