import './PlayerCard.scss';
import React from 'react';
// import { Link } from 'react-router-dom';
// import edit from '../../assets/icons/indexIcons';
import DeletePlayerCard from '../DeletePlayerCard/DeletePlayerCard';


export default function PlayerCard({ img, id, playerID, name }) {
    return (
        <article className='playerCard'>
            <div className='playerCard-top' style={{ backgroundImage: `url(${img})` }}>
                {/*<Link to={`/dashboard/1/team/${playerID}/edit`}>
                    <img className='portfolioCard__icon-edit' src={edit} alt="Edit portfolio card button" />
                </Link>*/}
                <DeletePlayerCard
                    key={playerID}
                    playerID={playerID}
                    name={name} />
            </div>
            <div className='playerCard-bottom'>

            </div>

        </article>
    );
}
