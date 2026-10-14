// The home page sections below the first screen. Loaded on demand from App.jsx (code splitting).
import About from '../components/About.jsx'
import Clients from '../components/Clients.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import WayOfBuilding from '../components/WayOfBuilding.jsx'
import Approach from '../components/Approach.jsx'
import TechStack from '../components/TechStack.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Resources from '../components/Resources.jsx'
import CtaBanner from '../components/CtaBanner.jsx'

export default function HomeRest() {
  return (
    <>
      <About />
      <Clients />
      <Testimonials />
      <CaseStudies />
      <WayOfBuilding />
      <Approach />
      <TechStack />
      <HowItWorks />
      <Resources />
      <CtaBanner />
    </>
  )
}
