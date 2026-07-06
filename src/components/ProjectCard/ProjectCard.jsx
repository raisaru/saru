import { useScrollReveal } from '../../hooks/useScrollReveal'
import styles from './ProjectCard.module.css'

export default function ProjectCard({
  title, desc, highlight, tags, image, imageAlt, liveUrl, delay = 0, }) {
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
      {/* {image && (
        <div className={styles.imageWrap}>
          <img src={image} alt={imageAlt || title} className={styles.image} loading="lazy" />
          <div className={styles.imageOverlay}></div>
        </div>
      )} */}

      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.desc}>{renderDesc()}</p>
        <div className={styles.footer}>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          {liveUrl && liveUrl !== '#' && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>View →</a>
          )}
        </div>
      </div>
    </div>
  )
}
