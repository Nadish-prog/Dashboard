import React from 'react';
import './chart.css';
import {LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, YAxis} from 'recharts';
function Chart(props) {
    const data = [
        {
            name: 'Jan',
            'Active User': 4000,

        },
        {
            name: 'Feb',
                'Active User': 3000,

        },
        {
            name: 'Mar',
            'Active User': 5000,

        },
        {
            name: 'Apr',
            'Active User': 2000,

        },{
            name: 'May',
            'Active User': 1000,

        },{
            name: 'Jun',
            'Active User': 1500,

        },
        {
            name: 'Jul',
            'Active User': 4000,

        },
        {
            name: 'Aug',
            'Active User': 6000,

        },
        {
            name: 'Sep',
            'Active User': 5000,

        },
        {
            name: 'Oct',
            'Active User': 500,

        },
        {
            name: 'Nov',
            'Active User': 300,

        },
        {
            name: 'Dec',
            'Active User': 7000,

        },




    ];

    return (
       <>
       <div className="chart">
             <h3 className="chartTitle">Sales Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
<XAxis dataKey="name" stroke="#5550bd"/>
                   <Line type="monotone" dataKey="Active User" stroke="#5550bd"/>
                     <Tooltip/>
                    <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
                </LineChart>
            </ResponsiveContainer>
       </div>
       </>
    );
}

export default Chart;