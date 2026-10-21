import ProductPic from '../../entities/product/ProductPic'
import { useState } from 'react'
import { Link } from 'react-router'
import Banner from '../../shared/ui/Banner'
import { useCart } from '../../features/cart/CartContext'

export default function Cart() {
  const { lines, total, setQty, clear } = useCart()
  const [paid, setPaid] = useState(false)

  return (
    <>
      <Banner title="Cart" />
      <section className="wrap sec narrow">
        {paid ? <div className="ctr"><h2>🎉 Order placed!</h2><p>We are packing your organic box.</p><Link to="/shop" className="btn dark">Keep shopping</Link></div>
          : !lines.length ? <div className="ctr"><h2>Your cart is empty</h2><Link to="/shop" className="btn dark">Go to shop</Link></div>
          : <>
            {lines.map(({ p, q }) => (
              <div className="line" key={p.id}>
                <Link to={`/shop/${p.id}`} className="pic mini"><ProductPic p={p} /></Link>
                <div className="gr"><b>{p.name}</b><small>${p.price}.00</small></div>
                <div className="stp"><button onClick={() => setQty(p.id, q - 1)}>−</button><span>{q}</span><button onClick={() => setQty(p.id, q + 1)}>+</button></div>
                <b className="sum">${p.price * q}.00</b>
                <button className="x" onClick={() => setQty(p.id, 0)} aria-label="Remove">✕</button>
              </div>
            ))}
            <div className="tot"><span>Total</span><b>${total}.00</b></div>
            <button className="btn dark" onClick={() => { clear(); setPaid(true) }}>Checkout</button>
          </>}
      </section>
    </>
  )
}
