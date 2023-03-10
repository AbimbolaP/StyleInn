import React from 'react'
import { FaTwitter, FaFacebookSquare, FaInstagram } from 'react-icons/fa' 
import './Footer.css'
function Footer() {
  return (
    <footer>
        <div className='footer'>
            <div>
                <p>Be the first to know about our latest updates</p>
                <div>
                    <form>
                    <input placeholder='Enter your email'></input>
                    <span><button type='submit'> Subscribe Now</button></span>
                    </form>
                    
                </div>
                <div>
                    <ul>
                        <li><FaFacebookSquare/></li>
                        <li><FaInstagram/></li>
                        <li><FaTwitter/></li>
                    </ul>
                </div>
                <div>
                    <p>Service</p>
                    <ul>
                        <li>About us</li>
                        <li>Contacts</li>
                        <li>All brands</li>
                        <li>Collections</li>
                    </ul>
                </div>
                <div>
                    <p>Account</p>
                    <ul>
                        <li>Sign up</li>
                        <li>Log in</li>
                        <li>Favourites</li>
                        <li>Cart</li>
                    </ul>
                </div>
                <div>
                    <p>Help</p>
                    <ul>
                        <li>Shipping</li>
                        <li>Payment</li>
                        <li>Terms and Condition</li>
                        <li>Privacy and Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
