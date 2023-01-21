import React from 'react';
import styles from "./Find.module.css"


const Card = ({image, make}) => {
    return (
        <div className={styles.card}>
           <img src={image} alt="first slider" />
           <h4 style={{textAlign:"center"}}>{make} </h4>
          
        </div>
    );
}

export default Card;
