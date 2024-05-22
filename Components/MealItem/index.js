import React from 'react';
import Image from 'next/image';

const MealItem = ({ meal, iconSrc, calories }) => {
  return (
    <div className="meal-item">
      <h3>{meal}</h3>
      <div className="meal-details">
        <Image src={iconSrc} alt={`${meal} icon`} width={24} height={24} />
        <p>{calories} Cal</p>
        <button className="add-button">
            <Image src="./images/add_button.svg" alt="Add Button" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default MealItem;
