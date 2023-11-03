import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  return (
    <>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <Link to="/">Home</Link>
    </>
  )
}

export default ProductPage
