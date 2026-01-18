import styles from './Section4.module.css'
import Card3 from './Card3'
const Section4 = () =>{
  return(
    <>
    <div className={styles.section4Container}>
      <div className={styles.section4Heading}>
        <h1><span>WHY</span> <br /> Trust us?</h1>
      </div>
      <div className={styles.card_container}>
        <Card3></Card3>
      </div>
    </div>  
    </>
  )
}
export default Section4;