import React from 'react';
import './Events.css'
import EventImg from '../../Assets/Images/Event.jpg'
import Navbar from '../Navbar/Navbar';

const Events = () => {
    return (
        <div className="container event-container py-5 my-5">
            <Navbar/>
            <div className="row">
                <div className="col">
                    <div>
                        <h1>Events coming soon....</h1>
                        <img className="my-2" src={EventImg} alt="error-message" />
                        <h3>Thank You.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;