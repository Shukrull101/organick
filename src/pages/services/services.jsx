import { img } from '../../shared/assets/img'
import { Link } from 'react-router'
import Banner from '../../shared/ui/Banner'
import Reveal from '../../shared/ui/Reveal'
import { services } from '../../entities/service/services'

export default function Services() {
  return (
    <>
      <Banner title="Services" dark bg={img.lettuce} />
      <section className="wrap sec ctr"><span className="script">What we Grow</span><h2>Better Agriculture for Better Future</h2>
        <div className="svc">{services.map((s, i) =>
          <Reveal key={s.slug} delay={i % 3 * 100}><Link to={`/services/${s.slug}`} className="sv"><span>{s.icon}</span><h3>{s.title}</h3><p>{s.text}</p></Link></Reveal>)}</div>
      </section>
      <section className="video" style={{ backgroundImage: `url(${img.flatlay})` }}><span className="script">Organic Only</span><h2>Everyday Fresh & Clean</h2><button className="play" aria-label="Play">▶</button></section>
    </>
  )
}
