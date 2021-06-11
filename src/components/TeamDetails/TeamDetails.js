import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faPodcast, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import {  useParams } from 'react-router';
import './TeamDetails.css'
import maleTeam from '../../Assets/Images/male.png'
import femaleTeam from '../../Assets/Images/female.png'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const TeamDetails = () => {
    const { teamId } = useParams();     // using useParams

    const [teamDetails, setTeamDetails] = useState([]);

    // Load teamdata using teamId 
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTeamDetails(data.teams[0]);
            })
    }, [teamId])

    return (
        <div className="team-body">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="banner-container">
                <div className="">
                    <div className="">
                        <img className="banner-img" src={teamDetails.strTeamFanart3} alt="team-banner" />
                        {/* <img className="banner-img" src={teamDetails.strTeamBanner} alt="team-banner" /> */}
                    </div>
                </div>
                <div>
                    <img className="team-badge" src={teamDetails.strTeamBadge} alt="team-badge" />
                </div>
            </div>
            <div className="container my-5">
                <div className="card team-details">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <div className="card-body">
                                <h1 className="card-title">{teamDetails.strTeam}</h1>
                                <h5 className="card-text"><FontAwesomeIcon icon={faPodcast} /> Founded : <strong>{teamDetails.intFormedYear}</strong></h5>
                                <h5 className="card-text"><FontAwesomeIcon icon={faFlag} /> Country : <strong>{teamDetails.strCountry}</strong></h5>
                                <h5 className="card-text"><FontAwesomeIcon icon={faFutbol} /> Sport Type : <strong>{teamDetails.strSport}</strong></h5>
                                <h5 className="card-text"><FontAwesomeIcon icon={faVenusMars} /> Gender : <strong>{teamDetails.strGender}</strong></h5>
                            </div>
                        </div>

                        {/* Conditional check */}
                        <div className="col-md-7 p-3">
                            {
                                teamDetails.strGender === "Male" || "male" ? <img className="team-details-img" src={maleTeam} alt="male-team-image" /> : <img className="team-details-img" src={femaleTeam} alt="female-team-image" />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 mb-5 description-container">
                <div className="row">
                    <div className="col">
                        <p className="mb-5">{teamDetails.strDescriptionEN}</p>
                        <p>{teamDetails.strStadiumDescription}</p>
                        <p>{teamDetails.strDescriptionFR}</p>
                    </div>
                </div>
            </div>
            <div className="container text-center pb-5">
                <div className="row">
                    <div className="col">
                        <a href={`https://${teamDetails.strTwitter}`} target="_blank" className="twitter"><FontAwesomeIcon icon={faTwitterSquare} size="2x" /></a>
                        <a href={`https://${teamDetails.strFacebook}`} target="_blank" className="facebook mx-3"><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a>
                        <a href={`https://${teamDetails.strInstagram}`} target="_blank" className="instagram ms-3"><FontAwesomeIcon icon={faInstagramSquare} size="2x" /></a>
                        
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default TeamDetails;