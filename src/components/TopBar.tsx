import { formatTopBarDate, moonPhase } from '../utils/dates';

type Props = { now: Date };

export function TopBar({ now }: Props) {
  return (
    <div className="topbar">
      <div className="mark">
        <span className="mark-glyph">13</span>
        <span>The Thirteenth — An Almanac</span>
      </div>
      <div className="meta">
        <span>
          Vol. <b>XIII</b>
        </span>
        <span>
          Ed. <b>{formatTopBarDate(now)}</b>
        </span>
        <span>
          Lat. <b>51.5°N</b>
        </span>
        <span>
          Moon <b>{moonPhase(now).toUpperCase()}</b>
        </span>
      </div>
    </div>
  );
}
