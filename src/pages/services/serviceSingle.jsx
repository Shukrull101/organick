import { img } from '../../shared/assets/img'
import { Link, useParams, useNavigate } from 'react-router'
import Banner from '../../shared/ui/Banner'
import { services } from '../../entities/service/services'

export default function ServiceSingle() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const s = services.find(x => x.slug === slug)
  if (!s) return <section className="wrap sec ctr"><h2>Service not found</h2><Link to="/services" className="btn dark">All services</Link></section>

  return (
    <>
      <Banner title="Quality Standard" />
      <section className="wrap sec narrow">
        <img src={img.vineyard} alt="" className="w-full h-72 object-cover rounded-2xl mb-6" />
        <h2>{s.title}</h2><p>{s.text} Simply dummy text of the printing and typesetting industry.</p>
        <div className="feats">{[['🌱', 'Why Organic'], ['🧺', 'Speciality Produce']].map(([e, t]) => <div key={t} className="fc"><span>{e}</span><b>{t}</b></div>)}</div>
        <button className="btn dark" onClick={() => navigate(-1)}>← Go back</button>
      </section>
    </>
  )
}
