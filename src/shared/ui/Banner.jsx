import { img } from '../assets/img'

export default function Banner({ title, bg = img.cinnamon, dark }) {
  return (
    <section className={'banner' + (dark ? ' dk' : '')} style={{ backgroundImage: `url(${bg})` }}>
      <h1>{title}</h1>
    </section>
  )
}
