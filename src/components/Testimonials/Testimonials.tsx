import { useRef} from "react";
import { TestimonialsData } from "../TestimonialsCards/TestimonialsData";
import styles from "./Testimonials.module.css"
import { SectionHeadingData } from "../SectionsHeading/SectionsHeadingData";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonials = () => {

  const listRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: number) => {
    if (listRef.current) {
      const cardWidth = listRef.current.querySelector('.card')?.clientWidth || 300;
      const scrollAmount = cardWidth + 24; //gap = 24px

      listRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
      });
    }
  };


return (
    <>
    <SectionHeadingData intro="Their Happy Words 🤗" title="Our Testimonials" description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."/>
    <div className={styles.testimonialsContainer}>
        <button onClick={() => handleScroll(-1)} className={styles.btn}><FaArrowLeft /></button>

        <div className={styles.sliderWindow}>
        <div className={styles.cardsRow} ref={listRef}>
        {TestimonialsData.map((person,index) => (
                <div key={index} className={styles.testimonialCard}>
                <img src={person.profileImg} alt="" className={styles.personImage} />
                <h3 className={styles.personName}>{person.name}</h3>
                <img src={person.rating} />
                <p >{person.comment}</p>
                </div>
            ))}
        </div>
        </div>

        <button onClick={() => handleScroll(1)} className={styles.btn}><FaArrowRight /></button>
    </div>
    </>
    );
};
export default Testimonials