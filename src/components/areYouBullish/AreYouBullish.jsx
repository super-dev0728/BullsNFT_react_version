import React from 'react'

import "./AreYouBullish.css"
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';

const AreYouBullish = () => {

    const scrollFunction = () => {
        let x = document.querySelector(".are-you-bullish-content-image-middle")
        let y = document.documentElement.scrollTop - 2000

        if (y < -600 && y > -1300 && window.innerWidth > 992) { x.style.top = `${-(380 + y) / 3.5}px`; }
        else if (window.innerWidth < 992) {
            x.style.top = "30px";
        }

    }

    window.onscroll = function () { scrollFunction() };








    return (
        <section id="welcome" className='are-you-bullish-wrapper py-2  py-lg-5 '>
            <div className="are-you-bullish-content  ms-lg-5 p-lg-3">
                <div className='d-flex mb-3 ms-3 ms-lg-0 '>
                    <Slide left>  <div >03 </div></Slide>
                    <Roll left><div className='title-bar'></div></Roll>
                    <Slide right> <div>Welcome</div></Slide>
                </div>
                <div className="row">
                    <h1 className='fw-bold welcome-title ms-3 ms-lg-0'>ARE YOU BULLISH?</h1>
                    <div className="are-you-bullish-content-text d-none d-lg-block col-lg-5 pt-3">

                        <p>
                            Welcome to the Bull's Lodge NFT project, featuring a collection of 10,000 unique,<strong> 3D </strong> Hand Drawn NFT artworks and delivering privileges in Metaverse and In Real Life utilities to its ever-growing community.
                        </p>
                        <p>Bull’s Lodge NFT Collection is fan art and our inspiration is to put our Community's benefits in front of everything! We prioritize our member’s benefits and privileges while holding your NFT brings sustainable passive income to your feet. NFT in our community will have a value as identity in our society (even more in DAO!).</p>
                        <p>Each Bull is unique, based over hundred of well-designed elements that characterize a BULLISH crypto enthusiast.</p>
                        <p>Entering Bull's Lodge NFT means joining a family full of people who believe in the future of Cryptocurrencies and the Blockchain technology.</p>
                        <p>We’re only just getting started yet will never stop focusing on delivering unparalleled benefits and utilities to the beloved members of our lodge.</p>
                    </div>
                    <div className="are-you-bullish-content-images d-flex mt-4 mt-lg-0 justify-content-center col-12 col-lg-7">
                        <img className="w-25 " src="/images/leftwel.jpeg" alt="" />
                        <img className="w-25 mx-3 are-you-bullish-content-image-middle " src="/images/middlewel.jpeg" alt="" />
                        <img className="w-25" src="/images/rightwel.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AreYouBullish
