import './DashBoardPage.scss';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../../components/Header/Header';
import DashboardNav from '../../components/DashboardNav/DashboardNav';

export default class DashBoardPage extends Component {
    state = {
        user: null,
        failedAuth: false
    }

    render() {
        // if (this.state.failedAuth === false) {
        //     return (
        //         <>
        //             <Header />
        //             <main className="dashboardFailed">
        //                 <article className='dashboardFailed__card'>
        //                     <h1 className='dashboardFailed__card__text'>You must be logged in to see this page.</h1>
        //                     <Link className='dashboardFailed__card__link' to="/">Login</Link>
        //                     <div className='dashboardFailed__loader'>
        //                     <span className='dashboardFailed__loader-spin'></span>
        //                     <span className='dashboardFailed__loader-bounce'></span>
        //                     </div>
        //                 </article>
        //             </main>
        //         </>
        //     )
        // }

        // if (!this.state.user) {
        //     return (
        //         <main className="dashboard-loading">
        //             <p>Loading...</p>
        //         </main>
        //     )
        // }

        return (
            <main className='dashboard-page'>
                <DashboardNav />
                <div className='dashboard-content'>
                </div>
            </main>
        );
    }
}

