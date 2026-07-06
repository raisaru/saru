import { useScrollReveal } from '../../hooks/useScrollReveal'
import ContactForm from '../ContactForm/ContactForm'
import styles from './ContactSection.module.css'

export default function ContactSection() {
  const ref = useScrollReveal()

  return (
    <section id="contact">
      <div ref={ref} className={`${styles.container} reveal`}>
        <div className={styles.infoWrapper}>
          <div className={styles.status}>
            <span className={styles.dot} />
            <span className={styles.statusText}>Available for new projects</span>
          </div>

          <p className={styles.desc}>
            Based in <strong>Kathmandu, Nepal</strong>. Building custom WordPress websites as a <strong>Junior WordPress Developer</strong> at <strong>Parijat InfoTech</strong>.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
