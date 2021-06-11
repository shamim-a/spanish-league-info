import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { useHistory } from 'react-router-dom';

const Team = (props) => {
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;     // Destructuring

    // use History Hook 
    const history = useHistory();

    const handleClick = (teamId) => {
        const url = `/team/${teamId}`;
        history.push(url);
    }

    return (
        <div>
            <div class="card team-card text-center m-4 p-3" id="team-container">
                <img className="team-card-img" src={strTeamBadge} alt="team-badge" />
                <div class="card-body">
                    <h1 className="card-title"><strong>{strTeam}</strong></h1>
                    <h3>Sports type : {strSport}</h3>
                    <button className="btn btn-info" onClick={() => handleClick(idTeam)}>Explore <b>{strTeam}</b> <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Team;