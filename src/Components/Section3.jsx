import styles from './Section3.module.css'
import Card2 from './Card2'
import digital from '../assets/digital_icon.png'
import design from '../assets/design_icon.png'
import development from '../assets/development_icon.png'
import production from '../assets/production_icon.png'

const Section3 = () => {


  const digitalContent = 
  (
    <ul>
      <li>Social Media Marketing</li>
      <li>Search Engine Optimization (SEO)</li>
      <li>Digital Media Planning</li>
      <li>Enhanced Brand Content (A+ Content)</li>
      <li>Influencer & Celebrity Campaigns</li>
      <li>Ecommerce & Quick Commerce Solutions</li>
      <li>Digital Strategy Consulting</li>
      <li>Google Analytics & Reporting</li>
    </ul>
  )

  const designContent = (
    <ul>
      <li>UI / UX Design</li>
      <li>Brand Identity</li>
      <li>Creative Strategy</li>
      <li>Motion Graphics</li>
      <li>Design Systems</li>
    </ul>
  )

  const developmentContent = (
    <ul>
      <li>Website Development</li>
      <li>React & Next.js</li>
      <li>Backend APIs</li>
      <li>CMS Integration</li>
      <li>Performance Optimization</li>
    </ul>
  )

  const productionContent = (
    <ul>
      <li>Post Production</li>
      <li>Reels & Shorts</li>
      <li>Ad Shoots</li>
      <li>Video Production</li>
    </ul>
  )


  return(
    <>
      <h1 className={styles.heading}><span className={styles.our}>
        OUR</span> EXPERTISE
      </h1>
      <h5 className={styles.subheading}>
        We combine data insights with design thinking to build strategies and experiences that <br /> transform businesses.
      </h5>
      <h1 aria-label="Hi! I'm a developer" className={styles.typewriter_heading}>
        &nbsp;<span className={styles.typewriter}></span>
      </h1>
      <div className={styles.cardContainer}>
        <div className={styles.card_container}>
          <Card2 title="DIGITAL" img={digital} desc = "Data-driven strategies to grow your brand online" backcontent={digitalContent}></Card2>
          <Card2 title="DESIGN" img={design} desc="Creative visuals that connect and convert" backcontent={designContent}></Card2>
          <Card2 title="DEVELOPMENT" img={development} desc="High-performance websites built to scale" backcontent={developmentContent}></Card2>
          <Card2 title="PRODUCTION" img={production} desc="Compelling content that tells your brand story" backcontent={productionContent}></Card2>
        </div>
      </div>
    </>
  )
}

export default Section3;