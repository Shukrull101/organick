import { useState } from "react";
import { Link } from "react-router";
import logo from "../shared/assets/logo.png";

export default function Footer() {
  const [done, setDone] = useState(false);
  return (
    <>
      <section className="wrap">
        <div className="news">
          <h2>
            Subscribe to
            <br />
            our Newsletter
          </h2>
          {done ? (
            <p className="ok">🎉 Thanks! You're on the list.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <input type="email" required placeholder="Your Email Address" />
              <button className="btn dark">Subscribe</button>
            </form>
          )}
        </div>
      </section>
      <footer className="ftr">
        <div className="wrap fg">
          <div>
            <h4>Contact Us</h4>
            <p>
              Email
              <br />
              <b>needhelp@organic.com</b>
            </p>
            <p>
              Phone
              <br />
              <b>666 888 888</b>
            </p>
            <p>
              Address
              <br />
              <b>88 road, borklyn street, USA</b>
            </p>
          </div>
          <div className="mid">
            <img src={logo} alt="" />
            <p>Simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div>
            <h4>Utility Pages</h4>
            <Link to="/about">About Us</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/services">Services</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
        <p className="copy">Copyright © Organick</p>
      </footer>
    </>
  );
}
