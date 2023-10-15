import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Header title="Sunflower Sour Candies" />
      <Container className="mt-3">
        <Products />
      </Container>
      <Footer />
    </div>
  )
}

export default App
