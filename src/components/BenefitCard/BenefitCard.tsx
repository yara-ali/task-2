import styles from "./BenefitCard.module.css"
import { benefitsCardsData } from "./BenefitsCardsData"
import { FaGraduationCap , FaCrown , FaLifeRing , FaMaskFace } from "react-icons/fa6";
import { IoFlagSharp , IoPeopleSharp } from "react-icons/io5";
import { cardsIcons } from "./icons";

function BenefitCard() {
    
    const iconCards = {
        [cardsIcons.graduationCap]: FaGraduationCap,
        [cardsIcons.crown] : FaCrown,
        [cardsIcons.faceMask] : FaMaskFace,
        [cardsIcons.flag] : IoFlagSharp ,
        [cardsIcons.lifeRing] : FaLifeRing,
        [cardsIcons.people] : IoPeopleSharp
};
    return (
        <div className={styles.Benefits}>
            {benefitsCardsData.map((benefit,index) => {
                const TheIcon = iconCards[benefit.icon]
                return (
                <div key={index} className={styles.benefitCard}>
                    
                    <div className={styles.cardIcon}>
                        <span className={styles.icon}><TheIcon/></span>
                    </div>
                <h3 className={styles.title}>{benefit.title}</h3>
                <p className={styles.cardDescription}>{benefit.description}</p>
                </div>)
            })}
        </div>
    )
}

export default BenefitCard