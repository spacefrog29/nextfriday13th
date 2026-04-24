import { tickerFacts } from '../data/facts';

export function Ticker() {
  // Duplicate the list so the translateX(-50%) loop is seamless.
  const items = [...tickerFacts, ...tickerFacts];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {items.map((f, i) => (
          <span className="ticker-item" key={i}>
            <span className="tag">{f.tag}</span>
            <span>{f.text}</span>
            <span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
