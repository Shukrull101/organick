import { useSearchParams } from "react-router";
import Banner from "../../shared/ui/Banner";
import Reveal from "../../shared/ui/Reveal";
import { products } from "../../entities/product/products";
import ProductCard from "../../entities/product/ProductCard";

export default function Shop() {
  const [sp, setSp] = useSearchParams();
  const q = (sp.get("q") || "").toLowerCase();
  const cat = sp.get("cat") || "All";
  const cats = ["All", ...new Set(products.map((p) => p.cat))];
  const list = products.filter(
    (p) =>
      (cat === "All" || p.cat === cat) &&
      (p.name + " " + p.cat).toLowerCase().includes(q),
  );
  const pick = (c) => {
    const n = new URLSearchParams(sp);
    c === "All" ? n.delete("cat") : n.set("cat", c);
    setSp(n);
  };

  return (
    <>
      <Banner title="Shop" />
      <section className="wrap sec">
        <div className="chips">
          {cats.map((c) => (
            <button
              key={c}
              className={c === cat ? "on" : ""}
              onClick={() => pick(c)}
            >
              {c}
            </button>
          ))}
        </div>
        {q && (
          <p className="res">
            Results for “{sp.get("q")}”: {list.length}
          </p>
        )}
        {list.length ? (
          <div className="grid">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={(i % 4) * 80}>
                <ProductCard p={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="empty">
            😕 Nothing found. Try another word or pick “All”.
          </p>
        )}
      </section>
    </>
  );
}
