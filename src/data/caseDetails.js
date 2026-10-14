// Long-form content for each single case study page (#/case-studies/<slug>), keyed by slug.
// PLACEHOLDER CONTENT: all of it is sample copy. Replace it with your real project stories.
// The short card content (title, summary, results, tech) lives in caseStudies.js.

export const caseDetails = {
  'scfc-canada': {
    facts: { Client: 'SCFC Canada', Industry: 'Shipping & logistics', Timeline: '10 weeks', Team: '5 people', Platform: 'Website' },
    intro: [
      'Swift Clearance and Forwarding Corp. has more than 20 years of experience in shipping and freight forwarding. Its old website did not show it: pages were slow, services were hard to find, and enquiries arrived by phone far more often than through the site.',
      'We were asked to build a website that matches the confidence of the company: quick to load, easy to scan, and designed around the one action that matters most, asking for a quote.',
    ],
    challenge: [
      'Visitors left before they found the service they needed. The site took over six seconds to load on mobile, the menu had 24 links, and the quote form sat three clicks deep.',
      'The team also relied on a developer for every small text change, which meant updates were rare and the content went stale.',
    ],
    approach: [
      { title: 'Audit & research', text: 'We reviewed analytics, interviewed sales staff and mapped what shippers search for most.' },
      { title: 'Structure & design', text: 'Twenty-four menu items became six. A quote form now appears on every page.' },
      { title: 'Build', text: 'A lightweight React front end with a simple content system the team can edit themselves.' },
      { title: 'Launch & tune', text: 'Redirects protected search rankings, and we tuned speed and forms for a month after launch.' },
    ],
    highlights: [
      { title: 'Quote in under a minute', text: 'A short, smart form asks only what a freight quote needs and confirms by email instantly.' },
      { title: 'Built for speed', text: 'Optimised images, code splitting and caching brought the page load from six seconds to about two.' },
      { title: 'Easy content updates', text: 'Staff edit services, news and office details without needing a developer.' },
    ],
    outcome:
      'Within three months of launch the site was generating almost seven in ten more quote requests, and the sales team reported better-qualified enquiries because visitors now understood the services before getting in touch.',
    quote: { text: 'The new site finally shows who we are. Enquiries are up and our team spends less time answering basic questions.', name: 'Sample Client', role: 'Operations Director, SCFC Canada' },
  },
  'fleetgo-app': {
    facts: { Client: 'FleetGo', Industry: 'Logistics', Timeline: '16 weeks', Team: '6 people', Platform: 'iOS & Android' },
    intro: [
      'FleetGo coordinates thousands of last-mile deliveries every day. Dispatchers could see where vehicles were, but drivers worked from phone calls, paper slips and several unconnected apps.',
      'We built a single driver app that puts the route, the customer details and the proof of delivery in one place, and updates dispatchers in real time.',
    ],
    challenge: [
      'Late deliveries were hard to explain because nobody had a single, reliable record of what happened on the road.',
      'Drivers often worked in areas with weak signal, so any solution had to keep working offline.',
    ],
    approach: [
      { title: 'Ride-alongs', text: 'We spent days with drivers to see where the current process broke down.' },
      { title: 'Prototype', text: 'A clickable prototype was tested with twelve drivers before development began.' },
      { title: 'Build & pilot', text: 'React Native app, offline-first, piloted with one depot before a wider rollout.' },
      { title: 'Roll out', text: 'Training videos, in-app tips and a support channel helped every depot switch smoothly.' },
    ],
    highlights: [
      { title: 'Offline-first', text: 'Routes and delivery steps work without signal and sync as soon as the phone reconnects.' },
      { title: 'Photo proof of delivery', text: 'One tap captures photo, time and location, which resolves most disputes immediately.' },
      { title: 'Live dispatcher view', text: 'Status changes appear on the dispatcher dashboard within seconds.' },
    ],
    outcome:
      'Late deliveries fell by more than a third in the first quarter, the app holds a 4.8 star rating, and it now supports around twelve thousand active drivers.',
    quote: { text: 'They behaved like part of our own team. Releases got calmer and the product got better every sprint.', name: 'Sample Client', role: 'Head of Product, FleetGo' },
  },
  'medibook-portal': {
    facts: { Client: 'MediBook', Industry: 'Healthcare', Timeline: '12 weeks', Team: '4 people', Platform: 'Web portal' },
    intro: [
      'MediBook runs an online booking portal for a network of clinics. The portal worked, but patients struggled with it, and many gave up halfway through booking.',
      'We led a research-driven redesign, from the first interviews to a tested design system and a rebuilt front end.',
    ],
    challenge: [
      'More than half of patients who began booking never finished, and staff spent hours rebooking by phone.',
      'The portal also had to be accessible to older patients and people using assistive technology.',
    ],
    approach: [
      { title: 'Research', text: 'Interviews with patients and reception staff showed where people got stuck.' },
      { title: 'Simplify', text: 'A nine-step flow became three, with clearer labels and fewer choices at each step.' },
      { title: 'Design system', text: 'Accessible components documented in Storybook for consistent future work.' },
      { title: 'Test & refine', text: 'Five usability sessions per round, refining the design until tasks took under two minutes.' },
    ],
    highlights: [
      { title: 'Three-step booking', text: 'Choose a service, pick a time, confirm. Reminders and rescheduling are built in.' },
      { title: 'Accessible by design', text: 'Meets WCAG AA, with large touch targets, clear contrast and full keyboard support.' },
      { title: 'Reusable design system', text: 'Components and guidelines let MediBook’s own team ship new screens consistently.' },
    ],
    outcome:
      'Completed bookings rose by about forty percent, phone rebookings halved, and the portal reached the AA accessibility level.',
    quote: { text: 'Patients tell us it is finally easy. Our front desk has far fewer calls to handle.', name: 'Sample Client', role: 'Clinic Manager, MediBook' },
  },
  'shopnest-store': {
    facts: { Client: 'ShopNest', Industry: 'E-commerce', Timeline: '14 weeks', Team: '6 people', Platform: 'Web store' },
    intro: [
      'ShopNest sells home goods online and runs big promotions several times a year. Each sale sent traffic far above normal, and the old store struggled to cope.',
      'We rebuilt it as a headless storefront that stays fast under pressure and makes checking out as simple as possible.',
    ],
    challenge: [
      'During sales the site slowed down, pages timed out, and shoppers abandoned their carts.',
      'The checkout had six steps and a mandatory account, which added friction on every order.',
    ],
    approach: [
      { title: 'Load testing', text: 'We recreated sale-day traffic to find exactly where the old store broke.' },
      { title: 'Headless build', text: 'A fast Next.js storefront on top of the existing Shopify catalogue.' },
      { title: 'New checkout', text: 'One page, guest checkout and saved payment options through Stripe.' },
      { title: 'Rehearse & launch', text: 'A full sale-day rehearsal confirmed the new store coped with ten times normal traffic.' },
    ],
    highlights: [
      { title: 'Fast everywhere', text: 'Cached product pages and optimised images load the largest content in about 1.4 seconds.' },
      { title: 'One-page checkout', text: 'Guest checkout and digital wallets cut the steps to buy from six to one.' },
      { title: 'Ready for peak days', text: 'Autoscaling and caching absorbed ten times the usual traffic without slowing down.' },
    ],
    outcome:
      'The next big sale handled ten times normal traffic with no downtime, and the conversion rate rose by over a quarter.',
    quote: { text: 'Our biggest sale day went smoothly for the first time ever. Customers noticed how fast checkout felt.', name: 'Sample Client', role: 'E-commerce Lead, ShopNest' },
  },
  'paysphere-cloud': {
    facts: { Client: 'PaySphere', Industry: 'Fintech', Timeline: '5 months', Team: '4 people', Platform: 'Cloud infrastructure' },
    intro: [
      'PaySphere processes online payments for small businesses. Reliability and security are essential, but releases were manual, infrequent and stressful.',
      'We introduced automated pipelines, infrastructure as code and monitoring, so the team could release safely every day.',
    ],
    challenge: [
      'Deployments happened once a month and took a full day, with a long checklist that people sometimes missed.',
      'Costs were rising and there was no clear picture of which services drove them.',
    ],
    approach: [
      { title: 'Assess', text: 'We mapped the existing infrastructure, release steps, risks and monthly costs.' },
      { title: 'Automate', text: 'CI/CD pipelines with automated tests and security scans replaced manual steps.' },
      { title: 'Migrate', text: 'Services moved to managed Kubernetes in stages, each with a rollback plan.' },
      { title: 'Operate', text: 'Dashboards, alerts and a regular cost review keep everything healthy and efficient.' },
    ],
    highlights: [
      { title: 'Daily deployments', text: 'Every change is tested and scanned automatically before it reaches customers.' },
      { title: 'Infrastructure as code', text: 'Environments are defined in Terraform, so they are identical and easy to rebuild.' },
      { title: 'Costs under control', text: 'Right-sizing and autoscaling reduced the monthly cloud bill by about thirty percent.' },
    ],
    outcome:
      'PaySphere now deploys many times a week instead of monthly, runs at 99.95 percent uptime, and spends about a third less on cloud services.',
    quote: { text: 'Releases used to be an event we dreaded. Now they are routine, and we have time to build new things.', name: 'Sample Client', role: 'CTO, PaySphere' },
  },
  'learnly-platform': {
    facts: { Client: 'Learnly', Industry: 'Education', Timeline: 'Ongoing, 3 years', Team: '7 people', Platform: 'Web platform' },
    intro: [
      'Learnly offers online courses to professionals. With a small in-house team and an ambitious roadmap, it needed to grow engineering capacity quickly without a long hiring process.',
      'We assembled a dedicated squad of six engineers and a designer who joined in two weeks and have worked alongside Learnly’s own staff ever since.',
    ],
    challenge: [
      'Hiring took months, and the roadmap kept slipping while the small team handled support and new features at once.',
      'Learnly wanted people who would stay, learn the product deeply and take ownership.',
    ],
    approach: [
      { title: 'Match the team', text: 'We selected engineers by skill and by fit with Learnly’s culture and tools.' },
      { title: 'Onboard fast', text: 'Within two weeks the squad had repository access, context and its first tickets.' },
      { title: 'Ship every sprint', text: 'Daily standups and weekly demos kept delivery predictable and visible.' },
      { title: 'Grow together', text: 'Regular reviews adjusted the team size and focus as the product evolved.' },
    ],
    highlights: [
      { title: 'Part of the team', text: 'Working in Learnly’s Slack, Jira and repositories, with shared goals and rituals.' },
      { title: 'Scalable capacity', text: 'The squad grew from three to seven people as the roadmap expanded.' },
      { title: 'Lasting knowledge', text: 'Most of the original engineers are still on the project three years later.' },
    ],
    outcome:
      'The platform has grown from a prototype to more than two hundred thousand learners, and the roadmap now ships on schedule.',
    quote: { text: 'It feels like one team. We got the capacity we needed without the hiring headache.', name: 'Sample Client', role: 'Co-founder, Learnly' },
  },
}
