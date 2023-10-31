import {NextApiRequest, NextApiResponse} from "next";
import uuid4 from "uuid4";

const ramdomImg = {
  img1: 'https://cdn-dev.edualpha.jp/slide_thumb/1697797962030_1697797961709_10578',
  img2: 'https://cdn-dev.edualpha.jp/slide_thumb/1698027364259_1698027363492_10578',
  img3: 'https://cdn-dev.edualpha.jp/slide_thumb/1697685504424_1697685503659_10578',
  img4: 'https://cdn-dev.edualpha.jp/slide_thumb/1697797983429_1697797983201_10578',
  img5: 'https://cdn-dev.edualpha.jp/slide_thumb/1697701108362_1697701108073_10578',
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const exampleData =  {
    like: 10,
  };

  const data = [];

  for (let i = 0; i < 10 ; i ++) {
    data.push({...exampleData, id: uuid4(), img: ramdomImg[`img${Math.floor(Math.random() * 5) + 1}`]});
  }

  res.status(200).json(data);
}