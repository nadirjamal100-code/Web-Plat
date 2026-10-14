import SectionHeading from './SectionHeading.jsx'
import { posts } from '../data/posts.js'

// The marquee shows the five posts that have a photo; each links to its article.
const shown = posts.filter((p) => p.img)

function PostSet({ hidden = false }) {
  return shown.map((p) => (
    <li key={`${hidden ? 'dup-' : ''}${p.slug}`} className="post" aria-hidden={hidden || undefined}>
      <img src={`/assets/blog/${p.img}.webp`} alt="" width="254" height="175" loading="lazy" />
      <h3>{p.title}</h3>
      <a className="link-arrow" href={`/blog/${p.slug}`} tabIndex={hidden ? -1 : undefined}>
        Read More
        <img src="/assets/icons/arrow-right-line.svg" alt="" width="24" height="24" />
      </a>
    </li>
  ))
}

export default function Resources() {
  return (
    <section className="resources" id="resources" aria-labelledby="resources-title">
      <div className="container">
        <SectionHeading id="resources-title" lines={['Featured', 'Resources']} center />
      </div>
      <div className="resources__marquee">
        <ul className="resources__track">
          <PostSet />
          <PostSet hidden />
        </ul>
      </div>
    </section>
  )
}
