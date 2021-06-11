import React from 'react';
import './Features.css'
import featureImg from '../../Assets/Images/feature.jpg'
import Navbar from '../Navbar/Navbar';

const Features = () => {
    return (
        <div>
            <Navbar />
            <div className="container feature-container py-5 my-5" >
            <div className="row">
                <div className="col">
                    <div>
                        <h1>Features Coming soon....</h1>
                        <img className="my-2" src={featureImg} alt="error-message" />
                        <h3>Thank You.</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default Features;