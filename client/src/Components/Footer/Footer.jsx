import React from 'react'
import styles from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
  return (
    <div className={styles.footer} id='footer'>
        <div className={styles.footerContent}>
            <div className={styles.leftContent}>
                <div className={styles.logo}>
                    <p>taS😋ty.</p>
                </div>
                <p>Your Trusted Partner for Delicious, Restaurant-Quality Meals Delivered Anytime, Anywhere. </p>
                <div>
                    <FacebookIcon />
                    <PinterestIcon />
                    <InstagramIcon />
                    <LocationOnIcon />
                </div>
            </div>


            <div className={styles.middleContent}>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Policy</li>
                </ul>
            </div>


            <div className={styles.rightContent}>
                <h2>Contact us</h2>
                <ul>
                    <li><LocalPhoneIcon /> +234 905 9765 073</li>
                    <li><AlternateEmailIcon /> chinweiketwitter@gmail.com</li>
                    <li><LocationOnIcon /> No 10, Moloko way Akowonjo Dokpemu, surulere</li>
                </ul>
            </div>
        </div>
        <hr />
        <p>
            Copyright © 2024 taSty.org - All rights reserved.
        </p>
    </div>
  )
}

export default Footer