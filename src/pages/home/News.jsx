import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, redirect} from "react-router-dom";
import './assets/css/news.css'

const News = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get('http://localhost:9091/api/news/newest', {headers: {
                        C_KEY: global.config.APIKEY.C_KEY //the token is a variable which holds the token
                    }});
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
                <div className={"news-block"}>
                    <a href={data.url}><img src={data.bannerImage} alt="bannerImage"/></a>
                    <span className={"news-author"}><h6>{data.authors[0]}</h6></span>
                    <span className={"news-title"}><h6><a href={data.url}>{data.title.slice(0, 17)}...</a></h6></span>
                    <span className={"news-category"}><h6><span>● </span>{data.category}</h6></span>
                    <span
                        className={"news-time"}><h6><span>● </span>{data.time.slice(4, 6) + '-' + data.time.slice(6,8) + '-' + data.time.slice(2,4) + ' ' + data.time.slice(9, 11) + ':' + data.time.slice(11,13)}</h6></span>
                </div>
            )}
        </div>
    );
};

export default News;