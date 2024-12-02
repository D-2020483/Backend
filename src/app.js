import express from 'express';
import {productRouter} from './Routes/product.js'

const app = express();

app.use(express.json()); // For parsing JSON requests*

app.use('/products', productRouter)

//app.get('/products', getProducts)

//app.post('/products', createProduct)

//app.get('/products/:id', getProduct)

//app.delete('/products/:id', deleteProduct)

//app.patch('/products/:id', updateProduct)

app.listen(8000, () => console.log(`Server running on port ${8000}`));