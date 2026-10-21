import { img } from '../../shared/assets/img'
import { Link } from 'react-router'
import Reveal, { Count } from '../../shared/ui/Reveal'
import { products } from '../../entities/product/products'
import ProductCard from '../../entities/product/ProductCard'

const grid = list => <div className="grid">{list.map((p, i) => <Reveal key={p.id} delay={i % 4 * 90}><ProductCard p={p} /></Reveal>)}</div>

export default function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${img.hero})` }}><div className="wrap hg">
        <div>
          <span className="script">100% Natural Food</span>
          <h1>Choose the best healthier way of life</h1>
          <Link to="/shop" className="btn">Explore Now →</Link>
        </div>
        <div />
      </div></section>

      <section className="wrap sec promo">
        <Reveal><Link to="/shop?q=banana" className="pc"><img src={img.promo1} alt="" /><div className="pt"><span className="script">Natural!!</span><h3>Get Garden<br />Fresh Fruits</h3></div></Link></Reveal>
        <Reveal delay={120}><Link to="/shop?cat=Vegetable" className="pc"><img src={img.promo2} alt="Get 10% off on Vegetables" /></Link></Reveal>
      </section>

      <section className="sec alt"><div className="wrap split">
        <Reveal><img src={img.citrus} alt="" className="w-full" /></Reveal>
        <Reveal delay={120}>
          <span className="script">About Us</span><h2>We Believe in Working Accredited Farmers</h2>
          <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <p className="feat"><span>🌱</span><b>Organic Foods Only</b></p>
          <p className="feat"><span>✅</span><b>Quality Standards</b></p>
          <Link to="/about" className="btn dark">Shop Now →</Link>
        </Reveal>
      </div></section>

      <section className="wrap sec ctr"><span className="script">Categories</span><h2>Our Products</h2>
        {grid(products.slice(0, 8))}
        <Link to="/shop" className="btn dark">Load More →</Link>
      </section>

      <section className="sec testi" style={{ backgroundImage: `url(${img.cinnamon})` }}><div className="wrap ctr">
        <span className="script">Testimonial</span><h2>What Our Customer Saying?</h2>
        <p>“Fresh, honest food that tastes like it came straight from the field. Delivery is always on time.”</p>
        <b>⭐⭐⭐⭐⭐ Sara Taylor</b>
        <div className="stats">{[[100, '%', 'Organic'], [285, '', 'Active Product'], [350, '+', 'Organic Orchads'], [25, '+', 'Years of Farming']].map(([n, s, l]) =>
          <div key={l}><Count to={n} suffix={s} /><small>{l}</small></div>)}</div>
      </div></section>

      <section className="sec dark"><div className="wrap">
        <div className="row"><div><span className="script">Offer</span><h2>We Offer Organic For You</h2></div><Link to="/shop" className="btn">View All Product ⊕</Link></div>
        {grid(products.filter(p => [5, 6, 8, 11].includes(p.id)))}
      </div></section>

      <section className="split2">
        <div className="farm" style={{ backgroundImage: `url(${img.vineyard})` }} />
        <Reveal className="fp"><span className="script">Eco Friendly</span><h2>Econis is a Friendly Organic Store</h2>
          {['Start with Our Company First', 'Learn How to Grow Yourself', 'Farming Strategies of Today'].map(t => <p key={t}><b>{t}</b><br />Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>)}
        </Reveal>
      </section>

      <section className="sec alt"><div className="wrap tiles">
        {[[img.smoothie, 'Organic Juice', 'cat=Health'], [img.flatlay, 'Organic Food', 'cat=Fresh'], [img.cookies, 'Nuts Cookis', 'cat=Nuts']].map(([src, t, q], i) =>
          <Reveal key={t} delay={i * 120}><Link to={`/shop?${q}`} className="tile"><img src={src} alt="" /><b>{t}</b></Link></Reveal>)}
      </div></section>

      <section className="wrap sec"><span className="script">News</span><h2>Discover weekly content about organic food, & more</h2>
        <div className="posts">{[[img.lettuce, 'The Benefits of Vitamin D & How to Get It'], [img.tomato, 'Our Favourite Summertime Tomato']].map(([src, t], i) =>
          <Reveal key={t} delay={i * 120} className="post"><div><img src={src} alt="" className={src === img.tomato ? 'object-contain p-4' : ''} /></div><h3>{t}</h3><p>Simply dummy text of the printing and typesetting industry.</p><Link to="/shop" className="btn">Read More</Link></Reveal>)}</div>
      </section>
    </>
  )
}
