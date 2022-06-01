import './DashBoardPage.scss';
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/API';
import DashboardNav from '../../components/DashboardNav/DashboardNav';
import PPGChart from '../../components/PPGChart/PPGChart';
import BarChart from '../../components/BarChart/BarChart';
import LoadingPage from '../LoadingPage/LoadingPage';

export default class DashBoardPage extends Component {
    state = {
        user: null,
        failedAuth: false,
        ppgData: [],
        barChartRPG: [],
        barChartAPG: []
    }
    componentDidMount() {
        axios.get(`${API_URL}/team/ppg`)
            .then((res) => {
                const ppgData = res.data

                // Cleans Data for use in D3 Piechart
                const filteredData = ppgData.map((player) => {
                    // x: PlayerName Initals
                    const name = Object.values(player).shift();
                    // Regex to get initials
                    const x = name.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();

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
                this.setState({
                    ppgData: res
                })
            })
        axios.get(`${API_URL}/team/RPG-APG`)
            .then((res) => {
                const data = res.data;
                // [APG Data] Cleans Data for use in D3 Piechart 
                const apgData = data.map((player) => {
                    // x: PlayerName Initals
                    const name = Object.values(player).shift();
                    // Regex to get initials
                    const x = name.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();

                    // y: Player's APG Score Value
                    const y = Object.values(player).pop();

                    let dataElement = {
                        x: x,
                        y: y
                    }
                    return dataElement;

                })
                this.setState({
                    barChartAPG: apgData,
                })
                return data;
            })
            .then((res) => {
                // [RPG Data] Cleans Data for use in D3 Piechart 
                const rpgData = res.map((player) => {
                    // x: PlayerName Initals
                    const name = Object.values(player).shift();
                    // Regex to get initials
                    const x = name.match(/(^\S\S?|\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();

                    // y: Player's RPG Score Value
                    // Takes the Value of RPG and converts to string, before it was one element array being returned.
                    const y = Object.values(player).splice(1, 1).toString();
                    let dataElement = {
                        x: x,
                        y: y
                    }
                    return dataElement;
                })
                console.log(rpgData);
                this.setState({
                    barChartRPG: rpgData,
                })
            })

    }

    render() {
        const { ppgData, barChartRPG } = this.state;
        // barChartAPG
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

        if (ppgData.length === 0) {
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
                    <article className='barchart'>
                        <h3 className='barchart__title'>APG & RPG</h3>
                        <BarChart
                            data={barChartRPG}
                        />
                        
                    </article>
                </div>
            </main>
        );
    }
}

