import { Routes, Route } from 'react-router'
import Layout from './widgets/layout'
import Home from './pages/homepage/homepage'
import About from './pages/about/about'
import Shop from './pages/shop/shop'
import ShopSingle from './pages/shop/shopSingle'
import Services from './pages/services/services'
import ServiceSingle from './pages/services/serviceSingle'
import Cart from './pages/cart/cart'
import NotFound from './pages/notfound/notfound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ShopSingle />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceSingle />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
