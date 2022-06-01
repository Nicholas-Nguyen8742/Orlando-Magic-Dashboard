import './PPGChart.scss';
import React, { Component } from 'react';
import * as d3 from 'd3';
const colors = ['#8ce8ad', '#57e188', '#34c768', '#2db757', '#27acaa', '#42c9c2', '#60e6e1', '#93f0e6', '#87d3f2', '#4ebeeb', '#35a4e8', '#188ce5', '#542ea5', '#724bc3', '#9c82d4', '#c981b2', '#b14891', '#ff6d00', '#ff810a', '#ff9831', '#ffb46a', '#ff9a91', '#ff736a', '#f95d54', '#ff4136', '#c4c4cd'];

export default class PPGChart extends Component {
    constructor() {
        super();
        this.chRef = React.createRef();
    }

    // Chart Load after componentDidMount
    componentDidMount() {
        this.drawChart()
    }

    // DrawChart 
    drawChart() {
        const { data } = this.props;
        const svgContainer = d3.select(this.chRef.current).node();
        const width = svgContainer.getBoundingClientRect().width;
        const height = width;
        const margin = 15;
        let radius = Math.min(width, height) / 2 - margin;
        let legendPosition = d3.arc().innerRadius(radius / 1.75).outerRadius(radius);

        // Create SVG
        const svg = d3.select(this.chRef.current)
            .append('svg')
            .attr("width", '100%')
            .attr("height", '100%')
            .attr('viewBox', '0 0 ' + width + ' ' + width)
            .append("g")
            .attr("transform", "translate(" + Math.min(width, height) / 2 + "," + Math.min(width, height) / 2 + ")");

        let pie = d3.pie()
            .value(d => d.y)
        let data_ready = pie(data)

        // Donut partition  
        svg
            .selectAll('whatever')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(radius / 1.75)  // This is the size of the donut hole
                .outerRadius(radius)
            )
            .attr('fill', (d) => colors[d.index])
            .attr("stroke", "#fff")
            .style("stroke-width", "2")
            .style("opacity", "0.8")


        // x: Player's Name
        svg
            .selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('g')
            .attr("transform", d => `translate(${legendPosition.centroid(d)})`)
            .attr("class", 'legend-g')
            .style("user-select", "none")
            .append('text')
            .text(d => d.data.x)
            .style("text-anchor", "middle")
            .style("font-weight", 600)
            .style("fill", '#222')
            .style("font-size", 8);

        // y: Label of Player's PPG
        svg
            .selectAll('.legend-g')
            .append('text')
            .text((d) => { return d.data.y })
            .style("fill", '#444')
            .style("font-size", 16)
            .style("text-anchor", "middle")
            .attr("y", 16);
    }

    render() {
        return (
            <div className="ppgChart">
                <h3 className="ppgChart__title">Points Per Game</h3>
                <div className='ppgChart__chart' ref={this.chRef}></div>
            </div>
        )
    }


}

