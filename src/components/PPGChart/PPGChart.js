import './PPGChart'
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/API';

export default class PPGChart extends Component {
    state = {
        ppgData: []
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
        return (
            <div>

            </div>
        );
    }
}

