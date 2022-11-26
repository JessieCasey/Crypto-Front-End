import {Line} from 'react-chartjs-2';

import {
    Chart as Charts,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'
import React, {useEffect, useState} from "react";
import axios from "axios";

Charts.register(LineElement, CategoryScale, LinearScale, PointElement)

const Graph = (props) => {

    const graph = {
        // '2022-11-24' == Nov 24
        labels: [
            'Nov 20',
            'Nov 21',
            'Nov 22',
            'Nov 23',
            'Nov 24',
            'Nov 25'],
        datasets: [{
            data: [
                props.data['Time Series (Digital Currency Daily)']['2022-11-25']['1a. open (USD)'],
                props.data['Time Series (Digital Currency Daily)']['2022-11-24']['1a. open (USD)'],
                props.data['Time Series (Digital Currency Daily)']['2022-11-23']['1a. open (USD)'],
                props.data['Time Series (Digital Currency Daily)']['2022-11-22']['1a. open (USD)'],
                props.data['Time Series (Digital Currency Daily)']['2022-11-21']['1a. open (USD)'],
                props.data['Time Series (Digital Currency Daily)']['2022-11-20']['1a. open (USD)']],
            backgroundColor: 'transparent',
            borderColor: '#4b73f5',
            pointBorderColor: 'transparent',
            pointBorderWidth: 1,
            tension: 0.3
        }],
    };

    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    stepSize: 300,
                    callback: (value) => value + ' $'
                },
            },
        }
    };

    return (
        <div style={{width: '600px', height: '600px', marginLeft: '0px', marginTop: '70px'}}>
            <div>
                <Line data={graph} options={options}></Line>
            </div>
        </div>
    );
}
export default Graph;