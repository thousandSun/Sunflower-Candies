import express, {Application} from 'express'
import productsRouter from '../routes/api/products'
import cors from 'cors'
import { corsOptions } from '../config/corsOptions'

const app: Application = express()
const PORT = 4000

app.use(cors(corsOptions))

app.use('/products', productsRouter)


app.listen(PORT, ()=> {
    console.log(`server started on port ${PORT}`)
})