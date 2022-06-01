import './PlayerCard.scss';
import React from 'react';
// import { Link } from 'react-router-dom';
// import edit from '../../assets/icons/indexIcons';
import DeletePlayerCard from '../DeletePlayerCard/DeletePlayerCard';
import { percentConvert } from '../../utils/API';

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
                <div className='playerCard-left'>
                    <p className='playerCard-bottom__stat'><strong>PPG</strong>: {ppg}</p>
                    <p className='playerCard-bottom__stat'><strong>RPG</strong>: {rpg}</p>
                </div>
                <div className='playerCard-right'>
                    <p className='playerCard-bottom__stat'><strong>eFG</strong>: {percentConvert(efg)}%</p>
                    <p className='playerCard-bottom__stat'><strong>VI</strong>: {vi}</p>
                </div>
            </div>

        </article>
    );
}

