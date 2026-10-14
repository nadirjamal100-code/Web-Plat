import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import PostCover from '../components/PostCover.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { authors, blogCategories, formatDate, posts } from '../data/posts.js'

const labelOf = (id) => blogCategories.find((c) => c.id === id)?.label ?? id

function Meta({ post }) {
  return (
    <p className="bl-meta">
      <span>{authors[post.author].name}</span>
      <span aria-hidden="true">·</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readTime} min read</span>
    </p>
  )
}

export default function BlogPage() {
  const [filter, setFilter] = useState('all')
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const list = posts.filter((p) => p !== featured && (filter === 'all' || p.category === filter))

  return (
    <div className="bl-page">
      {/* ---------- Hero ---------- */}
      <section className="ap-hero" aria-labelledby="bl-title">
        <span className="ap-hero__glow" aria-hidden="true" />
        <div className="container">
          <nav className="ap-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Blog</span>
          </nav>
          <div className="ap-hero__grid">
            <div className="ap-hero__text">
              <span className="section-heading__line" aria-hidden="true" />
              <h1 id="bl-title">
                <span className="ap-light">Ideas, guides and</span>
                <br />
                <span className="ap-bold">
                  lessons from the <span className="gradient-text">field</span>
                </span>
              </h1>
              <p className="ap-hero__lead">
                Practical articles from our engineers, designers and delivery leads on building, launching and scaling
                software products.
              </p>
              <div className="ap-hero__actions">
                <a className="btn btn--hero" href={`/blog/${featured.slug}`}>Read the latest</a>
                <a className="link-arrow" href="/case-studies">
                  See our work
                  <img src="/assets/icons/arrow-right-line.svg" alt="" width="24" height="24" />
                </a>
              </div>
            </div>
            <div className="ap-hero__media">
              <div className="sp-art" aria-hidden="true" style={{ '--tile': 'linear-gradient(226deg, #ffe468 0%, #f76680 100%)' }}>
                <span className="sp-art__glow" />
                <span className="sp-art__ring sp-art__ring--1" />
                <span className="sp-art__ring sp-art__ring--2" />
                <span className="sp-art__core">
                  <img src="/assets/icons/star.webp" alt="" width="96" height="96" />
                </span>
                <span className="sp-chip sp-chip--1">Cloud</span>
                <span className="sp-chip sp-chip--2">Design</span>
                <span className="sp-chip sp-chip--3">Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Featured ---------- */}
      <section className="bl-featured" aria-labelledby="bl-featured-title">
        <div className="container container--wide">
          <SectionHeading id="bl-featured-title" lines={['Featured', 'article']} center />
          <a className="bl-feature" href={`/blog/${featured.slug}`}>
            <PostCover post={featured} className="bl-feature__cover" priority />
            <div className="bl-feature__body">
              <span className="cs-tag">{labelOf(featured.category)}</span>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <Meta post={featured} />
              <span className="bl-readmore">
                <span className="gradient-text">Read the article</span>
                <img src="/assets/icons/chevron-purple.svg" alt="" width="11" height="16" />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ---------- All posts ---------- */}
      <section className="bl-all" aria-labelledby="bl-all-title">
        <div className="container container--wide">
          <SectionHeading id="bl-all-title" lines={['Latest', 'from the blog']} center />
          <div className="cs-filters" role="group" aria-label="Filter articles by topic">
            {blogCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`cs-filter ${filter === c.id ? 'is-active' : ''}`}
                aria-pressed={filter === c.id}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <p className="cs-empty">No other articles on this topic yet. <button type="button" onClick={() => setFilter('all')}>Show all posts</button></p>
          ) : (
            <ul className="bl-grid">
              {list.map((p) => (
                <li key={p.slug} className="bl-card">
                  <a href={`/blog/${p.slug}`}>
                    <PostCover post={p} className="bl-card__cover" />
                    <div className="bl-card__body">
                      <span className="cs-tag">{labelOf(p.category)}</span>
                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
                      <Meta post={p} />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
