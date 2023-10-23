import express, {Router} from 'express'
const router: Router = express.Router()
import {getProducts} from '../../controllers/productsController'


router.route('/')
    .get(getProducts)

export default router