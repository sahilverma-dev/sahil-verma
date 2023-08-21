import { NextApiRequest, NextApiResponse } from "next";

export const preview = (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData({});
  res.writeHead(307, {
    Location: "/",
  });
  res.end();
};
