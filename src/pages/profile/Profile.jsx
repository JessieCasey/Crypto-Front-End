import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth.service";
import axios from "axios";
import './assets/profile.scss';
import Requests from "./Requests";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get('http://localhost:9091/api/users/' + currentUser.id);
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        }

        fetchData();
    }, []);
    console.log(currentUser);
    console.log(data.requests);
    return (
        <div className="container">
            <div className={"row"}>
                <div className="col-1"></div>
                <div className="col-5 profile-banner">
                    <h6>{data.premium ? "Premium" : "Basic"}</h6>
                    <p>Your tariff plan</p>
                    <p style={{
                        color: '#0d5aff',
                        marginTop: '-15px',
                        cursor: 'pointer'
                    }}>{data.premium ? "" : "Upgrade here!"}</p>
                </div>
                <div className="col-5 profile-info">
                    <h5>{data.username} 🌿</h5>
                    <p>{data.email}</p>
                    <h6>In crypto since 2017-01-22</h6>
                </div>
                <div className="col-1"></div>
            </div>
            <div className={"row"}>
                <div className="col-1"></div>
                <div className="col-5 profile-credits" style={{marginLeft: '0px'}}>
                    <h5 style={{fontSize: '20px', paddingBottom: '5px'}}>{data.apikey}</h5>
                    <p>Your C-KEY</p>
                </div>
                <div className="col-5 profile-credits">
                    <h5>{data.credits} credits 💳</h5>
                    <p>C-KEY usage left</p>
                </div>
                <div className="col-1"></div>
            </div>
            <div style={{paddingLeft: '22px'}}>
                <div className="profile-requests">
                    {loading && <div>Loading</div>}
                    {!loading && (
                        <span className={'pagination-bar-fixed'}>
                            <Requests requests={data.requests}/>
                        </span>
                    )}
                </div>
            </div>


        </div>
    );
};

export default Profile;