import {Request, Response} from 'express'
import { sampleProducts } from '../src/data'

const getProducts = async (req: Request, res: Response) => {
    res.json(sampleProducts)
}

const getProduct = async (req: Request, res: Response) => {
    res.json(sampleProducts.find((product) => product.slug === req.params.slug))
}

export {getProducts, getProduct}