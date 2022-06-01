import './PlayerCard.scss';
import React from 'react';
// import { Link } from 'react-router-dom';
// import edit from '../../assets/icons/indexIcons';
import DeletePlayerCard from '../DeletePlayerCard/DeletePlayerCard';


export default function PlayerCard({ playerID, name, image, ppg, rpg, efg, vi }) {
    return (
        <article className='playerCard'>
            <div className='playerCard-top' style={{ backgroundImage: `url(${image}), linear-gradient(333deg, rgba(196,206,212,1) 0%, rgba(0,119,192,1) 100%)` }}>
                {/*<Link to={`/dashboard/1/team/${playerID}/edit`}>
                    <img className='portfolioCard__icon-edit' src={edit} alt="Edit portfolio card button" />
                </Link>*/}
                <DeletePlayerCard
                    key={playerID}
                    playerID={playerID}
                    name={name} />
            </div>
            <div className='playerCard-bottom'>
                <h4 className='playerCard-bottom__name'>{name}</h4>
                <div>
                    <p className='playerCard-bottom__stat'>PPG: {ppg}</p>
                    <p className='playerCard-bottom__stat'>RPG: {rpg}</p>
                </div>
                <div>
                    <p className='playerCard-bottom__stat'>eFG%: {efg}</p>
                </div>
            </div>

        </article>
    );
}

