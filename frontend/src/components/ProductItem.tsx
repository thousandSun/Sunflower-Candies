import React from 'react'
import { Product } from '../types/Product'
import { Col } from 'react-bootstrap'

interface ProductProps {
  product: Product
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <Col sm={6} md={4} lg={3}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>${product.price}</h3>
    </Col>
  )
}

export default ProductItem
