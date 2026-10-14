export default function SectionHeading({ id, lines, center = false, as: Tag = 'h2' }) {
  const multi = lines.length > 1
  return (
    <div className={`section-heading ${center ? 'section-heading--center' : ''}`}>
      <span className="section-heading__line" aria-hidden="true" />
      <Tag id={id}>
        {lines.map((l, i) => (
          <span key={i} className={multi && i === 0 ? 'section-heading__light' : undefined}>
            {l}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </Tag>
    </div>
  )
}
