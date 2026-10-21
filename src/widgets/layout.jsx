import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from './header'
import Footer from './footer'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { scrollTo(0, 0) }, [pathname])
  return (
    <>
      <Header />
      <main key={pathname} className="page"><Outlet /></main>
      <Footer />
    </>
  )
}
