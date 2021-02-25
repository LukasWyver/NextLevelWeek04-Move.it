import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/lukaswyver.png" alt="Lucas Gimenes"/>
            <div>
                <strong>Lucas Gimenes</strong>
                <p>
                    <img src="icons/level.svg" alt="level up"/>
                Level 1
                </p>
            </div>
        </div>
    );
}