import { createContext, useContext, useEffect, useState } from 'react'
import { products } from '../../entities/product/products'

const Ctx = createContext()
export const useCart = () => useContext(Ctx)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cart')) || {} } catch { return {} }
  })
  const [toast, setToast] = useState(null)
  useEffect(() => localStorage.setItem('cart', JSON.stringify(items)), [items])

  const add = (p, q = 1) => {
    setItems(i => ({ ...i, [p.id]: (i[p.id] || 0) + q }))
    setToast({ text: `${p.name} added to cart`, id: Date.now() })
    clearTimeout(window.__t)
    window.__t = setTimeout(() => setToast(null), 1800)
  }
  const setQty = (id, q) => setItems(i => { const n = { ...i }; q < 1 ? delete n[id] : (n[id] = q); return n })
  const lines = Object.entries(items).map(([id, q]) => ({ p: products.find(x => x.id == id), q })).filter(l => l.p)
  const count = lines.reduce((s, l) => s + l.q, 0)
  const total = lines.reduce((s, l) => s + l.q * l.p.price, 0)

  return (
    <Ctx.Provider value={{ lines, count, total, add, setQty, clear: () => setItems({}) }}>
      {children}
      {toast && <div className="toast" key={toast.id}>🛒 {toast.text}</div>}
    </Ctx.Provider>
  )
}
