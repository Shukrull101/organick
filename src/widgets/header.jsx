import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router'
import { useCart } from '../features/cart/CartContext'
import logo from '../shared/assets/logo.png'

const before = [['/', 'Home'], ['/about', 'About']]
const after = [['/shop', 'Shop']]
const pages = [['/services', 'Services'], ['/services/dairy-products', 'Service Single'], ['/shop/1', 'Shop Single'], ['/cart', 'Cart'], ['/404', '404 Not Found']]

export default function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [sp] = useSearchParams()
  const { count } = useCart()
  const [q, setQ] = useState(sp.get('q') || '')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dd, setDd] = useState(false)

  useEffect(() => {
    const f = () => setScrolled(scrollY > 10)
    addEventListener('scroll', f)
    return () => removeEventListener('scroll', f)
  }, [])
  useEffect(() => { setOpen(false); setDd(false) }, [pathname])

  const go = (v, replace) => navigate(v.trim() ? `/shop?q=${encodeURIComponent(v)}` : '/shop', { replace })

  return (
    <header className={'hdr' + (scrolled ? ' sc' : '')}>
      <div className="wrap">
        <Link to="/"><img src={logo} alt="Organick" /></Link>
        <nav className={'nav' + (open ? ' open' : '')}>
          {before.map(([to, t]) => <NavLink key={to} to={to} end>{t}</NavLink>)}
          <div className={'dd' + (dd ? ' open' : '')}>
            <button type="button" onClick={() => setDd(!dd)} aria-expanded={dd}>Pages <i>⌄</i></button>
            <div className="ddm"><div>
              {pages.map(([to, t]) => <NavLink key={to} to={to} end>{t}</NavLink>)}
            </div></div>
          </div>
          {after.map(([to, t]) => <NavLink key={to} to={to} end>{t}</NavLink>)}
        </nav>
        <form className="search" onSubmit={e => { e.preventDefault(); go(q) }}>
          <input value={q} placeholder="Search products..." onChange={e => { setQ(e.target.value); if (pathname === '/shop') go(e.target.value, true) }} />
          <button aria-label="Search">🔍</button>
        </form>
        <Link to="/cart" className="cartb">🛒 Cart (<b key={count}>{count}</b>)</Link>
        <button className="burger" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </header>
  )
}
