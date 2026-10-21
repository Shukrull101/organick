import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
  const r = useRef()
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.classList.add('in'); o.disconnect() } }, { threshold: 0.15 })
    o.observe(r.current)
    return () => o.disconnect()
  }, [])
  return <div ref={r} className={'rv ' + className} style={{ transitionDelay: delay + 'ms' }}>{children}</div>
}

export function Count({ to, suffix = '' }) {
  const [n, setN] = useState(0)
  const r = useRef()
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      o.disconnect()
      let s = null
      const f = t => { s ??= t; const p = Math.min((t - s) / 1200, 1); setN(Math.round(to * p)); if (p < 1) requestAnimationFrame(f) }
      requestAnimationFrame(f)
    })
    o.observe(r.current)
    return () => o.disconnect()
  }, [to])
  return <b ref={r}>{n}{suffix}</b>
}
