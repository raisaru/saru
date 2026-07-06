import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './ProcessSection.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Understand',
    desc: 'Review project requirements, designs, and technical specifications to plan the development approach.',
    highlight: 'project requirements',
  },
  {
    num: '02',
    title: 'Develop',
    desc: 'Build responsive user interfaces and custom WordPress features using React, JavaScript, PHP, SCSS, and ACF.',
    highlight: 'responsive user interfaces',
  },
  {
    num: '03',
    title: 'Test & Optimize',
    desc: 'Test functionality across devices, fix bugs, improve performance, and ensure a smooth user experience.',
    highlight: 'improve performance',
  },
  {
    num: '04',
    title: 'Deploy',
    desc: 'Prepare the website for production, verify responsiveness, SEO basics, and support future maintenance.',
    highlight: 'production',
  },
]

function Step({ num, title, desc, highlight, delay }) {
  const ref = useScrollReveal({}, delay)
  const renderDesc = () => {
    if (!desc.includes(highlight)) return desc
    const [before, after] = desc.split(highlight)

    return (
      <>
        {before}
        <strong>{highlight}</strong>
        {after}
      </>
    )
  }

  return (
    <div ref={ref} className={`${styles.step} reveal`}>
      <div className={styles.stepHeader}>
        <span className={styles.stepNum}>{num}</span>
        <h4 className={styles.stepTitle}>{title}</h4>
      </div>
      <p className={styles.stepDesc}>{renderDesc()}</p>
    </div>
  )
}

export default function ProcessSection() {
  const headingRef = useScrollReveal()

  return (
    <section id="process">
      <h3 ref={headingRef} className="section-heading reveal">My Development Process</h3>
      <div className={styles.grid}>
        {STEPS.map((step, index) => (
          <Step key={step.num}{...step} delay={index * 100} />))}
      </div>
    </section>
  )
}