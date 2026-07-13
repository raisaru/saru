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
  {
    key: 'gm', // Gmail
    label: 'GM',
    url: 'mailto:raisaru102@gmail.com',
  },
  {
    key: 'gh', // GitHub
    label: 'GH',
    url: 'https://github.com/raisaru',
  },
  {
    key: 'li', // LinkedIn
    label: 'IN',
    url: 'https://www.linkedin.com/in/saru-r-ab49702b6/',
  },
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
export const WP_SERVICES = [
  {
    title: 'Custom Theme Development',
    desc: 'Convert UI designs into custom, responsive WordPress themes using PHP, HTML, SCSS, and JavaScript.',
  },
  {
    title: 'Dynamic Content Integration',
    desc: 'Build dynamic websites using ACF/SCF, custom post types, taxonomies, and reusable WordPress templates.',
  },
  
  // {
  //   title: 'Custom Functionality',
  //   desc: 'Develop custom features and template functionality with PHP to meet specific project requirements.',
  // },
  // {
  //   title: 'Performance & Responsive Design',
  //   desc: 'Create fast, responsive, and user-friendly WordPress websites optimized for all screen sizes.',
  // },
]

// ─── Projects ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: 'Office Minami',
    desc: 'Contributed to both frontend and backend development of a custom WordPress website. Developed responsive page layouts using HTML, SCSS, and JavaScript, and implemented dynamic functionality with PHP and SCF, including custom templates, reusable components, and content management.',
    highlight: 'Frontend & Dynamic WordPress Development',
    tags: ['WordPress', 'PHP', 'JavaScript', 'SCF', 'HTML5', 'SCSS'],
    // image: minamiImg,
    // imageAlt: 'Office Minami website',
    liveUrl: 'https://www.officeminami.com/',
  },
  {
    title: 'Livable Staff',
    desc: 'Contributed to both frontend and backend development of a custom WordPress website. Developed responsive page layouts using HTML, SCSS, and JavaScript, and assisted in making selected pages and sections dynamic by integrating ACF fields and PHP templates.',
    highlight: 'Frontend Development & WordPress Integration',
    tags: ['WordPress', 'PHP', 'JavaScript', 'ACF', 'HTML5', 'SCSS'],
    // image: livableImg,
    // imageAlt: 'Livable Staff website',
    liveUrl: 'https://www.livable-staff.co.jp/',
  },
  {
    title: 'Daituu',
    desc: 'Assisted in the frontend development of the website by building responsive page layouts and interactive UI components using HTML, SCSS, and JavaScript. Collaborated with the development team to ensure a consistent and user-friendly experience across desktop, tablet, and mobile devices.',
    highlight: 'Frontend Development',
    tags: ['HTML5', 'JavaScript', 'SCSS'],
    image: daituuImg,
    imageAlt: 'Daituu website',
    liveUrl: 'https://daitsu-net.com/',
  },
  {
    title: 'Visnex',
    desc: 'Contributed to both frontend and backend development of the website. Developed responsive page layouts and interactive UI components using HTML, SCSS, and JavaScript, and assisted in making selected sections dynamic by integrating PHP and SCF.',
    highlight: 'Frontend Development & Dynamic Integration',
    tags: ['WordPress', 'PHP', 'HTML5', 'JavaScript', 'SCF', 'SCSS'],
    // image: visnexImg,
    // imageAlt: 'Visnex website',
    liveUrl: 'https://visnex-chem.com/',
  },
  {
    title: 'Megumi Food',
    desc: 'Developed the frontend of the website using HTML, SCSS, and JavaScript, creating responsive and interactive page layouts. Also assisted in integrating the Contact page with WordPress by implementing a dynamic contact form using the Contact Form 7 plugin.',
    highlight: 'Frontend Development & Contact Form Integration',
    tags: ['WordPress', 'HTML5', 'JavaScript', 'SCSS', 'Contact Form 7'],
    liveUrl: 'https://www.megumi-food.com/',
  },
  {
    title: 'Navi',
    desc: 'Built the frontend of the website with HTML, SCSS, and JavaScript, ensuring a responsive and interactive user experience. Additionally, implemented the dynamic map section by integrating WordPress and PHP to display location-based content.',
    highlight: 'Frontend Development & WordPress Map Integration',
    tags: ['WordPress', 'PHP', 'HTML5', 'JavaScript', 'SCSS'],
    liveUrl: 'https://navi.okiren8131.com/',
  },
  {
    title: 'MCM Company',
    desc: 'Contributed to the frontend development of selected sections of the corporate website using HTML, SCSS, and JavaScript. Implemented responsive layouts and interactive UI components while ensuring a consistent user experience across desktop and mobile devices.',
    highlight: 'Frontend Development',
    tags: ['HTML5', 'JavaScript', 'SCSS'],
    liveUrl: 'https://mcmcompany.tokyo/',
  },
  {
    title: 'Ofukuwake',
    desc: 'Contributed to the frontend development of the website by building responsive page layouts and interactive UI components using HTML, SCSS, and JavaScript. Collaborated with the development team to deliver a consistent and user-friendly experience across desktop, tablet, and mobile devices.',
    highlight: 'Frontend Development',
    tags: ['HTML5', 'JavaScript', 'SCSS'],
    liveUrl: 'https://www.ofukuwake.info/',
  },
  {
    title: 'Aozora Offshore Frontend',
    desc: 'Contributed to the frontend development of the website by implementing responsive page layouts and interactive UI components using HTML, SCSS, and JavaScript. Ensured a seamless user experience across desktop, tablet, and mobile devices.',
    highlight: 'Responsive Frontend Development',
    tags: ['HTML5', 'JavaScript', 'SCSS'],
    liveUrl: 'https://aozora-okinawa.com/offshore-frontend/',
  },
  {
    title: 'Aozora Offshore Backend',
    desc: 'Contributed to the frontend development of the website by building responsive page layouts and implementing interactive UI components using HTML, SCSS, and JavaScript. Collaborated with the team to ensure a consistent and user-friendly experience across desktop, tablet, and mobile devices.',
    highlight: 'Responsive Frontend Development',
    tags: ['HTML5', 'JavaScript', 'SCSS'],
    liveUrl: 'https://aozora-okinawa.com/offshore-backend/',
  },
  {
    title: 'To-Chu Kaitori',
    desc: 'Contributed to the frontend development of selected sections of the website using HTML, SCSS, and JavaScript. Implemented responsive layouts and interactive UI components while ensuring a consistent user experience across desktop, tablet, and mobile devices.',
    highlight: 'Frontend Development',
    tags: ['HTML5', 'JavaScript', 'SCSS'],
    liveUrl: 'https://www.to-chu.co.jp/kaitori/',
  },
]
