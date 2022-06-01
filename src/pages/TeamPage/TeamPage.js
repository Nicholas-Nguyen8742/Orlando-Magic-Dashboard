import './TeamPage.scss';
import React, { Component } from 'react';
import DashboardNav from '../../components/DashboardNav/DashboardNav';
import axios from 'axios';
import { API_URL } from '../../utils/API';
import PlayerCard from '../../components/PlayerCard/PlayerCard';


export default class TeamPage extends Component {
    state = {
        players: [], 
    }

    componentDidMount() {
        axios.get(`${API_URL}/team`) 
            .then((res) => {
                console.log(res.data);
                this.setState({
                    players: res.data,
                })
            })
    }

    render() {
        const { players } = this.state;
        return (
            <main className='team-page'>
                <DashboardNav id={1} />
                <div className='team-main'>
                {players.map((player) => (
                    <PlayerCard 
                        key={player.playerID}
                        playerID={player.playerID}
                        name={player.name}
                        image={player.image}
                        ppg={player.PPG}
                        rpg={player.RPG}
                        efg={`${player}.eFG%`}
                        vi={player.VI}
                        />
                ))}
                </div>
            </main>
        );
    }
};
