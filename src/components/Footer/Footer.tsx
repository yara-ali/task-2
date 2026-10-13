import styles from "./Footer.module.css"
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.firstSection}>
                <div className={styles.info}>
                    <img src="./Logo.png" alt="Logo" />
                    <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    <div className={styles.contactWays}>
                    <div className={styles.contactInfo}>
                    <FaEnvelope className={styles.icon} />
                    <span>hello@littlelearners.com</span>
                    </div>
                    <div className={styles.contactInfo}>
                    <FaPhone className={styles.icon}/>
                    <span>+91 91813 23 2309</span>
                    </div>
                    <div className={styles.contactInfo}>
                    <MdLocationOn className={styles.icon}/>
                    <span>Somewhere in the World </span>
                    </div>
                    </div>
                </div>
                <div className={styles.pagesList}>
                <div className={styles.page}>
                    <h3>Home</h3>
                    <p>Features</p>
                    <p>Our Testimonials</p>
                    <p>FAQ</p>
                </div>
                <div className={styles.page}>
                    <h3>About Us</h3>
                    <p>Our Mission</p>
                    <p>Our Vission</p>
                    <p>Awards and Recognitions</p>
                    <p>History</p>
                    <p>Teachers</p>
                </div>
                <div className={styles.page}>
                    <h3>Academics</h3>
                    <p>Special Features</p>
                    <p>Gallery</p>
                </div>
                <div className={styles.page}>
                    <h3>Contact Us</h3>
                    <p>Information</p>
                    <p>Map & Direction</p>
                </div>
                </div>
            </div>
            <hr />
            <div className={styles.secondSection}>
                <div className={styles.links}>
                    <p>Terms of Service | Privacy Policy | Cookie Policy</p>
                </div>
                <div className={styles.socialLinks}>
                    <div className={styles.socialLink}>
                        <FaFacebook />
                    </div>
                    <div className={styles.socialLink}>
                        <FaTwitter  />
                    </div>
                    <div className={styles.socialLink}>
                        <FaLinkedin/>
                    </div>
                    
                    
                    
                </div>
            </div>
            <hr />
            <div className={styles.thirdSection}>
                <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer