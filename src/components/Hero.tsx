import type { ReactNode } from 'react';
import { MONTH, ord } from '../utils/dates';
import { Countdown } from './Countdown';

type Props = {
  now: Date;
  next: Date;
  footnote: ReactNode;
};

export function Hero({ now, next, footnote }: Props) {
  return (
    <section className="hero">
      <div className="hero-char left">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/nervous-poster.jpg"
          aria-label="Nervous character animation"
        >
          <source src="/assets/Nervous_square.webm" type="video/webm" />
          <source src="/assets/Nervous_square.mp4" type="video/mp4" />
        </video>
        <span className="char-label">Fig. I — The Watcher</span>
      </div>

      <div className="hero-core">
        <div className="kicker">The Next Unlucky Friday</div>
        <div className="next-date">
          <span>{MONTH[next.getMonth()]} the </span>
          <span className="ord">{ord(next.getDate())}</span>
          <span className="year">{next.getFullYear()}</span>
        </div>

        <Countdown now={now} target={next} />

        <p className="footnote">{footnote}</p>
      </div>

      <div className="hero-char right">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/assets/jason-poster.jpg"
          aria-label="Jason character animation"
        >
          <source src="/assets/Jason_square.webm" type="video/webm" />
          <source src="/assets/Jason_square.mp4" type="video/mp4" />
        </video>
        <span className="char-label">Fig. II — The Kept</span>
      </div>
    </section>
  );
}
