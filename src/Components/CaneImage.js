import React, { useState, useEffect } from 'react';
import styles from './Landing.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const CaneImage = () => {
  // State to manage the position of the cane label images
  const [position, setPosition] = useState(0);

  // Function to update the position of the cane label images
  const updatePosition = () => {
    setPosition(prevPosition => (prevPosition === 2 ? 0 : prevPosition + 1)); // Assuming there are 3 images
  };

  // Effect to update position every 3 seconds
  useEffect(() => {
    const interval = setInterval(updatePosition, 3000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className={styles.caneimage}>
      <img src="https://www.yudiz.com/codepen/fruity/cane.svg" alt="" />
      <img
        src="https://www.yudiz.com/codepen/fruity/Labels.jpg"
        alt=""
     className={`${styles['cane-labels']} ${styles[`position-${position}`]}`} // Dynamically set position class
        />
    </div>
  );
};

export default CaneImage;
