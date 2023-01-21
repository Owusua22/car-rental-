import React from 'react';
import styles from "./Luxury.module.css"
import pic from "../Images/lx1.png"
import pic1 from "../Images/lx2.png"
import pic2 from "../Images/lx3.png"
import pic3 from "../Images/lx4.png"

const Luxury = () => {
    return (
        <div className={styles.luxury}>
            <div className={styles.heading}>
        <h2>Luxury Selection</h2>
            
            <div className={styles.text_bg}>
                <h4>
                    Select from the top luxury vehicles to roll in styles
                </h4>
            </div>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={pic} alt="luxury car" />
                    <div className={styles.content}>
                        <h4>Hyundai</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={pic1} alt="luxury car" />
                    <div className={styles.content}>
                        <h4>Nissan</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={pic2} alt="luxury car" />
                    <div className={styles.content}>
                        <h4>Lamborgin</h4>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={pic3} alt="luxury car" />
                    <div className={styles.content}>
                        <h4>Fortuner</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Luxury;
