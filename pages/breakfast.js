import styles from '../styles/Breakfast.module.css';
import Navbar from '@/Components/Navbar';
import { useState, useEffect } from 'react';

const Breakfast = () => {

const [currentWeek, setCurrentWeek] = useState([])
const [currentDate, setCurrentDate] = useState()

const getWeeklyCalendar = () => {
    const now = new Date();
    const today = now.getDay();
    const startWeek = new Date(now);
    startWeek.setDate(now.getDate() - today);

    const week = []
    for (let i = 0; i < 7; i++){
        const day = new Date(startWeek)
        day.setDate(startWeek.getDate() + i)
        week.push(day)
    }

    setCurrentWeek(week)
}

useEffect(() => {
    setCurrentDate(new Date().getDate())
    getWeeklyCalendar()
},[])

console.log(currentDate)

  return (
    <>
    {currentWeek.length > 0 &&
        <div className={styles.container}>
            <div className={styles.breakfasts}>
                <div className={styles.weeklyCalendar}>
                    <div className={currentWeek[0].getDate() === currentDate ? `${styles.calendar} ${styles.active}` : styles.calendar}>
                        <p>Sun</p>
                        <p>{currentWeek[0].getDate()}</p>
                    </div>
                    <div className={currentWeek[1].getDate() === currentDate ? `${styles.calendar} ${styles.active}` : styles.calendar}>
                        <p>Mon</p>
                        <p>{currentWeek[1].getDate()}</p>
                    </div>
                    <div className={currentWeek[2].getDate() === currentDate ? `${styles.calendar} ${styles.active}` : styles.calendar}>
                        <p>Tue</p>
                        <p>{currentWeek[2].getDate()}</p>
                    </div>
                    <div className={currentWeek[3].getDate() === currentDate ? `${styles.calendar} ${styles.active}` : styles.calendar}>
                        <p>Wed</p>
                        <p>{currentWeek[3].getDate()}</p>
                    </div>
                    <div className={currentWeek[4].getDate() === currentDate ? `${styles.calendar} ${styles.active}` : styles.calendar}>
                        <p>Thur</p>
                        <p>{currentWeek[4].getDate()}</p>
                    </div>
                    <div className={currentWeek[5].getDate() === currentDate ? `${styles.calendar} ${styles.active}` : styles.calendar}>
                        <p>Fri</p>
                        <p>{currentWeek[5].getDate()}</p>
                    </div>
                    <div className={currentWeek[6].getDate() === currentDate ? `${styles.calendar} ${styles.active}` : styles.calendar}>
                        <p>Sat</p>
                        <p>{currentWeek[6].getDate()}</p>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
        }
    </>
  );
};

export default Breakfast;
