import React, {useEffect, useState} from "react";
import axios from "axios";
import './assets/crypto.scss';

const Details = (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get('https://api.coingecko.com/api/v3/coins/' + props.symbol + '?tickers=false&community_data=false&developer_data=false&sparkline=false');
                console.log(response);
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return (<div>
        {loading && <div>Loading</div>}
        {!loading && (<div className={'details'}>
            <div>
                <h5>Details</h5>
                <p>{data.description.en.slice(0, 200)}...</p>
            </div>
            <div>
                <h5>Block time</h5>
                <span>{data.block_time_in_minutes} per 1 min</span>
            </div>
            <div>
                <h5>Algorithm</h5>
                <span>{data.hashing_algorithm}</span> <span>Encrypted</span>
            </div>
            <div>
                <h5>Public interest</h5>
                <span>{data.public_interest_score}</span> <span>{data.developer_score}</span> <span>{data.community_score}</span>
            </div>
        </div>)}
    </div>);
};

export default Details;