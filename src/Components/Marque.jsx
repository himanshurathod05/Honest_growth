import styles from './Marque.module.css'

const Marque = () => {
  return (
    <div>
      <div className={styles.marqueewrapper}>
  <div className={styles.marquee}>
    <span>Lead Generation</span>
    <span>Brand Visibility</span>
    <span>Increase Traffic</span>
    <span>Increase Sales</span>
    <span>SEO Marketing</span>
    <span>PPC Advertising</span>
    <span>Social Media Growth</span>

     {/* duplicate for seamless loop */}
    <span>Lead Generation</span>
    <span>Brand Visibility</span>
    <span>Increase Traffic</span>
    <span>Increase Sales</span>
    <span>SEO Marketing</span>
    <span>PPC Advertising</span>
    <span>Social Media Growth</span>
  </div>
</div>
    </div>
  )
}

export default Marque