import React from 'react';
import './NoMatch.css'
import NofoundImg from '../../Assets/Images/404-NotFound.jpg'
import Navbar from '../Navbar/Navbar';


const NoMatch = () => {
    return (
        <div className="container noFound-container py-5 my-5">
            <Navbar/>
            <div className="row">
                <div className="col">
                    <div>
                        <h1>404! Not Found!</h1>
                        <img src={NofoundImg} alt="noFound-message" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;