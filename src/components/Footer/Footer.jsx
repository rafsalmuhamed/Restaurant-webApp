import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h2 className='logotext'>CHILLIES</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque labore nemo ratione nam praesentium.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-777-253-776</li>
                        <li>contact@chillies.com</li>
                    </ul>
                </div>
                
            </div>
            
            <p className="footer-copyright">Copyright 2024 chillies.com - All Right Reserved</p>
            
        </div>

    </div>
  )
}

export default Footer