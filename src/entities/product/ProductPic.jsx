export default function ProductPic({ p }) {
  return p.img ? <img src={p.img} alt={p.name} className="pimg" /> : <span>{p.emoji}</span>
}
