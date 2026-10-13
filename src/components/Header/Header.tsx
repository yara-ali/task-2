import { FaArrowRight } from 'react-icons/fa6'
import styles from './Header.module.css'
import { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

const Header = () => {
    const navMenu : Array<string> = ["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"]
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.topSection} >
            <div className={styles.topBanner}>
                <p>Admission is Open, Grab your seat now</p>
                <FaArrowRight />
            </div>
            <header>
                <img src="/Logo.png" alt="" className={styles.logo}/>
                <button 
                    className={styles.menuMob} 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoIosClose /> :<HiMenuAlt3 />  }
                </button>
                <nav className={styles.desktopNav}>
                    <ul>
                    {navMenu.map ((item , index ) => {
                        return(
                            <li key={index}>{item}</li>
                        )}
                    )}
                    </ul>
                </nav>
            </header>
            {isOpen && (
                <nav className={styles.mobileNav}>
                    <ul>
                        {navMenu.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    )
}

export default Header