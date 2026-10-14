// Blog posts (card/listing info). The full article text lives in postBodies.js.
// PLACEHOLDER CONTENT: articles, authors and dates are sample copy written for this site. Replace them with your own.
// img = photo in public/assets/blog; posts without one get a coloured cover with an icon.

export const blogCategories = [
  { id: 'all', label: 'All posts' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'design', label: 'Design' },
  { id: 'business', label: 'Business' },
  { id: 'testing', label: 'Testing' },
  { id: 'mobile', label: 'Mobile' },
]

export const authors = {
  sara: { name: 'Sara Malik', role: 'Cloud Architect', bio: 'Sara designs and runs cloud platforms for fast-growing products, and enjoys making complicated systems simple.' },
  omar: { name: 'Omar Siddiqui', role: 'Lead Front-end Engineer', bio: 'Omar builds fast, accessible web apps with React and writes about what he learns along the way.' },
  hina: { name: 'Hina Raza', role: 'Head of Design', bio: 'Hina leads product design and research, helping teams learn what users really need before they build.' },
  ali: { name: 'Ali Hassan', role: 'Delivery Director', bio: 'Ali helps companies build and manage dedicated teams, and has set up more than forty of them.' },
  noor: { name: 'Noor Fatima', role: 'QA Lead', bio: 'Noor leads quality engineering and test automation, and believes the best bug is the one nobody ever sees.' },
  zain: { name: 'Zain Ahmed', role: 'Mobile Lead', bio: 'Zain has shipped iOS and Android apps for startups and enterprises, from first prototype to millions of users.' },
}

export const posts = [
  {
    slug: 'scale-to-one-million-users-on-aws',
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    excerpt: 'A practical, stage-by-stage guide to growing from your first hundred users to a million without rewriting everything.',
    category: 'cloud',
    date: '2026-10-08',
    readTime: 9,
    author: 'sara',
    img: 'blog-1',
    icon: 'shield',
    tile: 'linear-gradient(226deg, #f76680 0%, #5a0a80 100%)',
    tags: ['AWS', 'Scalability', 'Architecture'],
    featured: true,
  },
  {
    slug: 'react-performance-checklist',
    title: 'A Practical React Performance Checklist for 2026',
    excerpt: 'Twelve checks that make React apps feel faster, from splitting code to taming re-renders, with the order to do them in.',
    category: 'engineering',
    date: '2026-09-29',
    readTime: 7,
    author: 'omar',
    img: 'blog-2',
    icon: 'code',
    tile: 'linear-gradient(226deg, #67e0f7 0%, #4d96ec 100%)',
    tags: ['React', 'Performance', 'Web'],
  },
  {
    slug: 'ux-research-on-a-small-budget',
    title: 'UX Research on a Small Budget: What Actually Works',
    excerpt: 'You do not need a lab or a big budget to learn what users want. Five low-cost methods we use on real projects.',
    category: 'design',
    date: '2026-09-18',
    readTime: 6,
    author: 'hina',
    img: 'blog-3',
    icon: 'heart-rate',
    tile: 'linear-gradient(226deg, #ffe468 0%, #f99a6c 100%)',
    tags: ['UX', 'Research', 'Product'],
  },
  {
    slug: 'dedicated-team-vs-freelancers',
    title: 'Dedicated Team or Freelancers? How to Choose',
    excerpt: 'Both can work. Here is how to compare cost, speed, quality and risk, and which one fits each stage of your product.',
    category: 'business',
    date: '2026-09-05',
    readTime: 6,
    author: 'ali',
    img: 'blog-4',
    icon: 'rocket',
    tile: '#27262b',
    tags: ['Teams', 'Hiring', 'Strategy'],
  },
  {
    slug: 'test-automation-roi',
    title: 'Test Automation: Where It Pays Off and Where It Does Not',
    excerpt: 'Automating everything is a trap. Learn which tests to automate first and how to measure the return.',
    category: 'testing',
    date: '2026-08-21',
    readTime: 7,
    author: 'noor',
    img: 'blog-5',
    icon: 'dashboard',
    tile: 'linear-gradient(226deg, #67e9f1 0%, #24e795 100%)',
    tags: ['QA', 'Automation', 'CI/CD'],
  },
  {
    slug: 'mobile-app-mvp-roadmap',
    title: 'From Idea to App Store: A 12-Week Mobile MVP Roadmap',
    excerpt: 'What to build, what to skip and when to ship. A week-by-week plan for launching a focused first version.',
    category: 'mobile',
    date: '2026-08-07',
    readTime: 8,
    author: 'zain',
    icon: 'mobile-app',
    tile: 'linear-gradient(226deg, #ff97b3 0%, #ff3a9d 100%)',
    tags: ['Mobile', 'MVP', 'Product'],
  },
]

export const getPost = (slug) => posts.find((p) => p.slug === slug)

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
