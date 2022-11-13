import React from 'react'
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

import './assets/css/landing.css';

function Home() {
    return (
        <div className="home">
            <div className={'main-section'}>
                <div className="container">
                    <div className="center align-items-center">
                        <h3 className={'logo'}><span>&A</span> product</h3>
                    </div>
                    <div><h5 className={'map animation'}>Home</h5></div>
                    <div className={'center title'}>
                        <h3>&Crypto API</h3>
                        <h4 className={'subtitle'}>The best crypto</h4>
                        <span></span>
                    </div>
                    <img className={'main-picture'} height={'110%'} width={'110%'}
                         src={require('./assets/images/Vector.png')}/>
                </div>
            </div>

            <div className={'mission-section'}>
                <Wrapper>
                    <Spline className={'spline'} scene="https://prod.spline.design/2Ti2ca0lrXVYjMvn/scene.splinecode"/>

                    <Content>
                        <h1>Welcome to us</h1>
                        <p><span>&Crypto</span> is the world’s leading blockchain ecosystem,
                            with a product suite that includes the largest digital asset exchange.
                            Our Mission is to be the infrastructure service provider in crypto.
                        </p>
                        <button className="glow-on-hover" type="button">Check it out</button>
                    </Content>

                </Wrapper>

            </div>

            <div className={'about-section container'}>
                <div>
                    <h5 className={'about-map animation'}>About</h5>
                </div>
                <h1>About us</h1>
                <h2>Welcome to <span>&Crypto</span></h2>

                <p>&A product. Focus on design and perfomance.
                    We provide everything you need to become a proffesional trader. Crypto Open API is open for you
                </p>
                <Spline className={'about-spline'}
                        scene="https://prod.spline.design/J6vCxOwHw5p3669n/scene.splinecode"/>

            </div>

            <div className={'container'}>
                <div className={'end-section row'}>
                    <div className={'card-section col-6'}>
                        <div className={'end-card bg-line'}>
                            <h4>31% faster than others</h4>
                            <p>Optimisation overlimited. Response time cut in 2x times</p>
                        </div>
                        <div className={'end-card'}>
                            <h4>Advanced and flexable API service</h4>
                            <p>Light and easy to use. Fully describted documentation with examples</p>
                        </div>
                    </div>
                    <div className={'col-6'}>
                        <h3>This is the biggest change to the face of IPhone since we went all screen</h3>
                        <a href="/">
                            <button className="glow-on-hover" type="button">Try it now</button>
                        </a>
                    </div>

                </div>
            </div>

            <div className={'build-section'}>
                <h1>Build on</h1>
                <div className={'build-pictures bg-text'}>
                    <img height={'56px'} width={'61px'}
                          src={require('./assets/images/spring.png')}/>
                    <img height={'62px'} width={'62px'} style={{marginLeft: "13px"}}
                         src={require('./assets/images/react.png')}/>
                </div>
            </div>

        </div>
    );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100%;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    width: 1200px;
    height: 900px;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 280px;
  left: 0;

  display: flex;
  flex-direction: column;
  gap: 35px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);    
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  span {
    background: linear-gradient(90.16deg, #2C9AFF 1.66%, #FFF500 11.44%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
  }

  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 29px;
    
    max-width: 420px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  h1,
  p, button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

export default Home;