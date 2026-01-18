import styles from './Section2.module.css'
import Card1 from './Card1'


const Section2 = () => {
  return (
    <div>
      <section className={styles.helpsection}>
        <h2>We Can Help You With</h2>
        <div className={styles.helpgrid}>
            <Card1 title="Lead Generation" imge= "📊" dis = "Convert visitors into high-quality leads using data-driven campaigns."></Card1>
            <Card1 title = "Brand Visibility" imge="🚀"  dis="Boost your brand awareness across search, social, and display channels."></Card1>
            <Card1 title="Increase Traffic" imge="📈" dis = "Drive targeted, high-intent traffic that converts consistently."></Card1>
            <Card1 title="Increase Sales" imge="💰" dis = "Performance-focused strategies designed to maximize ROI."></Card1>
            <Card1 title="Reputation Management" imge="⭐" dis="Build trust and credibility with proactive brand reputation control."></Card1>
            <Card1 title="Reputation Management" imge="⭐" dis="Build trust and credibility with proactive brand reputation control."></Card1>
            <Card1 title="Reputation Management" imge="⭐" dis="Build trust and credibility with proactive brand reputation control."></Card1>
            <Card1 title="Reputation Management" imge="⭐" dis="Build trust and credibility with proactive brand reputation control."></Card1>
        </div>
        </section>

    </div>
  )
}

export default Section2