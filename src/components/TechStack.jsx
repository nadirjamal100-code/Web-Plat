import { useRef, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'

// Logos come from the open-source Devicon set. Each logo tries several variants (wordmark first) on two CDNs,
// so an image is always shown; text is never used as a fallback.
const VARIANTS = ['original-wordmark', 'plain-wordmark', 'original', 'plain']
const HOSTS = [
  (slug, v) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${v}.svg`,
  (slug, v) => `https://unpkg.com/devicon/icons/${slug}/${slug}-${v}.svg`,
]
const dev = (slug, first) => ({
  slug,
  order: first ? [first, ...VARIANTS.filter((v) => v !== first)] : VARIANTS,
})
const candidates = (slug, order) => HOSTS.flatMap((host) => order.map((v) => host(slug, v)))

const local = (file) => `/assets/tech/${file}`

// Each tab has two rows of logos: [name, src, options]
const sets = {
  Backend: {
    row1: [
      ['Node.js', local('node.svg')],
      ['PHP', local('php.svg')],
      ['MySQL', local('mysql.webp')],
      ['Java', local('java.svg')],
      ['.NET Core', local('netcore.svg')],
    ],
    row2: [
      ['Python', local('python.svg')],
      ['Ruby on Rails', local('rails.svg')],
      ['Go', local('go.svg')],
      ['MongoDB', local('mongodb.webp'), { wide: true }],
    ],
  },
  Frontend: {
    row1: [
      ['React', dev('react')],
      ['Angular', dev('angular')],
      ['Vue.js', dev('vuejs')],
      ['Next.js', dev('nextjs')],
      ['TypeScript', dev('typescript', 'original')],
    ],
    row2: [
      ['JavaScript', dev('javascript', 'original')],
      ['HTML5', dev('html5')],
      ['CSS3', dev('css3')],
      ['Tailwind CSS', dev('tailwindcss')],
    ],
  },
  Databases: {
    row1: [
      ['PostgreSQL', dev('postgresql')],
      ['MySQL', local('mysql.webp')],
      ['MongoDB', local('mongodb.webp')],
      ['Redis', dev('redis')],
      ['SQLite', dev('sqlite')],
    ],
    row2: [
      ['Oracle', dev('oracle')],
      ['MariaDB', dev('mariadb')],
      ['Cassandra', dev('cassandra')],
      ['Elasticsearch', dev('elasticsearch')],
    ],
  },
  CMS: {
    row1: [
      ['WordPress', dev('wordpress')],
      ['Drupal', dev('drupal')],
      ['Joomla', dev('joomla')],
    ],
    row2: [
      ['Magento', dev('magento')],
      ['Ghost', dev('ghost')],
      ['Strapi', dev('strapi')],
    ],
  },
  CloudTesting: {
    row1: [
      ['Selenium', dev('selenium')],
      ['Cypress', dev('cypressio')],
      ['Jest', dev('jest', 'plain-wordmark')],
      ['Postman', dev('postman')],
      ['Mocha', dev('mocha', 'original')],
    ],
    row2: [
      ['AWS', dev('amazonwebservices')],
      ['Azure', dev('azure')],
      ['Google Cloud', dev('googlecloud')],
      ['Firebase', dev('firebase')],
    ],
  },
  DevOps: {
    row1: [
      ['Docker', dev('docker')],
      ['Kubernetes', dev('kubernetes')],
      ['Jenkins', dev('jenkins')],
      ['GitHub Actions', dev('githubactions')],
      ['Terraform', dev('terraform')],
    ],
    row2: [
      ['Ansible', dev('ansible')],
      ['GitLab', dev('gitlab')],
      ['Linux', dev('linux')],
      ['Nginx', dev('nginx')],
    ],
  },
}

const tabs = Object.keys(sets)

function Logo({ name, src, wide = false }) {
  const isCdn = typeof src === 'object'
  const list = isCdn ? candidates(src.slug, src.order) : [src]
  const [i, setI] = useState(0)
  if (i >= list.length) return null // every source failed: leave the slot empty rather than show text
  const cls = [isCdn ? 'tech__logo--cdn' : '', wide ? 'tech__logo--wide' : ''].filter(Boolean).join(' ') || undefined
  return <img className={cls} src={list[i]} alt={name} loading="lazy" onError={() => setI((n) => n + 1)} />
}

export default function TechStack() {
  const [tab, setTab] = useState('Backend')
  const tabRefs = useRef({})
  const { row1, row2 } = sets[tab]

  // Arrow keys / Home / End move between tabs (standard tab-list behaviour).
  const onKeyDown = (e) => {
    const i = tabs.indexOf(tab)
    let next = null
    if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length]
    else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length]
    else if (e.key === 'Home') next = tabs[0]
    else if (e.key === 'End') next = tabs[tabs.length - 1]
    if (next) {
      e.preventDefault()
      setTab(next)
      tabRefs.current[next]?.focus()
    }
  }

  return (
    <section className="tech" aria-labelledby="tech-title">
      <div className="container">
        <SectionHeading id="tech-title" lines={['Our', 'Tech Stack']} center />
        <div className="tech__tabs" role="tablist" aria-label="Technology categories" onKeyDown={onKeyDown}>
          {tabs.map((t) => (
            <button
              key={t}
              ref={(el) => { tabRefs.current[t] = el }}
              type="button"
              role="tab"
              id={`tech-tab-${t}`}
              aria-selected={tab === t}
              aria-controls="tech-panel"
              tabIndex={tab === t ? 0 : -1}
              className={tab === t ? 'is-active' : ''}
              onClick={() => setTab(t)}
            >
              <span className={tab === t ? 'gradient-text' : ''}>{t}</span>
            </button>
          ))}
        </div>
        <div className="tech__logos" key={tab} id="tech-panel" role="tabpanel" aria-labelledby={`tech-tab-${tab}`}>
          <ul className="tech__row">
            {row1.map(([n, src, o]) => (
              <li key={n}><Logo name={n} src={src} wide={o?.wide} /></li>
            ))}
          </ul>
          <ul className="tech__row tech__row--2">
            {row2.map(([n, src, o]) => (
              <li key={n}><Logo name={n} src={src} wide={o?.wide} /></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
