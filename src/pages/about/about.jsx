import { img } from "../../shared/assets/img";
import { Link } from "react-router";
import Banner from "../../shared/ui/Banner";
import Reveal from "../../shared/ui/Reveal";

export default function About() {
  return (
    <>
      <Banner title="About Us" />
      <section className="sec">
        <div className="wrap split">
          <Reveal>
            <img src={img.citrus} alt="" className="w-full" />
          </Reveal>
          <Reveal delay={120}>
            <span className="script">About Us</span>
            <h2>We do Creative Things for Success</h2>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text.
            </p>
            <p className="feat">
              <span>🚜</span>
              <b>Modern Agriculture Equipment</b>
            </p>
            <p className="feat">
              <span>🌍</span>
              <b>No growth hormones are used</b>
            </p>
            <Link to="/shop" className="btn">
              Explore Now →
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="sec alt wrap">
        <span className="script">Why Choose us?</span>
        <h2>We do not buy from the open market & traders.</h2>
        <img
          src={img.flatlay}
          alt=""
          className="rounded-2xl w-full max-h-80 object-cover mt-6"
        />
        <div className="feats">
          {[
            ["🌿", "Nature Policy"],
            ["🏅", "100% Fresh"],
            ["🕐", "Support 24/7"],
            ["💳", "Secured Payment"],
          ].map(([e, t], i) => (
            <Reveal key={t} delay={i * 100} className="fc">
              <span>{e}</span>
              <b>{t}</b>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="sec wrap ctr">
        <span className="script">Team</span>
        <h2>Our Organic Experts</h2>
        <div className="team">
          {[
            ["👨‍🌾", "Samuel Edwards"],
            ["👩‍🌾", "Marrianne Lorrain"],
            ["👩‍🍳", "Inga Pelton"],
          ].map(([e, t], i) => (
            <Reveal key={t} delay={i * 120} className="tm">
              <div>{e}</div>
              <b>{t}</b>
              <small>Farmer</small>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="sec dark">
        <div className="wrap ctr">
          <span className="script">What We Do</span>
          <h2>What We Offer for You</h2>
          <div className="offer">
            {[
              ["🌶️", "Spicy"],
              ["🌾", "Natural Food"],
              ["🍎", "Fruit"],
              ["🥕", "Vegetable"],
            ].map(([e, t], i) => (
              <Reveal key={t} delay={i * 100}>
                <Link to={`/shop?q=${t.split(" ")[0]}`} className="of">
                  <span>{e}</span>
                  <b>{t}</b>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
