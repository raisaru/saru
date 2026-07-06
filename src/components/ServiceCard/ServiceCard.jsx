import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './ServiceCard.module.css'

export default function ServiceCard({ title, desc, highlight, delay = 0 }) {
  const ref = useScrollReveal({}, delay)

  const renderDesc = () => {
    if (!highlight || !desc.includes(highlight)) return desc

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
    <div ref={ref} className={`${styles.card} reveal`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{renderDesc()}</p>
    </div>
  )
}
