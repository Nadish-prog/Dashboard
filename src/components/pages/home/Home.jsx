import React from 'react';
import './home.css';
import FeaturedInfo from "../../featuredInfo/FeaturedInfo.jsx";
import Chart from "../../charts/Chart.jsx";

function Home(props) {
    return (
        <>
            <div className="home">
            <FeaturedInfo/>
                <Chart/>
            </div>
        </>

    );
}

export default Home;