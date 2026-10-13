import { useState } from "react"
import { SectionHeadingData } from "../SectionsHeading/SectionsHeadingData"
import styles from "./Faq.module.css"
import { questions } from "./Questions"
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

function Faq() {

    const [activeIndex, setActiveIndex] = useState <number | null> (0);

    const handleToggle = (index: number) => {
        if (activeIndex === index) {
        setActiveIndex(null);
        } 
        else {
        setActiveIndex(index);
        }
    };
    return (
        <div>
            <SectionHeadingData intro="Solutions For The Doubts" title="Frequently Asked Questions" description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."/>
            
            <div className={styles.questionsCards}>
                {questions.map ((question , index) => (
                    <div className={styles.question} style={{ backgroundColor: activeIndex===index ? "white" : "#FFEFE5",}}>
                    <div className={styles.flexRow} key={index}>
                    <h4 >{question.question}</h4>
                    <button onClick={() => handleToggle(index)}>
                    {activeIndex===index ? <FiMinus /> : <FiPlus />}
                    </button>
                    </div>
                    {activeIndex===index && <p>{question.answer}</p>}
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Faq