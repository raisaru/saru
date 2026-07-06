import minamiImg from '../assets/img/projects/minami.png'
import livableImg from '../assets/img/projects/livable-staff.png'
import daituuImg from '../assets/img/projects/daituu.png'
// ─── Navigation ───────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#skills' },
  { label: 'Frontend', href: '#frontend' },
  { label: 'WordPress', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

// ─── Social Links ─────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { key: 'ig', label: 'ig', url: 'https://www.instagram.com/' },
  { key: 'gh', label: 'gh', url: 'https://github.com/raisaru' },
  { key: 'li', label: 'in', url: 'https://www.linkedin.com/feed/' },
]

// ─── Tech Stack ───────────────────────────────────────────────
export const SKILLS = [
  { title: 'Modern JS', sub: 'DOM Logic' },
  { title: 'SCSS / SASS', sub: 'Modular Styling' },
  { title: 'PHP / SQL', sub: 'WordPress Core' },
  { title: 'Flex & Grid', sub: 'Responsive Layouts' },
  { title: 'Gutenberg', sub: 'Block Development' },
  { title: 'Optimization', sub: 'Lighthouse & SEO' },
]

// ─── Frontend Cards ───────────────────────────────────────────
export const FRONTEND_CARDS = [
  {
    title: 'Responsive Web Development',
    desc: 'Build responsive, mobile-first websites that adapt seamlessly across desktop, tablet, and mobile devices using modern HTML, CSS, and SCSS.',
    highlight: 'HTML5 • SCSS • Responsive Design',
  },
  {
    title: 'Interactive User Interfaces',
    desc: 'Develop dynamic and interactive UI components with JavaScript, focusing on smooth user experiences, accessibility, and performance.',
    highlight: 'JavaScript • UI Development',
  },
  // {
  //   title: 'React Development',
  //   desc: 'Create reusable React components, manage application state, and build modern single-page applications with clean and maintainable code.',
  //   highlight: 'React • Component-Based Architecture',
  // },
  // {
  //   title: 'Performance & Clean Code',
  //   desc: 'Write semantic, maintainable code, optimize website performance, and ensure cross-browser compatibility for a better user experience.',
  //   highlight: 'Performance • Best Practices',
  // },
]

// ─── WordPress Services ───────────────────────────────────────
// export const WP_SERVICES = [
//   {
//     title: 'Custom Theme Development',
//     desc: 'Turning static designs into fully functional, dynamic WordPress themes with custom fields and custom post types.',
//   },
// ]
export const WP_SERVICES = [
  {
    title: 'Custom Theme Development',
    desc: 'Convert UI designs into custom, responsive WordPress themes using PHP, HTML, SCSS, and JavaScript.',
  },
  {
    title: 'Dynamic Content Integration',
    desc: 'Build dynamic websites using ACF/SCF, custom post types, taxonomies, and reusable WordPress templates.',
  },
  {
    title: 'Custom Functionality',
    desc: 'Develop custom features and template functionality with PHP to meet specific project requirements.',
  },
  {
    title: 'Performance & Responsive Design',
    desc: 'Create fast, responsive, and user-friendly WordPress websites optimized for all screen sizes.',
  },
]

// ─── Projects ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: 'Office Minami',
    desc: 'Contributed to both frontend and backend development of a custom WordPress website. Built responsive page templates, integrated SCF fields, developed custom functionality with PHP, and implemented interactive UI components using JavaScript and SCSS.',
    highlight: 'Full-Stack WordPress Development',
    tags: ['WordPress', 'PHP', 'JavaScript', 'SCF', 'SCSS'],
    image: minamiImg,
    imageAlt: 'Office Minami website',
    liveUrl: 'https://cms.aozora-test.info/minami',
  },
  {
    title: 'Livable Staff',
    desc: 'Worked on both frontend and backend development, creating responsive layouts, custom WordPress templates, dynamic content management with ACF, and optimizing website performance for a better user experience.',
    highlight: 'Frontend & Backend Development',
    tags: ['WordPress', 'PHP', 'JavaScript', 'ACF', 'SCSS'],
    image: livableImg,
    imageAlt: 'Livable Staff website',
    liveUrl: 'https://livable-staff.aozora-test.info/',
  },
  {
    title: 'Daituu',
    desc: 'Developed frontend interfaces and backend functionality for a custom WordPress website, including custom page templates, ACF integration, reusable components, and responsive design implementation.',
    highlight: 'Custom WordPress Solutions',
    tags: ['WordPress', 'PHP', 'JavaScript', 'ACF', 'SCSS'],
    image: daituuImg,
    imageAlt: 'Daituu website',
    liveUrl: 'https://cms.aozora-test.info/daituu',
  },
  {
    title: 'Visnex',
    desc: 'Developed the complete frontend of the Visnex website using HTML, SCSS, and JavaScript. Created responsive and interactive user interfaces, and assisted in converting selected sections into dynamic WordPress templates by integrating PHP and SCF.',
    highlight: 'Frontend Development & WordPress Integration',
    tags: ['WordPress', 'PHP', 'HTML5', 'JavaScript', 'SCF', 'SCSS'],
    // image: visnexImg,
    // imageAlt: 'Visnex website',
    liveUrl: 'https://cms.aozora-test.info/visnex/',
  },
  {
    title: 'Megumi Food',
    desc: 'Developed the complete frontend of a food business website using HTML, SCSS, and JavaScript. Built responsive page layouts, implemented interactive UI components, and ensured a seamless user experience across desktop, tablet, and mobile devices.',
    highlight: 'Responsive Frontend Development',
    tags: ['HTML5', 'JavaScript', 'SCSS'],
    // image: megumiImg,
    // imageAlt: 'Megumi Food website',
    liveUrl: 'https://static.aozora-test.info/megumi-food/',
  },
]
