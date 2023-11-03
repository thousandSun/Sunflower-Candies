import { Col, Row } from 'react-bootstrap'
import ProductItem from './ProductItem'
import { Product } from '../types/Product'
import { isApiError } from '../utils'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHook'

function Home() {
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">
      {isApiError(error) ? error.response.data.message : 'An error occurred'}
    </MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Sunflower Sour Candies</title>
      </Helmet>
      {products!.map((product: Product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default Home
