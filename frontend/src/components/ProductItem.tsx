import React from 'react'
import { Product } from '../types/Product'

interface ProductProps {
  product: Product
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <article className="product-item">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>${product.price}</h3>
    </article>
  )
}

export default ProductItem
