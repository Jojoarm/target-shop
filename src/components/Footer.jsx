import React from 'react'
import './Footer.css'
import delivery from '../assets/fast-delivery.png'
import guaranty from '../assets/guaranty.png'
import customer from '../assets/customer-service.png'
import whatsapp from '../assets/whatsapp-logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container1">
                <div className="footer__info">
                    <img src={delivery} alt="delivery icon" />
                    <p>Fast Delivery</p>
                </div>
                <div className="footer__info">
                    <img src={guaranty} alt="guaranty icon" />
                    <p>Buyer Protection</p>
                </div>
                <div className="footer__info">
                    <img src={customer} alt="customer icon" />
                    <p>Customer Support</p>
                </div>
            </div>
            <div className="footer__container2">
                <p>STORE DETAILS</p>
                <h3>Target</h3>
                <span>Cham Towers, Plot 12 Nkruwa Rd, Kampala, Ug</span>
                <div className="footer__contact">
                    <img src={whatsapp} alt="whatsapp logo" />
                    <p>Chat With us!</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
