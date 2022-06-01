import './DashboardNav.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { home, logout, profile, team } from '../../assets/icons/indexIcons';
import profileImg from '../../assets/images/Nick.PNG';

export default function DashboardNav({ id }) {
    return (
        <nav className='nav' id='mainNav'>
            <img className='nav__profile' src={profileImg} alt=""></img>
            <p className='nav__user'>Nick Nguyen</p>
            <ul className='nav__list'>
                <li>
                    <NavLink
                        exact={true}
                        activeClassName="nav__item-active"
                        className="nav__item-inactive"
                        to={`/dashboard/${id}`}
                        id={id}>
                        <img className="nav__icon-home" src={home} alt='' />
                        <h4 className='nav__text'>Dashboard</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="nav__item-active"
                        className="nav__item-inactive"
                        to={`/dashboard/${id}/missions`}
                        id={id}>
                        <img className="nav__icon-team" src={team} alt='' />
                        <h4 className='nav__text'>Team</h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName="nav__item-active"
                        className="nav__item-inactive"
                        to={`/dashboard/${id}/portfolio`}
                        id={id}>
                        <img className="nav__icon-profile" src={profile} alt='' />
                        <h4 className='nav__text'>Profile</h4>
                    </NavLink>
                </li>
            </ul>
            <button className='nav__logout' >
                {/*onClick={handleLogout}*/}
                <img className="nav__icon-logout" src={logout} alt='' />
                <h4 className='nav__text'>Logout</h4>
            </button>
        </nav>
    );
}

