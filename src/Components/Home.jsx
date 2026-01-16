import profile from '../assets/profile.webp'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <h1>Helping Brands Grow Smarter in the Digital World.</h1>
        <h3>From strategy to execution, we help brands attract, engage, and convert the right audience through smart digital marketing.</h3>
        <button className={styles.button}>
                    Book a Free Consultation
                  </button>
      </div>
      <div className={styles.profile_div}>
        <img src={profile} alt="" />
      </div>
    </div>
  )
}
export default Home;