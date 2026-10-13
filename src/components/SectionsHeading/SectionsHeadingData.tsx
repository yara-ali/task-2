import styles from "./SectionsHeadingData.module.css";

interface SectionHeaderProps {
    intro: string;
    title: string;
    description: string;
}

export const SectionHeadingData = ({intro,title,description}: SectionHeaderProps) => {
    return (
    <div className={styles.sectionHeading}>
        <h6 className={styles.intro}>
            {intro}
        </h6>
        <h1 className={styles.title}>
            {title}
        </h1>
        <p className={styles.description}>
            {description}
        </p>
    </div>
    );
};


