import React from 'react';
import styles from "./FeatureCard.module.css"
// import icon from '../../../../Assets/Vector.png'



const FeatureCard = ({ title, description,icon }) => {
  return (
    <div className={styles.card}>
      <img className={styles.icon} src={`/${icon}`} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FeatureCard;
