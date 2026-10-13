
import { TestimonialsData } from './TestimonialsData'
import styles from './TestimonialsCard.module.css'

interface TestimonialsCardProps {
    index: number;
}
const TestimonialsCard = ({ index }: TestimonialsCardProps) => {
    console.log(index)
    return (
        <div className={styles.testimonials}>
            {TestimonialsData.map((person,index) => (
                <div key={index} className={styles.testimonialCard}>
                <h3 >{person.name}</h3>
                <p >{person.comment}</p>
                </div>
            ))}
        </div>
    )
}

export default TestimonialsCard