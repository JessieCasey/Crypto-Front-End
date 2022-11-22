import React from "react";

import './assets/css/home.css'
import Trending from "./Trending";
import News from "./News";
import Trade from "./Trade";
import CryptosList from "./Cryptos";

const Home = () => {
    return (
        <div className={"container"}>
            <div className="header-blocks">
                <div className="row">
                    <div className="col-4">
                        <div className={'block'}>
                            <h3>🔥 Trending</h3>
                            <Trending/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={'block'}>
                            <h3>🚀 Top Market</h3>
                            <Trade/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={'block'}>
                            <h3>📰 News</h3>
                            <News/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"cryptos-list"}>
                <CryptosList />
            </div>
        </div>


    );
};

export default Home;