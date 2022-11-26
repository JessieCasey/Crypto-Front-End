import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import './assets/crypto.scss';
import Graph from "./Graph";
import Details from "./Details";


const Crypto = () => {
    let {cryptoId} = useParams();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [graph, setGraph] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get('http://localhost:9091/api/crypto/' + cryptoId, {
                    headers: {
                        C_KEY: global.config.APIKEY.C_KEY //the token is a variable which holds the token
                    }
                });
                const {data: response2} = await axios.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' + response.symbol + '&market=USD&apikey=Q3YV85Z5UPGZWZ0N');

                setData(response);
                setGraph(response2);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return (<div className={'container crypto-page'}>
        {loading && <div>Loading</div>}
        {!loading && (<span>
                <div className={'row crypto-header'}>
                    <div className={'col-5'}>
                        <h4><img src={data.imageURL} alt=""/> {data.name} <span>{data.symbol}</span></h4>
                        <span>Rank #{data.marketCapRank}</span> <span>Coin</span> <span>Cryptocurrency</span>
                    </div>
                    <div className={'col-7'}>
                        <h6>{data.name} price ({data.symbol})</h6>

                        <div className={'crypto-price'}> ${data.currentPrice}
                            <span>{data.priceChangePercentage.toString().slice(0, 6)}%</span>
                        </div>

                        <div className={'crypto-volume'}>Low: <span> ${data.low24}</span> -
                            High: <span> ${data.high24}</span></div>
                        <div className={'row'} style={{marginTop: '25px'}}>
                            <div className={'col-4 crypto-cap'}>
                                <h6>Market Cap</h6>
                                <h5>
                                    ${data.marketCap}
                                </h5>
                                <span style={{
                                    backgroundColor: data.marketCapChangePercentage.toString().slice(0, 1).includes('-') ? '#BF3F4D' : '#5CC489'
                                }}>
                                {data.marketCapChangePercentage.toString().slice(0, 5)}%
                            </span>

                            </div>
                            <div className={'col-4 crypto-volume-mini'}>
                                <h6>Volume</h6>
                                <h5>
                                    ${data.totalVolume}
                                </h5>
                                <span style={{
                                    backgroundColor: data.marketCapChangePercentage.toString().slice(0, 1).includes('-') ? '#BF3F4D' : '#5CC489'
                                }}>
                                {data.marketCapChangePercentage.toString().slice(0, 5)}%
                            </span>
                            </div>
                            <div className={'col-4 circulating-supply'}>
                                <h6>
                                    Circulating Supply
                                </h6>
                                <h5>
                                    Supply: {data.circulatingSupply}
                                </h5>
                                <h5>
                                    Total: {data.totalSupply}
                                </h5>
                                <span>
                                {(data.circulatingSupply * 100 / data.totalSupply).toString().slice(0, 5)} %
                            </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'row'}>
                    <div className="col-7 crypto-graph">
                        {!graph.hasOwnProperty('Error Message') ? <Graph data={graph}/> : <div>No data</div>}
                    </div>
                    <div className="col-4 crypto-news">
                        <Details symbol={data.id} />
                    </div>
                </div>
        </span>)}
    </div>);
};

export default Crypto;
