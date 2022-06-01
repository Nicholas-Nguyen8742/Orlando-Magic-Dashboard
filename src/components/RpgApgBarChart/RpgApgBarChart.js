import './RpgApgBarChart.scss';
import React, { Component } from 'react';
import * as d3 from 'd3';

export default class RpgApgBarChart extends Component {
    constructor() {
        super();
        this.chRef = React.createRef();
    }
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const { data, w, h } = this.props;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("margin-left", 100);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")
    }





    render() {
        const { id } = this.props;

        return (
            <div id={"#" + id}></div>
        )
    }
}

