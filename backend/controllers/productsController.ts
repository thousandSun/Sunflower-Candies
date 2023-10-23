import {Request, Response} from 'express'
import { sampleProducts } from '../src/data'

const getProducts = async (req: Request, res: Response) => {
    res.json(sampleProducts)
}

export {getProducts}