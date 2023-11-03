import express, {Router} from 'express'
const router: Router = express.Router()
import {getProducts, getProduct} from '../../controllers/productsController'


router.route('/')
    .get(getProducts)

router.route('/:slug')
    .get(getProduct)
export default router