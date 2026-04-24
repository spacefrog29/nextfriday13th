type Props = { now: Date; target: Date };

export function Countdown({ now, target }: Props) {
  const diff = target.getTime() - now.getTime();
  const d = Math.max(0, Math.floor(diff / 86_400_000));
  const h = Math.max(0, Math.floor((diff % 86_400_000) / 3_600_000));
  const m = Math.max(0, Math.floor((diff % 3_600_000) / 60_000));
  const s = Math.max(0, Math.floor((diff % 60_000) / 1000));

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="countdown">
      <div className="cd-unit">
        <div className="n">{pad(d)}</div>
        <div className="l">Days</div>
      </div>
      <div className="cd-unit">
        <div className="n">{pad(h)}</div>
        <div className="l">Hours</div>
      </div>
      <div className="cd-unit">
        <div className="n">{pad(m)}</div>
        <div className="l">Min</div>
      </div>
      <div className="cd-unit">
        <div className="n">{pad(s)}</div>
        <div className="l">Sec</div>
      </div>
    </div>
  );
}
