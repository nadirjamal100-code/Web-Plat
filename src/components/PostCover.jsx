// Cover for a blog post: the photo when there is one, otherwise a coloured illustration with the post's tags.
// Reuses the .cs-cover styles from casestudies.css.
export default function PostCover({ post, className = '', priority = false }) {
  if (post.img) {
    return (
      <img
        className={`cs-cover cs-cover--img ${className}`}
        src={`/assets/blog/${post.img}.webp`}
        alt=""
        width="254"
        height="175"
        loading={priority ? undefined : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
      />
    )
  }
  return (
    <div className={`cs-cover cs-cover--art ${className}`} style={{ '--tile': post.tile }} aria-hidden="true">
      <span className="cs-cover__ring" />
      <span className="cs-cover__core">
        <img src={`/assets/icons/${post.icon}.webp`} alt="" width="64" height="64" loading={priority ? undefined : 'lazy'} />
      </span>
      {post.tags.map((t, i) => (
        <span key={t} className={`cs-cover__chip cs-cover__chip--${i + 1}`}>{t}</span>
      ))}
    </div>
  )
}
