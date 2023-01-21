import React from 'react';
import styles from "./Footer.module.css"

import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt,  FaTwitter ,} from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr'
import { AiOutlineMail, AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
              
                <h2>Want to 
                   <br /> Rent a car ??</h2>

            </div>
            <div className={styles.contact}>
                <h3 style={{color:"white", marginLeft:"25px"}}>Contact us</h3>
               <h4><FaPhoneAlt style={{marginRight:"10px"}}/> +233-543-2312</h4> 
               <h4> <AiOutlineMail style={{marginRight:"10px"}}/>rent@gmail.com</h4>
               <h4> <GrLocation style={{marginRight:"10px",}} /> Legon Mall</h4>
            </div>
            <div className={styles.connect}>  
                <h3 style={{color:"white"}}>Connect with us</h3>
                <p>
                    <FaFacebook/>
                </p>
                <p>
                    <FaInstagram />
                </p>
                <p>
                    <FaLinkedin />
                </p>
                <p>
                    <FaTwitter />
                </p>

            </div>
            <div>
                <form action="">
                <input type="text" placeholder='Enter your email' 
               style={{width:"300px"}} />

                <AiOutlineSend style={{marginTop:"10px"}} />
                </form>
                <button>Subscribe to our Newsletter</button>
            </div>
            <div>
                
            </div>
        </div>
       
    );
}

export default Footer;
