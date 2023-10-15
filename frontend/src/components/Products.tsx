import { Row } from 'react-bootstrap'
import { sampleProducts } from '../data'
import ProductItem from './ProductItem'

function Products() {
  return (
    <Row>
      {sampleProducts.map((product) => (
        <ProductItem key={product.slug} product={product} />
      ))}
    </Row>
  )
}

export default Products
