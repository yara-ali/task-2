import { SectionHeadingData } from "../SectionsHeading/SectionsHeadingData"
import {Pages} from "./Pages"
import styles from "./ExplorePages.module.css"
import { FaArrowRight } from "react-icons/fa";

const ExplorePages = () => {
    return (
        <div>
            <SectionHeadingData intro="Explore More" title="Navigate through our Pages" description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"/>
            <div className={styles.pagesContainer}>
                {Pages.map ((page , index) => 
                    <div key={index} className={styles.pageCard}>
                        <h2 className={styles.name}>{page.name}</h2>
                        <img src="/lines.png" alt="lines" className={styles.img}/>
                        <p>{page.description}</p>
                        <button className={styles.btn}>Learn More <FaArrowRight /></button>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default ExplorePages