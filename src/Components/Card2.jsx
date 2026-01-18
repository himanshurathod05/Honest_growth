import styles from './Card2.module.css'
const Card2 = ({title,img,desc,backcontent}) => {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            {img && <img src={img} alt={title} className={styles.card_image}/>}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
          </div>
          <div className={styles.cardBack}>
            <h4 className={styles.backcontent}>{backcontent}</h4>
          </div>
        </div>
      </div>
    </>
  )
}
export default Card2;