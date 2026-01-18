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
  const totalSteps = 4
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

  const growth_chart_desc = ""
  return(
    <>
    <div ref={sectionRef} className={styles.section4Container}>
      <div className={styles.section4Heading}>
        <h1><span>WHY</span> <br /> Trust us?</h1>
      </div>
      <div className={styles.card_container}>
        <Card3 img = {growth_chart} text = "growth Chart"></Card3>
        <Card3 img = {handshake} text = "handshake"></Card3>
        <Card3 img = {checklist}></Card3>
        <Card3 img = {team_collaboration}></Card3>
      </div> 
    </div>  
    </>
  )
}
export default Section4;