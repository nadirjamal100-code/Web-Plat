import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/variables.css'
import './styles/global.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/footer.css'
import './styles/about.css'
import './styles/responsive.css'
import './styles/services.css'
import './styles/casestudies.css'
import './styles/blog.css'
import './styles/howitworks.css'
import './styles/hire.css'
import './styles/contact.css'
import './styles/animations.css'
import './styles/bubbles.css'
import './styles/scrolltop.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
