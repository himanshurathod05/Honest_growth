import logo from '../assets/image.png'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <a href="#"><img src={logo} alt="" className={styles.image} /></a>
      </div>
      <nav className={styles.navbar}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Why HG?</a>
      </nav>
      <div>
        <button className={styles.button}>
            Let's Connect
            <svg fill="currentColor" viewBox="0 0 24 24" className={styles.icon}>
              <path
                clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
      </div>
    </header>
  )
}

export default Header;