import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return(
        <div className={styles.completedChallengeContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}