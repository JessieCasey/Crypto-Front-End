import React, {useEffect, useState} from 'react';
import axios from "axios";
import ReactPaginate from 'react-paginate';
import './assets/pagination.scss'
import {useNavigate} from "react-router-dom";

const Cryptos = () => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    let navigate = useNavigate();

    const getData = async (page) => {
        const res = await axios.get(`http://localhost:9091/api/crypto/page?page=` + page + `&size=10`, {
            headers: {
                C_KEY: global.config.APIKEY.C_KEY //the token is a variable which holds the token
            }
        })
        const data = res.data.items;

        setData(data);
        setPageCount(res.data.totalPages);
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    useEffect(() => {
        getData(offset)
    }, [offset])


    function diff(time) {
        // 2022-11-22T20:41:58.592+00:00

        var days = time.toString().slice(0, 10).split("-");
        var hours = time.toString().slice(11, 19).split(":");

        var t1 = new Date(days[0], days[1] - 1, days[2], hours[0], hours[1], hours[2]);
        var t2 = new Date(Date.now());

        const diff = Math.max(t1, t2) - Math.min(t1, t2)
        const SEC = 1000, MIN = 60 * SEC, HRS = 60 * MIN

        const hrs = Math.floor(diff / HRS)
        const min = Math.floor((diff % HRS) / MIN).toLocaleString('en-US', {minimumIntegerDigits: 2})
        const sec = Math.floor((diff % MIN) / SEC).toLocaleString('en-US', {minimumIntegerDigits: 2})

        if (hrs > 0) {
            return `${hrs} hours ago`
        } else if (min > 0) {
            return `${min} min ago`
        } else if (sec > 0) {
            return `${sec} sec ago`
        }
    }

    return (
        <div className="App">
            <table className="table table-hover">
                <thead className={'table-header'}>
                <tr>
                    <th style={{textAlign: 'left', paddingLeft: '50px'}} scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Change</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">Updated</th>
                </tr>
                </thead>
                <tbody>
                {data.map(item => (
                    <tr key={item.id} onClick={() => navigate("/coin/" + item.id)}>
                            <th scope="row">
                                <img className="circle-img" src={item.imageURL}/>
                                <span>{item.symbol.toUpperCase()} <span>{item.name}</span></span>
                            </th>
                            <td>${item.currentPrice}</td>
                            <td style={{color: item.priceChangePercentage.toString().slice(0, 1).includes('-')
                                    ? '#BF3F4D' : '#4AA372'}}>{item.priceChangePercentage.toString().slice(0, 5)}%</td>
                            <td>${item.marketCap}</td>
                            <td>{diff(item.lastUpdated)}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className={'pagination-block'}>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={".."}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

        </div>
    );
};

export default Cryptos;
