import React, {useState} from 'react';
import styles from "./Navbar.module.css"
import {AiOutlineMenu,AiOutlineClose,AiOutlineSearch, AiOutlineUser} from "react-icons/ai"
import pic1 from "../Images/logo.png"

const Navbar = () => {
    const [nav,setNav ] = useState(false)
    return (
        <header className={styles.Navbar}>
            <img src={pic1} alt="logo" style={{width:"230px"}}/>
            <nav>
                <ul className={nav ? [styles.menu , styles.active].join(" ") : [styles.menu]}>
                    <li>
                        <a href='/'>Learn More</a>
                    </li>
                    <li>
                        <a href='/'>Contact Us </a>
                    </li>
                    <li>
                        <a href='/'>Sign Up</a>
                    </li>
                   
                    <li>
                       <AiOutlineSearch  size={25} style={{marginTop:"10px"}} />
                    </li>
                    <li>
                       <AiOutlineUser size={25} style={{marginTop:"10px"}} />
                    </li>
                </ul>
                <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                    {nav ? <AiOutlineClose  size={23}/> : <AiOutlineMenu  size={23}/>}
                   
                
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
