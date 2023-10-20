import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Layout = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <Header title="Sunflower Sour Candies" />
      <Container className="mt-3">
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
