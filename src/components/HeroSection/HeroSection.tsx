import Header from '../Header/Header'
import styles from './HeroSection.module.css'
const HeroSection = () => {
    interface NumberItem {
        number: string;
        text: string;
    }
    const numbers : NumberItem[] = [
        {number: "+7000", text: "Students Passed Out"},
        {number: "+37", text: "Awards & Recognitions"},
        {number: "+15", text: "Experience Educators"}
    ]
    return (
        <div className={styles.Hero}>
            <Header/>
            <div className={styles.HeroContent}>
            <div className={styles.leftSection}>
                <img src="/HeroImg.png" alt="" />
            </div>
            <div className={styles.rightSection}>
                <h5>Welcome to Little Learners Academy</h5>
                <h1>Where Young Minds Blossom and<span style={{color: "#FF8D4D"}}> Dreams Take Flight. </span> </h1>
                <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                <div className={styles.numbers}>
                    {numbers.map((item, index) => {
                        return (
                            <div key={index} className={styles.numberItem}>
                                <span className={styles.num}>{item.number}</span>
                                <span className={styles.text}>{item.text}</span>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroSection