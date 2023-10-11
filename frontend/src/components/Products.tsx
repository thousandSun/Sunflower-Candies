import { sampleProducts } from '../data'
import ProductItem from './ProductItem'

function Products() {
  return (
    <main className="product-feed">
      {sampleProducts.map((product) => (
        <ProductItem key={product.slug} product={product} />
      ))}
    </main>
  )
}

export default Products
