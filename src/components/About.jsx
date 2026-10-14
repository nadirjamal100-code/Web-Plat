import { useEffect, useRef, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  const videoRef = useRef(null)
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)

  // Autoplay (muted, looping) whenever the video is on screen; pause when scrolled away.
  // Skipped for visitors who prefer reduced motion, and when the visitor paused it themselves.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduceMotion && !userPaused.current) {
          v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      userPaused.current = false
      v.play().catch(() => {})
    } else {
      userPaused.current = true
      v.pause()
    }
  }

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <span className="about__glow" aria-hidden="true" />
      <span className="dot dot--b" aria-hidden="true" />
      <div className="container about__grid">
        <div className="about__text">
          <SectionHeading id="about-title" lines={['Leading companies trust us', 'to develop software']} />
          <p>
            We <span className="accent-text">add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally
            distributed across the project lifecycle. We are a custom software development company that guarantees the
            successful delivery of your project.
          </p>
          <a className="link-arrow" href="/about">
            See more Informations
            <img src="/assets/icons/arrow-right-line.svg" alt="" width="24" height="24" />
          </a>
        </div>
        <div className={`about__video ${playing ? 'is-playing' : ''}`}>
          <video
            ref={videoRef}
            className="about__media"
            poster="/assets/about-video.webp"
            muted
            loop
            playsInline
            preload="none"
            aria-label="Our team collaborating around a laptop"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onClick={toggle}
          >
            {/* 1) your own file if you add one, 2-3) free Mixkit clip "Office meeting" (https://mixkit.co/free-stock-video/office-meeting-261/) */}
            <source src="/assets/about-video.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/261/261-720.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/261/261-360.mp4" type="video/mp4" />
          </video>
          <button type="button" className="about__play" aria-label={playing ? 'Pause company video' : 'Play company video'} aria-pressed={playing} onClick={toggle}>
            <span className="about__play-ring" />
            <span className="about__play-core">
              {playing ? <span className="about__pause" /> : <img src="/assets/icons/play.svg" alt="" width="58" height="58" />}
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
