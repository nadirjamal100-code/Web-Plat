import { Logo } from './Header.jsx'
import { EMAIL, PHONE, PHONE_DISPLAY } from '../data/contact.js'

const links = ['About Us', 'Services', 'Case Studies', 'How it works', 'Blog', 'Careers', 'Areas We Serve']
const hrefs = ['/about', '#services', '/case-studies', '/how-it-works', '/blog', '/contact', '/contact']

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <img src="/assets/google-page-speed.webp" alt="Google PageSpeed Insights badge" width="199" height="53" loading="lazy" />
        </div>
        <nav className="footer__col" aria-label="Footer links">
          <h3>Links</h3>
          <ul>
            {links.map((l, i) => (
              <li key={l}><a href={hrefs[i]}>{l}</a></li>
            ))}
          </ul>
        </nav>
        <div className="footer__col footer__contact">
          <h3>Contact us</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <ul className="footer__social" aria-label="Social media">
          {[1, 2, 3, 4].map((n, i) => (
            <li key={n}>
              <a href="#top" aria-label={['Facebook', 'Instagram', 'Twitter', 'LinkedIn'][i]}>
                <img src={`/assets/icons/social-${n}.svg`} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__bottom">
        <p>© 2026 Copyright by Hi Developers. All rights reserved.</p>
      </div>
    </footer>
  )
}
