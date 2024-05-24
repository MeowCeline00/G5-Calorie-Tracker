import React from 'react';
import { useRouter } from 'next/router';
import MealItem from '../Components/MealItem';
import Navbar from '../Components/Navbar';
import TopBar from '../Components/TopBar';
import styles from '../styles/Home.module.css';

const Home = () => {
  const router = useRouter();
  const { userName = 'User Name', userPhoto = '/images/profile_icon.svg' } = router.query;

  return (
    <div className={styles.container}>
      <TopBar userName={userName} userPhoto={userPhoto} />
      <div className={styles.meals}>
        <MealItem meal="Breakfast" iconSrc="/images/breakfast_icon.svg" calories="" />
        <MealItem meal="Lunch" iconSrc="/images/lunch_icon.svg" calories="" />
        <MealItem meal="Dinner" iconSrc="/images/dinner_icon.svg" calories="" />
        <MealItem meal="Snacks" iconSrc="/images/snacks_icon.svg" calories="" />
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
