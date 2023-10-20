import Layout from './components/Layout'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product">
          <Route path=":slug" element={<ProductPage />} />
        </Route>{' '}
      </Route>{' '}
    </Routes>
  )
}

export default App
