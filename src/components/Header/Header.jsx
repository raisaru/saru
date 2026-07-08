import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'
import { NAV_LINKS, SOCIAL_LINKS } from '../../data/portfolio'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 40,
      behavior: 'smooth',
    })
  }
}

function NavItem({ href, label, active }) {
  return (
    <li className={styles.navItem}>
      <a
        href={href}
        className={active ? styles.active : ''}
        onClick={(e) => {
          e.preventDefault()
          scrollToSection(href.slice(1))
        }}
      >
        {label}
      </a>
    </li>
  )
}

export default function Header({ activeSection, theme, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.heroCopy}>
        { /* <p className={`${styles.kicker} hero-enter-1`}>
          Available for Full-time & Freelance Opportunities
        </p>
        */}

        <h1 className={`${styles.heroName} hero-enter-1`}>
          <a href="#">Saru Rai</a>
        </h1>

        <h2 className={`${styles.heroTitle} hero-enter-2`}>
          Junior Frontend & WordPress Developer
        </h2>

        {/* <p className={`${styles.heroSubtitle} hero-enter-3`}>
          I build responsive, user-friendly websites using React, JavaScript,
          HTML, CSS, and WordPress. Passionate about creating clean interfaces,
          custom WordPress themes, and modern web experiences with a focus on
          performance and usability.
        </p> */}

        <nav className="hero-enter-4">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.href}
                {...link}
                active={activeSection === link.href.slice(1)}
              />
            ))}
          </ul>
        </nav>

        <ul className={`${styles.social} hero-enter-5`}>
          {SOCIAL_LINKS.map(({ key, label, url }) => (
            <li key={key} className={styles.socialItem}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      <footer className={`${styles.footerLeft} hero-enter-5`}>
        <p>&copy; 2025 Saru Rai. All rights reserved.</p>
      </footer>
    </header>
  )
}