import React from 'react'
import './Footer.css'
import footerlogo from '../../assets/img/learning-logo.svg'

function Footer() {
    function footerFn(e) {
        e.preventDefault()
    }
    return (
        <div className='Footer'>
            <div className="container">
                <div className="footer__logo">
                    <img src={footerlogo} alt="footerlogo" />
                    <span className='footer__logo__span'></span>
                    <h4 className='footer__logo__text'>Virtual Class <br /> for Zoom</h4>
                </div>
                <h3 className='footer__subscribe'>Subscribe to get our Newsletter</h3>

                <form onSubmit={footerFn} className='footer__form' action="#">
                    <input type="text" placeholder='Your Email' />
                    <button type='submit'>Subscribe</button>
                </form>


                <div className="footer__div">
                    <p>Careers</p>
                    <span></span>
                    <p>Privacy Policy</p>
                    <span></span>
                    <p>Terms & Conditions</p>
                </div>

                <p className='footer__securate'>© 2021 Class Technologies Inc. </p>
            </div>
        </div>
    )
}

export default Footer