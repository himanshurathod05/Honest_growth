import styles from './Section4.module.css'
import Card3 from './Card3'
import team_collaboration from '../assets/team_collaboration.jpg'
import growth_chart from '../assets/growth_chart.jpg'
import handshake from '../assets/handshake.jpg'
import checklist from '../assets/checklist.jpg'
import { useEffect, useRef, useState } from 'react'

const Section4 = () =>{

  const sectionRef = useRef(null)
  const [step, setStep] = useState(0)
  const totalSteps = 6
  const isLocked = useRef(false)

  useEffect(() => {
    const onWheel = (e) => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const inView = rect.top <= 0 && rect.bottom >= window.innerHeight

      if (!inView) return

      e.preventDefault()
      isLocked.current = true

      if (e.deltaY > 0) {
        // scroll down
        setStep((prev) => Math.min(prev + 1, totalSteps))
      } else {
        // scroll up
        setStep((prev) => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])


  return(
    <>
    <div ref={sectionRef} className={styles.section4Container}>
      <div className={styles.section4HeadingDiv}>
        <h1 className={styles.section4Heading}><span>WHY</span> <br /> Trust us?</h1>
      </div>
      <div className={styles.card_container}>
        <Card3 img = {growth_chart} heading = "We grow what matters." text = "Our strategies are driven by real data, clear goals, and measurable outcomes. From increasing traffic to boosting conversions, we focus on consistent and sustainable growth for your brand."></Card3>
        <Card3 img = {handshake} heading = "No false promises. No hidden costs." text = "We believe in complete transparency. You’ll always know what we’re doing, why we’re doing it, and how it’s impacting your business—because trust is built on honesty."></Card3>
        <Card3 img = {checklist} heading = "Every step, perfectly planned." text = "From research to execution, we follow a proven process that ensures nothing is missed. Timely delivery, clear reporting, and reliable performance are our non-negotiables."></Card3>
        <Card3 img = {team_collaboration} heading = "More than a team — your digital partners." text = "We work closely with you to understand your vision and goals. Our collaborative approach ensures strategies that truly align with your brand and drive long-term success."></Card3>
      </div> 
    </div>  
    </>
  )
}
export default Section4;