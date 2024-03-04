import React, { useState, useEffect } from 'react'
import styles from './Landing.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CaneImage from './CaneImage';

const fruits = [
  { name: 'Pear', color: '#c9e78a' },
  { name: 'Apple', color: '#ffb2b2' },
  { name: 'Exotic', color: '#c1bff2' }
  
  
]

const Landing = () => {
  const [position, setPosition] = useState(0);
  const [currentFruit, setCurrentFruit] = useState(0);
  const [showText, setShowText] = useState(false);


  const updatePosition = () => {
    setPosition(prevPosition => (prevPosition === 2 ? 0 : prevPosition + 1)); // Assuming there are 3 images
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setInterval(updatePosition, 3000);
      setCurrentFruit((prev) => (prev + 1) % fruits.length);
      setShowText(true); // Show the text when changing the fruit
      setTimeout(() => setShowText(false), 500); // Hide the text after 500ms
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.container} style={{ backgroundColor: fruits[currentFruit].color }}>
      <div className={`${styles.text} ${showText ? styles.show : ''}`}>
        <h1>{fruits[currentFruit].name}</h1>
        {/* <div className={styles.canimage }>
          <img className = 'img-fluid'src="https://www.yudiz.com/codepen/fruity/cane.svg" alt='canimage'></img>
        </div> */}

      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <CaneImage/>
        </div>
      </div>
    </div>
  )
}

export default Landing
