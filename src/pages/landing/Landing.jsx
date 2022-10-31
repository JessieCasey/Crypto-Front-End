import React from 'react'

import './assets/css/style.css';

function Home() {
    return (
        <div className="home">
            <div className={'main-page'}>
                <div className="container">
                    <div className="center align-items-center">
                        <h3 className={'logo'}> <span>&A</span> product</h3>
                    </div>

                    <img className={'main-picture'} height={'100%'} width={'100%'} src={require('./assets/images/Vector.png')} />
                </div>
            </div>

        </div>
    );
}

export default Home;