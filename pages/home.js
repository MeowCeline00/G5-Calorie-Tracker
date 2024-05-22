import React from 'react';
import { useRouter } from 'next/router';
import MealItem from '../Components/MealItem';
import Navbar from '../Components/Navbar';
import TopBar from '../Components/TopBar';

const Home = () => {
  const router = useRouter();
  const { userName = 'User Name', userPhoto = '/images/profile_icon.svg' } = router.query;

  return (
    <div className="container">
      <TopBar userName={userName} userPhoto={userPhoto} />
      <header>
        <h2>Hello, {userName}</h2>
        <p>12th May 2024</p>
      </header>
      <div className="meals">
        <MealItem meal="Breakfast" iconSrc="/images/breakfast_icon.svg" calories="252" />
        <MealItem meal="Lunch" iconSrc="/images/lunch_icon.svg" calories="350" />
        <MealItem meal="Dinner" iconSrc="/images/dinner_icon.svg" calories="500" />
        <MealItem meal="Snacks" iconSrc="/images/snacks_icon.svg" calories="150" />
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
