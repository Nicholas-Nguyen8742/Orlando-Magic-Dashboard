import './TeamPage.scss';
import React, { Component } from 'react';
import DashboardNav from '../../components/DashboardNav/DashboardNav';


export default class TeamPage extends Component {
    render() {
        return (
            <main className='dashboard-page'>
                <DashboardNav id={1} />
            </main>
        );
    }
};
