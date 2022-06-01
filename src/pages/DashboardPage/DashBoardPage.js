import './DashBoardPage.scss';
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/API';
import DashboardNav from '../../components/DashboardNav/DashboardNav';
import PPGChart from '../../components/PPGChart/PPGChart';
import LoadingPage from '../LoadingPage/LoadingPage';

export default class DashBoardPage extends Component {
    state = {
        user: null,
        failedAuth: false,
        ppgData: []
    }
    componentDidMount() {
        axios.get(`${API_URL}/team/ppg`)
            .then((res) => {
                const ppgData = res.data

                // Cleans Data for use in D3 Piechart
                const filteredData = ppgData.map((player) => {
                    // x: PlayerName Value 
                    const x = Object.values(player).shift();
                    // y: Player's PPG Score Value
                    const y = Object.values(player).pop();

                    let dataElement = {
                        x: x,
                        y: y
                    }
                    return dataElement;

                })
                return filteredData;
            })
            .then((res) => {
                console.log(res);
                this.setState({
                    ppgData: res

                })
            })
    }

    render() {
        const { ppgData } = this.state;

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

        if (!ppgData.length === 0) {
            return (
                <LoadingPage text={`You must be logged in to see this page.`} link={`Login`} />
            )
        }

        return (
            <main className='dashboard-page'>
                <DashboardNav id={1} />
                <div className='dashboard-main'>
                    <PPGChart
                        data={ppgData}
                    />
                </div>
            </main>
        );
    }
}

