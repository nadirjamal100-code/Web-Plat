// Extra, longer content for each service page, keyed by slug (see services.js for the basics).
// All of it is sample copy: edit it to match what you really offer.

export const details = {
  'web-design-development': {
    overview: [
      'Your website is often the first conversation a customer has with your company. We build sites and web applications that load quickly, work on every device and make the next step obvious, whether that is a purchase, a booking or a sign-up.',
      'Our team covers the whole journey: strategy, design, front-end and back-end engineering, content management, hosting and ongoing care. You get one accountable partner instead of five suppliers.',
    ],
    stats: [
      { value: '90+', label: 'Lighthouse score target' },
      { value: '120+', label: 'Websites launched' },
      { value: '2 wks', label: 'Typical time to first demo' },
    ],
    offerings: [
      { title: 'Corporate websites', text: 'Brand-led sites that explain what you do and build trust fast.' },
      { title: 'E-commerce stores', text: 'Shopify, WooCommerce and custom stores with smooth checkout.' },
      { title: 'Web applications', text: 'Dashboards, portals and SaaS products built to scale.' },
      { title: 'CMS & headless builds', text: 'Easy content editing without sacrificing speed or design.' },
      { title: 'API & integrations', text: 'Connect payments, CRMs, ERPs and third-party services.' },
      { title: 'SEO & performance', text: 'Technical SEO, Core Web Vitals and accessibility built in.' },
    ],
    faqs: [
      { q: 'How long does a website project take?', a: 'A typical marketing site takes 6 to 10 weeks. Larger web applications are planned in phases, with something usable in your hands every two weeks.' },
      { q: 'Will I be able to edit the content myself?', a: 'Yes. We set up a content management system that suits your team and train you to use it.' },
      { q: 'Do you provide hosting and maintenance?', a: 'We can host, monitor and update your site after launch, or hand everything over to your own team with full documentation.' },
      { q: 'Can you redesign or rebuild an existing site?', a: 'Absolutely. We audit what you have, keep what works, and migrate content and search rankings safely.' },
    ],
  },
  'mobile-app-development': {
    overview: [
      'People spend most of their screen time in apps, so your app has to feel effortless from the first tap. We design and build mobile products that are fast, reliable and genuinely pleasant to use.',
      'Whether you need a native iOS or Android app, or one codebase for both, we help you choose the approach that fits your goals and budget, then take it all the way to the stores and beyond.',
    ],
    stats: [
      { value: '4.7★', label: 'Average store rating' },
      { value: '60+', label: 'Apps shipped' },
      { value: '99.9%', label: 'Crash-free sessions goal' },
    ],
    offerings: [
      { title: 'Native iOS apps', text: 'Swift and SwiftUI apps that feel right at home on Apple devices.' },
      { title: 'Native Android apps', text: 'Kotlin apps built on modern Android architecture.' },
      { title: 'Cross-platform apps', text: 'React Native and Flutter for one codebase and faster delivery.' },
      { title: 'Backend & APIs', text: 'Secure services, push notifications and real-time features.' },
      { title: 'App modernisation', text: 'Refresh, refactor or rebuild apps that have become slow or dated.' },
      { title: 'Store launch & growth', text: 'Listing, analytics, A/B tests and release automation.' },
    ],
    faqs: [
      { q: 'Native or cross-platform: which should I pick?', a: 'Cross-platform is usually quicker and cheaper for most products. Native is better for heavy graphics, deep hardware use or platform-specific polish. We will recommend one after a short discovery.' },
      { q: 'Can you build an MVP first?', a: 'Yes. We often launch a focused first version in 8 to 12 weeks, learn from real users, and then expand.' },
      { q: 'Who owns the code?', a: 'You do. All source code and designs are yours from day one.' },
      { q: 'Do you handle app store approval?', a: 'We prepare listings, privacy details and builds, and respond to any review feedback until the app is live.' },
    ],
  },
  'software-testing': {
    overview: [
      'Bugs found after launch cost many times more than bugs found during development. Our QA engineers join your team early, so quality is built in rather than checked at the end.',
      'We combine careful manual testing with reliable automation and performance checks, giving you clear reports and the confidence to release more often.',
    ],
    stats: [
      { value: '85%', label: 'Regression tests automated' },
      { value: '3x', label: 'Faster release cycles' },
      { value: '40%', label: 'Fewer production defects' },
    ],
    offerings: [
      { title: 'Functional testing', text: 'Systematic checks that every feature works as specified.' },
      { title: 'Automation testing', text: 'Maintainable UI and API suites that run on every change.' },
      { title: 'Performance testing', text: 'Load and stress tests to find limits before your users do.' },
      { title: 'Security testing', text: 'Vulnerability scans and checks against common attack types.' },
      { title: 'Mobile & cross-browser', text: 'Coverage across real devices, browsers and screen sizes.' },
      { title: 'Usability & accessibility', text: 'Make sure everyone can use your product with ease.' },
    ],
    faqs: [
      { q: 'Can you test a product that is already live?', a: 'Yes. We start with a risk review of your most important flows, then build coverage from there.' },
      { q: 'Do you work inside our sprints?', a: 'Yes. Our testers join standups, review tickets early and test within the same sprint.' },
      { q: 'Which tools do you use?', a: 'Mostly Cypress, Playwright, Selenium, Postman and JMeter, but we work with the tools your team already uses.' },
      { q: 'What do we receive at the end?', a: 'Clear test reports, a prioritised defect list, and automated suites you own and can run yourselves.' },
    ],
  },
  'dedicated-development-teams': {
    overview: [
      'Hiring great engineers is slow and uncertain. We give you a ready team of vetted developers, designers and QA who work as an extension of your company, in your tools and on your schedule.',
      'You set the direction, we take care of recruiting, equipment, management support and continuity, so the team stays productive for years, not months.',
    ],
    stats: [
      { value: '2 wks', label: 'Average time to start' },
      { value: '92%', label: 'Teams kept 2+ years' },
      { value: '60+', label: 'Engineers and designers' },
    ],
    offerings: [
      { title: 'Full-stack teams', text: 'Front-end, back-end, QA and a team lead, ready to ship.' },
      { title: 'Staff augmentation', text: 'Add one or two specialists to strengthen your existing team.' },
      { title: 'Product squads', text: 'Cross-functional squads that own a product from idea to release.' },
      { title: 'Technical leadership', text: 'Architects and tech leads to guide design and code quality.' },
      { title: 'Team scaling', text: 'Grow or shrink the team as your roadmap changes.' },
      { title: 'Knowledge transfer', text: 'Documentation and handover so nothing lives only in one head.' },
    ],
    faqs: [
      { q: 'How is this different from freelancers?', a: 'Our engineers are full-time, vetted and managed, so you get continuity, accountability and shared knowledge instead of one-off gigs.' },
      { q: 'Can we interview the developers?', a: 'Yes. You meet and approve every person before they join.' },
      { q: 'What is the minimum commitment?', a: 'Most teams start with a three-month engagement and continue month to month afterwards.' },
      { q: 'How do we communicate day to day?', a: 'In your Slack, Jira and repositories, with overlapping working hours and daily standups.' },
    ],
  },
  'ui-ux-design': {
    overview: [
      'Good design is more than good looks. It is understanding people, removing friction and making complex things feel simple. Our designers work hand in hand with engineers, so what is designed is what gets built.',
      'We start with research, test ideas early with real users, and finish with a system your team can extend long after the project ends.',
    ],
    stats: [
      { value: '35%', label: 'Average conversion uplift' },
      { value: '200+', label: 'Screens designed monthly' },
      { value: '5 days', label: 'Typical design sprint' },
    ],
    offerings: [
      { title: 'User research', text: 'Interviews, surveys and analytics to learn what people need.' },
      { title: 'Product design', text: 'End-to-end flows for web apps, mobile apps and SaaS products.' },
      { title: 'Website design', text: 'Landing pages and sites that tell your story and convert.' },
      { title: 'Design systems', text: 'Components, tokens and guidelines for consistent products.' },
      { title: 'Prototyping & testing', text: 'Clickable prototypes validated before development begins.' },
      { title: 'Brand & illustration', text: 'Logos, icons and illustrations that make you memorable.' },
    ],
    faqs: [
      { q: 'Can you work with our brand guidelines?', a: 'Yes. We follow your existing brand, or help you evolve it into something clearer and more modern.' },
      { q: 'Do you design for developers to build?', a: 'Yes. We deliver organised Figma files, specs and assets, and review the build with your developers.' },
      { q: 'How do you test designs?', a: 'With moderated usability tests and quick unmoderated studies, usually five users per round.' },
      { q: 'Can we start with a short design sprint?', a: 'Of course. A five-day sprint is a great way to move from an idea to a tested prototype.' },
    ],
  },
  'cloud-devops': {
    overview: [
      'Slow releases and surprise outages usually come from manual processes. We replace them with automated pipelines and infrastructure defined as code, so every release is repeatable and every environment is consistent.',
      'We also help you move to the cloud safely, keep costs under control, and set up monitoring that tells you about problems before your customers do.',
    ],
    stats: [
      { value: '10x', label: 'Faster deployments' },
      { value: '99.95%', label: 'Uptime targets' },
      { value: '30%', label: 'Typical cloud savings' },
    ],
    offerings: [
      { title: 'CI/CD pipelines', text: 'Automated builds, tests and zero-downtime releases.' },
      { title: 'Cloud migration', text: 'Lift, shift or re-architect to AWS, Azure or Google Cloud.' },
      { title: 'Infrastructure as code', text: 'Terraform and similar tools for repeatable environments.' },
      { title: 'Containers & Kubernetes', text: 'Docker and Kubernetes set up for reliability and scale.' },
      { title: 'Monitoring & alerting', text: 'Dashboards, logs and on-call alerts that cut through the noise.' },
      { title: 'Security & cost review', text: 'Hardening, access control and ongoing cost optimisation.' },
    ],
    faqs: [
      { q: 'Which cloud providers do you support?', a: 'AWS, Microsoft Azure and Google Cloud, plus hybrid setups.' },
      { q: 'Will migration cause downtime?', a: 'We plan migrations in stages with rollback options, aiming for no visible downtime.' },
      { q: 'Can you take over day-to-day operations?', a: 'Yes. We offer managed DevOps with on-call support, or train your team to run it themselves.' },
      { q: 'How do you keep cloud costs down?', a: 'Right-sizing, autoscaling, reserved capacity and regular cost reviews with clear reports.' },
    ],
  },
}

// Shared by every service page
export const engagementModels = [
  { title: 'Fixed scope', tag: 'Best for clear projects', text: 'An agreed scope, timeline and price. Ideal when requirements are well defined.', points: ['Fixed budget and dates', 'Milestone-based delivery', 'Minimal management from you'] },
  { title: 'Dedicated team', tag: 'Most popular', text: 'A team that works only for you, scaling up or down as your needs change.', points: ['Monthly billing', 'Full control of priorities', 'Long-term knowledge retention'] },
  { title: 'Time & materials', tag: 'Best for evolving needs', text: 'Pay for the effort used. Flexible when scope will change as you learn.', points: ['Start within days', 'Change direction any sprint', 'Transparent weekly reports'] },
]

export const industries = [
  'Healthcare', 'Fintech', 'E-commerce', 'Education', 'Logistics', 'Real estate', 'Travel', 'Media & entertainment',
]
