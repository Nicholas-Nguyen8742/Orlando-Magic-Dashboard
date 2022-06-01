import './DashBoardPage.scss';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../../components/Header/Header';
import axios from 'axios';
import { API_URL } from '../../utils/API';
import DashboardNav from '../../components/DashboardNav/DashboardNav';
import PPGChart from '../../components/PPGChart/PPGChart';

export default class DashBoardPage extends Component {
    state = {
        user: null,
        failedAuth: false,
        ppgData: [],
    }
    componentDidMount() {
        axios.get(`${API_URL}/team`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    ppgData: res.data,
                })
            })
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
        const { ppgData } = this.state;
        return (
            <main className='dashboard-page'>
                <DashboardNav id={1} />
                <div className='dashboard-main'>
                    <PPGChart
                        data={ppgData}
                        pieSize={400}
                        svgSize={500}
                        innerRadius={50}
                        containerId="pie" />
                </div>
            </main>
        );
    }
}

