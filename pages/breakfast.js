import styles from '../styles/Breakfast.module.css';
import Navbar from '@/Components/Navbar';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Breakfast = () => {

const [currentWeek, setCurrentWeek] = useState([])
const [currentDate, setCurrentDate] = useState()
const [features, setFeatures] = useState([])

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

const addList = () => {
    const newList = <div className={styles.inputContainer}>
            <Image src="/egg.png" alt="egg" width={35} height={35} />
            <div className={styles.inputBox}>
                <input></input>
                <p>50g</p>
            </div>
            <div className={styles.calories}>
                <p className={styles.number}>72</p>
                <p className={styles.cal}>Cal</p>
            </div>
            <Image src="/delete.png" alt="Scan Button" width={35} height={35} />
        </div>
    setFeatures([...features, newList])
}

  return (
    <>
    {currentWeek.length > 0 &&
        <div className={styles.container}>
            <div className={styles.breakfasts}>
                <div className={styles.topContainer}>
                    <div className={styles.topContents}>
                        <p className={styles.header}>Breakfast</p>
                        <Image src="/coffee.png" alt="Coffee" width={35} height={35} />
                        <p>Cal</p>
                    </div>
                </div>
                <div className={styles.weeklyCalendarContainer}>
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
                <div className={styles.features}>
                    <div className={styles.buttons}>
                        <div className={styles.featureButton}>
                            <Image src="/add.png" alt="Add Button" width={38} height={38} />
                            <button onClick={() => addList()}>Add Food</button>
                        </div>
                        <div className={styles.featureButton}>
                            <Image src="/scan.png" alt="Scan Button" width={38} height={38} />
                            <button>Scan Barcode</button>
                        </div>
                    </div>
                    <div>
                        {features}
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
