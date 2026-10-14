// Content for the Services dropdown and the individual service pages (#/services/<slug>).
// The copy is sample text: edit it to match what you really offer.

export const TILES = {
  dark: '#27262b',
  blue: 'linear-gradient(226deg, #67e0f7 0%, #4d96ec 100%)',
  pink: 'linear-gradient(226deg, #ff97b3 0%, #ff3a9d 100%)',
  teal: 'linear-gradient(226deg, #67e9f1 0%, #24e795 100%)',
  yellow: 'linear-gradient(226deg, #ffe468 0%, #f99a6c 100%)',
  purple: 'linear-gradient(226deg, #f76680 0%, #5a0a80 100%)',
}

export const services = [
  {
    slug: 'web-design-development',
    title: 'Web Design & Development',
    short: 'Fast, accessible websites and web apps',
    icon: 'code',
    tile: TILES.blue,
    headline: ['Websites and web apps', 'built to perform'],
    lead: 'We design and build responsive, secure and lightning-fast websites and web applications that turn visitors into customers.',
    features: [
      { title: 'UX-first design', text: 'Designers lead every project, so interfaces are clear, accessible and consistent from the first wireframe to launch.' },
      { title: 'Performance by default', text: 'Optimised images, lean code and modern tooling deliver great page speed and strong search visibility.' },
      { title: 'Scalable architecture', text: 'Clean, modular code and cloud-ready infrastructure grow with your traffic and your roadmap.' },
    ],
    steps: [
      { title: 'Discover', text: 'Workshops to understand your goals, your users and your constraints.' },
      { title: 'Design', text: 'Wireframes and prototypes you can click through before we write code.' },
      { title: 'Build', text: 'Sprints with weekly demos, code reviews and automated tests.' },
      { title: 'Launch & grow', text: 'Release, monitoring and continuous improvement after go-live.' },
    ],
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'WordPress', 'Tailwind CSS'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    short: 'iOS and Android apps people love',
    icon: 'mobile-app',
    tile: TILES.pink,
    headline: ['Mobile apps your', 'users will love'],
    lead: 'From a first prototype to a polished release, we build native and cross-platform apps that feel fast, look great and scale with your user base.',
    features: [
      { title: 'iOS & Android', text: 'Native and cross-platform builds, chosen to fit your budget, timeline and performance needs.' },
      { title: 'Delightful experiences', text: 'Thoughtful navigation, smooth animation and offline-friendly behaviour keep users coming back.' },
      { title: 'Store-ready delivery', text: 'We handle testing, signing and submission so your app clears App Store and Google Play review.' },
    ],
    steps: [
      { title: 'Discover', text: 'We define the audience, the core features and what success looks like.' },
      { title: 'Prototype', text: 'Interactive prototypes validated with real users before development starts.' },
      { title: 'Build & test', text: 'Agile sprints with testing on real devices, not just simulators.' },
      { title: 'Release & support', text: 'Store launch, analytics and ongoing updates as your product grows.' },
    ],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
  },
  {
    slug: 'software-testing',
    title: 'Software Testing Service',
    short: 'QA, automation and performance testing',
    icon: 'dashboard',
    tile: TILES.teal,
    headline: ['Ship with confidence,', 'not crossed fingers'],
    lead: 'Our QA engineers catch problems before your users do, with manual, automated and performance testing built into every sprint.',
    features: [
      { title: 'Manual & exploratory testing', text: 'Experienced testers explore your product the way real users do and find what scripts miss.' },
      { title: 'Test automation', text: 'Reliable automated suites run on every change, so releases are faster and regressions are rare.' },
      { title: 'Performance & security checks', text: 'Load, stress and vulnerability testing show how your product behaves under real pressure.' },
    ],
    steps: [
      { title: 'Plan', text: 'We review requirements and agree on scope, risks and quality goals.' },
      { title: 'Design tests', text: 'Test cases and data are written to cover the journeys that matter most.' },
      { title: 'Execute & automate', text: 'Manual passes first, then automation for everything that repeats.' },
      { title: 'Report & improve', text: 'Clear reports and fixes tracked to closure, with lessons fed into the next sprint.' },
    ],
    tech: ['Selenium', 'Cypress', 'Playwright', 'Jest', 'Postman', 'JMeter'],
  },
  {
    slug: 'dedicated-development-teams',
    title: 'Dedicated Development Teams',
    short: 'Vetted engineers who join your team',
    icon: 'rocket',
    tile: TILES.dark,
    headline: ['A world-class team,', 'built around you'],
    lead: 'We help build and manage a team of world-class developers who follow your processes, work to your schedule and stay with you long term.',
    features: [
      { title: 'Vetted talent', text: 'Every engineer passes technical and communication screening before they join your team.' },
      { title: 'Flexible scaling', text: 'Add or reduce capacity as your roadmap changes, without long hiring cycles.' },
      { title: 'Managed delivery', text: 'We handle HR, equipment and day-to-day coordination so you can focus on the product.' },
    ],
    steps: [
      { title: 'Assemble the team', text: 'We match skills and experience to your project and your culture.' },
      { title: 'Onboard', text: 'Your team is set up with your tools, codebase and ways of working.' },
      { title: 'Sprint & ship', text: 'Standups and weekly demos keep delivery visible and predictable.' },
      { title: 'Review & grow', text: 'Regular reviews to adjust the team, the process and the roadmap.' },
    ],
    tech: ['React', 'Node.js', 'Python', 'Java', '.NET Core', 'AWS'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short: 'Research-led product and interface design',
    icon: 'heart-rate',
    tile: TILES.yellow,
    headline: ['Design that people', 'understand instantly'],
    lead: 'Research-led product design that turns complex ideas into simple, beautiful interfaces your users enjoy.',
    features: [
      { title: 'User research', text: 'Interviews, surveys and analytics reveal what your users really need before anything is drawn.' },
      { title: 'Interaction & visual design', text: 'Clear flows and polished visuals that make your brand feel confident and consistent.' },
      { title: 'Design systems', text: 'Reusable components and guidelines that keep design and code aligned as you grow.' },
    ],
    steps: [
      { title: 'Research', text: 'We learn your users, your market and your goals.' },
      { title: 'Wireframe', text: 'Structure and flows are mapped out and agreed before visual design.' },
      { title: 'Prototype & test', text: 'Clickable prototypes are tested with real users and refined.' },
      { title: 'Hand-off', text: 'Developer-ready specs and assets, with designers staying on to review the build.' },
    ],
    tech: ['Figma', 'FigJam', 'Storybook', 'Lottie', 'Maze', 'Zeplin'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    short: 'CI/CD, cloud migration and monitoring',
    icon: 'shield',
    tile: TILES.purple,
    headline: ['Reliable cloud', 'infrastructure at any scale'],
    lead: 'We automate your builds, deployments and infrastructure so you can release faster and sleep better.',
    features: [
      { title: 'CI/CD pipelines', text: 'Automated builds, tests and deployments take releases from days to minutes.' },
      { title: 'Cloud migration & cost control', text: 'Move to the cloud safely and keep your bill predictable as you scale.' },
      { title: 'Monitoring & security', text: 'Dashboards, alerts and hardened configurations keep your systems healthy and protected.' },
    ],
    steps: [
      { title: 'Assess', text: 'We review your current infrastructure, risks and costs.' },
      { title: 'Automate', text: 'Pipelines and infrastructure-as-code replace manual, error-prone steps.' },
      { title: 'Migrate', text: 'Workloads move in planned stages with rollback plans at every step.' },
      { title: 'Operate', text: 'Monitoring, alerting and regular tuning keep everything running smoothly.' },
    ],
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins'],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
