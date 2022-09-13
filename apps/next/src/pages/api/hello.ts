import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';

type Data = {
    message: string
}

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
    return res.status(200).json({message: 'next + expo + trpc'})
}

export default handler;
