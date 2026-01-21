import styles from './Card3.module.css'
import { useEffect, useRef } from 'react'

const Card3 = ({img, text, active,heading}) => {

  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.active)
        } else {
          entry.target.classList.remove(styles.active)
        }
      },
      { threshold: 0.6,
        rootMargin: "0px 0px -40% 0px" }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => observer.disconnect()
  }, [])


  return (
    <div className={styles.card3}>
      {/* <div className={styles.card3Inner}>
        {img && <img src={img} className={styles.card3_image}/>}
      </div> */}
      <div ref={barRef} className={`${styles.bar} ${active ? styles.active : ''}`}>
        {img && <img src={img} className={styles.card3_image}/>}
        <div>
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card3;