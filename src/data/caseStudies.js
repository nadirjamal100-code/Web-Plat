// Case studies shown on #/case-studies.
// PLACEHOLDER CONTENT: client names, figures and quotes are sample copy. Replace them with your real projects.
// img = optional photo from public/assets/case-studies; without one the card gets a coloured cover with an icon.

export const categories = [
  { id: 'all', label: 'All projects' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'UI/UX' },
  { id: 'cloud', label: 'Cloud & DevOps' },
]

export const caseStudies = [
  {
    slug: 'scfc-canada',
    client: 'SCFC Canada',
    title: 'A faster, clearer website for a freight forwarder',
    category: 'web',
    industry: 'Shipping & logistics',
    img: 'case-1',
    icon: 'code',
    tile: 'linear-gradient(226deg, #67e0f7 0%, #4d96ec 100%)',
    summary:
      'Swift Clearance and Forwarding Corp. had two decades of experience but a dated website that hid it. We rebuilt it around what shippers actually look for: services, tracking and a fast way to get a quote.',
    challenge: 'A slow, hard-to-navigate site that did not reflect the company’s experience or generate enquiries.',
    solution: 'A new information structure, a quote form on every page, and a lightweight React front end with strong SEO.',
    results: [
      { value: '+68%', label: 'Quote requests' },
      { value: '2.1s', label: 'Page load time' },
      { value: '92', label: 'Lighthouse SEO' },
    ],
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    featured: true,
  },
  {
    slug: 'fleetgo-app',
    client: 'FleetGo',
    title: 'Driver app that keeps deliveries on schedule',
    category: 'mobile',
    industry: 'Logistics',
    img: 'case-2',
    icon: 'mobile-app',
    tile: 'linear-gradient(226deg, #ff97b3 0%, #ff3a9d 100%)',
    summary: 'A cross-platform app that gives drivers routes, proof of delivery and live status in one place.',
    challenge: 'Drivers juggled calls, paper slips and three different apps, so deliveries were late and hard to track.',
    solution: 'One React Native app with offline mode, photo proof of delivery and real-time updates for dispatchers.',
    results: [
      { value: '-35%', label: 'Late deliveries' },
      { value: '4.8★', label: 'Store rating' },
      { value: '12k', label: 'Active drivers' },
    ],
    tech: ['React Native', 'Firebase', 'Node.js'],
  },
  {
    slug: 'medibook-portal',
    client: 'MediBook',
    title: 'Appointment portal patients actually enjoy using',
    category: 'design',
    industry: 'Healthcare',
    img: 'case-3',
    icon: 'heart-rate',
    tile: 'linear-gradient(226deg, #ffe468 0%, #f99a6c 100%)',
    summary: 'A research-led redesign of a clinic booking portal, from first interviews to a tested design system.',
    challenge: 'Patients abandoned booking halfway, and staff spent hours rebooking by phone.',
    solution: 'User research, a simpler three-step flow, accessible components and usability testing before any code.',
    results: [
      { value: '+41%', label: 'Completed bookings' },
      { value: '-52%', label: 'Phone rebookings' },
      { value: 'AA', label: 'Accessibility level' },
    ],
    tech: ['Figma', 'React', 'Storybook'],
  },
  {
    slug: 'shopnest-store',
    client: 'ShopNest',
    title: 'E-commerce store ready for sale-day traffic',
    category: 'web',
    industry: 'E-commerce',
    icon: 'dashboard',
    tile: 'linear-gradient(226deg, #67e9f1 0%, #24e795 100%)',
    summary: 'A headless store with a fast checkout, built to stay up when a promotion sends ten times the usual visitors.',
    challenge: 'The old store slowed to a crawl during sales and lost orders at checkout.',
    solution: 'A headless storefront, cached product pages and a streamlined one-page checkout.',
    results: [
      { value: '+27%', label: 'Conversion rate' },
      { value: '10x', label: 'Peak traffic handled' },
      { value: '1.4s', label: 'Largest paint' },
    ],
    tech: ['Next.js', 'Shopify', 'Stripe'],
  },
  {
    slug: 'paysphere-cloud',
    client: 'PaySphere',
    title: 'From monthly releases to deploying every day',
    category: 'cloud',
    industry: 'Fintech',
    icon: 'shield',
    tile: 'linear-gradient(226deg, #f76680 0%, #5a0a80 100%)',
    summary: 'We moved a payments platform to automated pipelines and managed Kubernetes, with security checks built in.',
    challenge: 'Manual, risky releases once a month and no clear view of costs or outages.',
    solution: 'CI/CD pipelines, infrastructure as code, monitoring and alerting, and a cost review.',
    results: [
      { value: '10x', label: 'Faster deployments' },
      { value: '99.95%', label: 'Uptime' },
      { value: '-30%', label: 'Cloud costs' },
    ],
    tech: ['AWS', 'Kubernetes', 'Terraform'],
  },
  {
    slug: 'learnly-platform',
    client: 'Learnly',
    title: 'A learning platform built by a dedicated team',
    category: 'web',
    industry: 'Education',
    icon: 'rocket',
    tile: '#27262b',
    summary: 'A dedicated squad of six engineers and a designer took Learnly from prototype to 200,000 learners.',
    challenge: 'A small in-house team could not keep up with the roadmap and hiring was slow.',
    solution: 'A dedicated product squad working in the client’s tools, with weekly demos and shared ownership.',
    results: [
      { value: '200k', label: 'Learners onboarded' },
      { value: '2 wks', label: 'Time to start' },
      { value: '3 yrs', label: 'Team still together' },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
]

export const impact = [
  { value: '150+', label: 'Projects delivered' },
  { value: '98%', label: 'Client retention' },
  { value: '12', label: 'Industries served' },
  { value: '4.9★', label: 'Average client rating' },
]

export const quote = {
  text: 'They behaved like part of our own team. Releases got calmer, the product got better and we finally stopped worrying about the roadmap.',
  name: 'Sample Client',
  role: 'Head of Product, FleetGo',
}
