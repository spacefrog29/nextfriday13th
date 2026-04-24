import { loreItems } from '../data/facts';

export function Lore() {
  return (
    <section className="lore">
      <div className="lore-head">
        <div className="eyebrow">Chapter II — Received Wisdom</div>
        <h2>Notes from the keeper of unlucky days.</h2>
        <p>
          The fear has a name — <em>paraskevidekatriaphobia</em> — and a long,
          patient history. Assembled below: small facts, older than you'd
          think.
        </p>
      </div>

      <div className="lore-list">
        {loreItems.map((item) => (
          <div className="lore-item" key={item.num}>
            <div className="num">{item.num}</div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
