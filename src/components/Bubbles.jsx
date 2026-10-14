// Soft bubbles that float up the whole page. Purely decorative: fixed layer, ignores the mouse, hidden from screen readers.
// Values are fixed (not random) so the layout is identical on every render.
// x = horizontal position (%), s = size (px, from tiny to huge), d = rise duration (s), o = start delay (s),
// w = sideways sway (px), c = colour (p purple, k pink, b blue)
const BUBBLES = [
  // very small
  { x: 12, s: 5, d: 14, o: -2, w: 10, c: 'p' },
  { x: 66, s: 6, d: 16, o: -9, w: -12, c: 'k' },
  // medium
  { x: 38, s: 16, d: 20, o: -8, w: 20, c: 'b' },
  { x: 86, s: 20, d: 24, o: -14, w: -22, c: 'p' },
  // large (kept modest)
  { x: 22, s: 36, d: 30, o: -18, w: 26, c: 'k' },
  { x: 74, s: 44, d: 34, o: -26, w: -30, c: 'b' },
]

const sizeClass = (s) => (s >= 36 ? 'bubble--xl' : s <= 10 ? 'bubble--xs' : '')

export default function Bubbles() {
  return (
    <div className="bubbles" aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className={`bubble bubble--${b.c} ${sizeClass(b.s)} ${i % 3 === 2 ? 'bubble--extra' : ''}`}
          style={{
            left: `${b.x}%`,
            '--size': `${b.s}px`,
            '--dur': `${b.d}s`,
            '--delay': `${b.o}s`,
            '--sway': `${b.w}px`,
          }}
        />
      ))}
    </div>
  )
}
