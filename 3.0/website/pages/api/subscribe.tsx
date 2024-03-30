import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios'

const subscribe = async (req: NextApiRequest , res: NextApiResponse) => {
    const { email } = req.body; 

    try {
        const response = await axios({
            method: 'post',
            url: process.env.API_URL,
            data: {
                email: email,
                api_key: process.env.API_KEY
            }
        });
        // Return the ID succesfully.
        res.status(200).json({id: response?.data?.subscription?.id});
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {            
            res.status(error?.response?.status as number).json({message: error.message});
        } else {
            res.status(500).json({message: error})
        }
    }
}

export default subscribe;