import { NextApiRequest, NextApiResponse } from "next";

export const preview = (req: NextApiRequest, res: NextApiResponse) => {
  res.setPreviewData({});
  res.writeHead(307, {
    Location: "/",
  });
  res.end();
};
