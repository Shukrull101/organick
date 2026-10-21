import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { CartProvider } from './features/cart/CartContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
)
