import ProductPic from './ProductPic'
import { Link } from 'react-router'
import { useCart } from '../../features/cart/CartContext'

export default function ProductCard({ p }) {
  const { add } = useCart()
  return (
    <div className="card">
      <span className="tag">{p.cat}</span>
      <Link to={`/shop/${p.id}`} className="pic"><ProductPic p={p} /></Link>
      <Link to={`/shop/${p.id}`} className="nm">{p.name}</Link>
      <div className="pr"><s>${p.old}.00</s> <b>${p.price}.00</b><span>★★★★★</span></div>
      <button className="add" onClick={() => add(p)}>Add to cart +</button>
    </div>
  )
}
