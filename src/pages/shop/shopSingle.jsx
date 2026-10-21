import ProductPic from '../../entities/product/ProductPic'
import { useState } from 'react'
import { Link, useParams } from 'react-router'
import Banner from '../../shared/ui/Banner'
import Reveal from '../../shared/ui/Reveal'
import { products } from '../../entities/product/products'
import ProductCard from '../../entities/product/ProductCard'
import { useCart } from '../../features/cart/CartContext'

export default function ShopSingle() {
  const { id } = useParams()
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState(0)
  const p = products.find(x => x.id === Number(id))

  if (!p) return <section className="wrap sec ctr"><h2>Product not found</h2><Link to="/shop" className="btn dark">Back to shop</Link></section>

  return (
    <>
      <Banner title="Shop Single" />
      <section className="wrap sec single">
        <div className="big2"><ProductPic p={p} /></div>
        <div>
          <span className="tag s">{p.cat}</span><h2>{p.name}</h2><p className="stars">★★★★★</p>
          <p className="pr"><s>${p.old}.00</s> <b>${p.price}.00</b></p>
          <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
          <div className="qty">Quantity: <input type="number" min="1" value={qty} onChange={e => setQty(Math.max(1, +e.target.value || 1))} />
            <button className="btn dark" onClick={() => add(p, qty)}>Add To Cart +</button></div>
        </div>
      </section>
      <section className="wrap ctr">
        <div className="chips">{['Product Description', 'Additional Info'].map((t, i) => <button key={t} className={tab === i ? 'on' : ''} onClick={() => setTab(i)}>{t}</button>)}</div>
        <p key={tab} className="tabp">{tab ? 'Weight: 1 kg · Origin: local farms · Certified organic.' : 'Welcome to the world of natural and organic. We have grown on the principles of health, ecology, and care.'}</p>
      </section>
      <section className="wrap sec ctr"><h2>Related Products</h2>
        <div className="grid">{products.filter(x => x.id !== p.id).slice(0, 4).map((r, i) => <Reveal key={r.id} delay={i * 80}><ProductCard p={r} /></Reveal>)}</div>
      </section>
    </>
  )
}
