import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import PostCover from '../components/PostCover.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import { authors, blogCategories, formatDate, getPost, posts } from '../data/posts.js'
import { postBodies } from '../data/postBodies.js'

const labelOf = (id) => blogCategories.find((c) => c.id === id)?.label ?? id
const idOf = (text) => `sec-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`

function Block({ b }) {
  switch (b.type) {
    case 'h2':
      return <h2 id={idOf(b.text)} className="bp-h2">{b.text}</h2>
    case 'list':
      return (
        <ul className="bp-list">
          {b.items.map((i) => <li key={i}>{i}</li>)}
        </ul>
      )
    case 'quote':
      return <blockquote className="bp-quote">{b.text}</blockquote>
    case 'tip':
      return (
        <aside className="bp-tip">
          <strong>{b.title}</strong>
          <p>{b.text}</p>
        </aside>
      )
    default:
      return <p>{b.text}</p>
  }
}

export default function BlogPostPage({ slug }) {
  const [copied, setCopied] = useState(false)
  const index = posts.findIndex((p) => p.slug === slug)
  const post = posts[index]
  const body = postBodies[slug]
  if (!post || !body) return null

  const author = authors[post.author]
  const headings = body.filter((b) => b.type === 'h2')
  const prev = posts[(index - 1 + posts.length) % posts.length]
  const next = posts[(index + 1) % posts.length]
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3)
  const url = typeof window === 'undefined' ? '' : window.location.href
  const enc = encodeURIComponent

  // Table of contents uses buttons: normal #links would be read by the page router as navigation
  const jump = (text) => document.getElementById(idOf(text))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy this link', window.location.href)
    }
  }

  return (
    <div className="bp-page">
      {/* ---------- Header ---------- */}
      <section className="bp-hero" aria-labelledby="bp-title">
        <span className="ap-hero__glow" aria-hidden="true" />
        <div className="container bp-hero__inner">
          <nav className="ap-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/blog">Blog</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{labelOf(post.category)}</span>
          </nav>
          <span className="cs-tag bp-hero__tag">{labelOf(post.category)}</span>
          <h1 id="bp-title" className="bp-title">{post.title}</h1>
          <p className="bp-excerpt">{post.excerpt}</p>
          <div className="bp-byline">
            <span className="bp-avatar" aria-hidden="true">{author.name.split(' ').map((w) => w[0]).join('')}</span>
            <div>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
            <p className="bl-meta">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} min read</span>
            </p>
          </div>
        </div>
      </section>

      <div className="container bp-cover-wrap">
        <PostCover post={post} className="bp-cover" priority />
      </div>

      {/* ---------- Article ---------- */}
      <div className="container bp-layout">
        <article className="bp-article">
          {body.map((b, i) => <Block key={i} b={b} />)}

          <ul className="cs-tech bp-tags" aria-label="Topics">
            {post.tags.map((t) => <li key={t}>{t}</li>)}
          </ul>

          <div className="bp-share" role="group" aria-label="Share this article">
            <strong>Share</strong>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(post.title)}`} target="_blank" rel="noopener noreferrer">X</a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`} target="_blank" rel="noopener noreferrer">Facebook</a>
            <button type="button" onClick={copy}>{copied ? 'Link copied!' : 'Copy link'}</button>
          </div>

          <div className="bp-author">
            <span className="bp-avatar bp-avatar--lg" aria-hidden="true">{author.name.split(' ').map((w) => w[0]).join('')}</span>
            <div>
              <span className="bp-author__label">Written by</span>
              <strong>{author.name}</strong>
              <span className="bp-author__role">{author.role}</span>
              <p>{author.bio}</p>
            </div>
          </div>
        </article>

        <aside className="bp-aside">
          {headings.length > 0 && (
            <nav className="bp-toc" aria-label="In this article">
              <strong>In this article</strong>
              <ol>
                {headings.map((h) => (
                  <li key={h.text}>
                    <button type="button" onClick={() => jump(h.text)}>{h.text}</button>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <div className="bp-cta">
            <strong>Have a project in mind?</strong>
            <p>Tell us about it and we will reply within one working day.</p>
            <a className="btn btn--hero" href="#contact">Talk to us</a>
          </div>
        </aside>
      </div>

      {/* ---------- Previous / next ---------- */}
      <nav className="csd-pager" aria-label="More articles">
        <div className="container csd-pager__grid">
          <a className="csd-pager__link" href={`/blog/${prev.slug}`}>
            <span>← Previous article</span>
            <strong>{prev.title}</strong>
          </a>
          <a className="csd-pager__link csd-pager__link--next" href={`/blog/${next.slug}`}>
            <span>Next article →</span>
            <strong>{next.title}</strong>
          </a>
        </div>
      </nav>

      {/* ---------- Related ---------- */}
      <section className="bl-all" aria-labelledby="bp-related-title">
        <div className="container container--wide">
          <SectionHeading id="bp-related-title" lines={['Keep', 'reading']} center />
          <ul className="bl-grid bl-grid--three">
            {related.map((p) => (
              <li key={p.slug} className="bl-card">
                <a href={`/blog/${p.slug}`}>
                  <PostCover post={p} className="bl-card__cover" />
                  <div className="bl-card__body">
                    <span className="cs-tag">{labelOf(p.category)}</span>
                    <h3>{p.title}</h3>
                    <p className="bl-meta"><span>{p.readTime} min read</span></p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
