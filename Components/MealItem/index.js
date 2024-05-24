import React from 'react';
import Image from 'next/image';
import styles from '@/components/MealItem/MealItem.module.css';

const MealItem = ({ meal, iconSrc, calories }) => {
  return (
    <div className={styles.mealItem}>
      <h3 className={styles.mealHeading}>{meal}</h3>
      <div className={styles.calorieContainer}>
        <div className={styles.mealDetails}>
          <Image src={iconSrc} alt={`${meal} icon`} width={24} height={24} />
          <p>{calories} Cal</p>
        </div>
      </div>
      <button className={styles.addButton}>
        <Image src="/images/add_button.svg" alt="Add Button" width={24} height={24} />
      </button>
    </div>
  );
};

export default MealItem;
