import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import ServiceCard from './components/ServiceCard/ServiceCard'
import ProjectCard from './components/ProjectCard/ProjectCard'
import ProcessSection from './components/ProcessSection/ProcessSection'
import ContactSection from './components/ContactSection/ContactSection'
import {
  SKILLS,
  FRONTEND_CARDS,
  WP_SERVICES,
  PROJECTS,
} from './data/portfolio'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useTheme } from './hooks/useTheme'
import styles from './App.module.css'

function RevealHeading({ children }) {
  const ref = useScrollReveal()
  return (
    <h3 ref={ref} className="section-heading reveal">
      {children}
    </h3>
  )
}

function SkillItem({ title, sub, index }) {
  const ref = useScrollReveal({}, index * 60)

  return (
    <div ref={ref} className={`${styles.skillItem} reveal`}>
      <strong>{title}</strong>
      <p>{sub}</p>
    </div>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('')
  const [showAllProjects, setShowAllProjects] = useState(false)

  const { theme, toggle } = useTheme()

  const visibleProjects = showAllProjects
    ? PROJECTS
    : PROJECTS.slice(0, 2)

  // Flashlight Effect (Dark Mode)
  useEffect(() => {
    const fl = document.getElementById('flashlight')
    if (!fl) return

    const onMove = (e) => {
      if (theme === 'light') return
      fl.style.background = `radial-gradient(circle 200px at ${e.clientX}px ${e.clientY}px, transparent 10%, rgba(0,0,0,0.45) 42%)`
    }

    const onLeave = () => {
      if (theme === 'light') return
      fl.style.background = 'rgba(0,0,0,0.45)'
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [theme])

  // Active Navigation
  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const onScroll = () => {
      let current = ''
      sections.forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - 160) {
          current = section.id
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const aboutRef1 = useScrollReveal({}, 0)
  const aboutRef2 = useScrollReveal({}, 120)

  return (
    <>
      <div id="flashlight" className={styles.flashlight} style={{ display: theme === 'light' ? 'none' : undefined, }} />
      <div className="page-wrapper">
        <div className="page-content">
          <Header activeSection={activeSection} theme={theme} onToggleTheme={toggle} />
          <main className={styles.mainContent}>
            {/* About */}
            <section id="about">
              <RevealHeading>About Me</RevealHeading>
              <div className={styles.aboutGrid}>
                <div className={styles.aboutContent}>
                  <p ref={aboutRef2} className={`${styles.aboutText} reveal`}>
                    Hi, I'm <strong>Saru Rai</strong>, a Junior Frontend & WordPress
                    Developer passionate about building responsive, modern, and
                    user-friendly websites using React, JavaScript, PHP, and WordPress.
                    I specialize in developing custom WordPress themes, reusable
                    frontend components, and interactive web applications. I enjoy
                    transforming UI designs into functional websites with clean,
                    maintainable code while continuously learning new technologies and
                    best development practices.
                  </p>
                </div>
                {/*
                <div className={styles.aboutContent}>
                  <p
                    ref={aboutRef1}
                    className={`${styles.aboutLead} reveal`}
                  >
                    I build responsive, modern, and user-friendly websites
                    using React, JavaScript, PHP, and WordPress, focusing on
                    clean code, performance, and great user experiences.
                  </p>

                  <p
                    ref={aboutRef2}
                    className={`${styles.aboutText} reveal`}
                  >
                    Hi, I'm <strong>Saru Rai</strong>, a Junior Frontend &
                    WordPress Developer.I specialize
                    in developing responsive websites, custom WordPress themes,
                    and interactive web applications. I enjoy transforming UI
                    designs into functional websites while continuously learning
                    modern technologies and best development practices.
                  </p>
                </div>
                */}

                <div className={styles.snapshot} aria-label="Portfolio snapshot" >
                  <div>
                    <span>01</span>
                    <strong>Frontend Development</strong>
                    <p>
                      Building responsive interfaces with React, JavaScript,
                      HTML5, CSS3, SCSS and modern frontend techniques.
                    </p>
                  </div>

                  <div>
                    <span>02</span>
                    <strong>WordPress Development</strong>
                    <p>
                      Creating custom themes, ACF-based websites, custom post
                      types, reusable components, and optimized layouts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section id="skills">
              <RevealHeading>Technical Skills</RevealHeading>
              <div className={styles.skillsRow}>
                {SKILLS.map((skill, index) => (
                  <SkillItem key={skill.title} title={skill.title} sub={skill.sub} index={index} />))}
              </div>
            </section>

            {/* Frontend */}
            <section id="frontend" className={styles.serviceSection}>
              <RevealHeading>Frontend Development</RevealHeading>

              <div className={styles.serviceGrid}>
                {FRONTEND_CARDS.map((card, index) => (
                  <ServiceCard key={card.title}{...card} delay={index * 120} />))}
              </div>
            </section>

            {/* WordPress */}
            <section id="services" className={styles.serviceSection} >
              <RevealHeading>WordPress Development</RevealHeading>
              <div className={styles.serviceGrid}>
                {WP_SERVICES.map((service, index) => (
                  <ServiceCard key={service.title} {...service} delay={index * 120} />))}
              </div>
            </section>

            {/* Projects */}
            <section id="work" className={styles.workSection}>
              <RevealHeading>Featured Projects</RevealHeading>

              <div className={styles.workRow}>
                {visibleProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    delay={index * 120}
                  />
                ))}
              </div>

              {PROJECTS.length > 2 && (
                <div className={styles.buttonWrapper}>
                  <button
                    className={styles.viewMoreBtn}
                    onClick={() => setShowAllProjects(!showAllProjects)}
                  >
                    {showAllProjects ? 'View Less' : 'View More'}
                  </button>
                </div>
              )}
            </section>
            {/* Development Process */}
            <ProcessSection />

            {/* Contact */}
            <RevealHeading>Contact Us</RevealHeading>
            <ContactSection />

            <footer className={styles.footerSp}>
              <p>© 2026 Saru Rai • Junior Frontend & WordPress Developer</p>
            </footer>
          </main>
        </div>
      </div>
    </>
  )
}