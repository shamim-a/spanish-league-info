import React from 'react';
import './Contact.css'
import contactImg from '../../Assets/Images/contact-banner.png'
import Navbar from '../Navbar/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <div className="container contact-container py-5 my-5">
            <div className="row">
                <div className="col">
                    <div>
                        <h1>Contact is coming soon....</h1>
                        <img className="my-2" src={contactImg} alt="error-message" />
                        <h3>Thank You.</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Contact;