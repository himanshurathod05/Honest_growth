import styles from './Card1.module.css'


const Card1 = ({title,dis,imge}) => {
  return (
    <div>
      <div className={styles.helpcard}>
      <div className={styles.icon}>{imge}</div>
      <h3>{title}</h3>
      <p>{dis}</p>
    </div>
    </div>
  )
}

export default Card1