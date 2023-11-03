import { Product } from '../types/Product'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <Card>
      <Link to={`/product/${product.slug}`} className="bare-link">
        <img
          src={product.image}
          alt={product.name}
          className="product-image card-img-top"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="secondary" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button>Add to Cart</Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProductItem
