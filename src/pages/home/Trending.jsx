import React, {useEffect, useState} from "react";
import './assets/css/trending.css'
import axios from "axios";

const Trending = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get('http://localhost:9091/api/crypto/trending?count=3');
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && (
                <div>
                    {data.map(item => (
                        <div key={item.number}  style={{marginBottom: '10px'}}>
                            <span className="count">{item.number}</span>
                            <img  className="circle-img" src={item.image} alt="Crypto-image"/>
                            <span className="coin-title">{item.name}</span>
                            <span className="coin-symbols">{item.symbol}</span>
                            <span className="coin-change">{item.change}%</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Trending;

