import React from 'react'

import "./NftTeam.css"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';




const options = {

    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        900: {
            items: 4
        }


    }
};
const NftTeam = () => {
    return (
        <section id="team" className='nft-team-wrapper py-5'>
            <div className='ps-3 ps-lg-4 ms-lg-5 '>
                <div className='d-flex'>
                    <Slide left> <div>06</div></Slide>
                    <Roll left><div className='title-bar'></div></Roll>
                    <Slide right><div>  Team</div></Slide>
                </div>

            </div>
            <h1 className='fw-bold ps-3 ps-lg-4 ms-lg-5'>BULL'S LODGE NFT TEAM</h1>
            <p className='w-lg-50 ps-3 ps-lg-4 ms-lg-5'>Project welcomes members around the world to share <br /> in knowledge about the ever-evolving space of NFTs.</p>
            <OwlCarousel


                className="owl-theme  owl-2  owl-carousel"
                loop
                autoplay={true}
                autoplayTimeout={1000}
                margin={10}
                nav={false}
                navText={['PREV', 'NEXT']}

                dots={false}

                {...options}
            >
                <div className="item">
                    <div className="nft-team-card">
                        <div className="nft-team-card-header"></div>
                        <div className="nft-team-card-body pt-3 ps-3">
                            <h2>ARTIST BULL</h2>
                            <h6>Lead Founder</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!</p>
                        </div>
                        <div className="nft-team-card-footer ps-3 pb-3 ">
                            <a href=""> <i className="bi bi-linkedin me-3"></i></a>
                            <a href=""><i className="bi bi-twitter me-3"></i></a>
                            <a href=""> <i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="nft-team-card">
                        <div className="nft-team-card-header"></div>
                        <div className="nft-team-card-body pt-3 ps-3">
                            <h2>ARTIST BULL</h2>
                            <h6>Lead Founder</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!</p>
                        </div>
                        <div className="nft-team-card-footer ps-3 pb-3 ">
                            <a href=""> <i className="bi bi-linkedin me-3"></i></a>
                            <a href=""><i className="bi bi-twitter me-3"></i></a>
                            <a href=""> <i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="nft-team-card">
                        <div className="nft-team-card-header"></div>
                        <div className="nft-team-card-body pt-3 ps-3">
                            <h2>ARTIST BULL</h2>
                            <h6>Lead Founder</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!</p>
                        </div>
                        <div className="nft-team-card-footer ps-3 pb-3 ">
                            <a href=""> <i className="bi bi-linkedin me-3"></i></a>
                            <a href=""><i className="bi bi-twitter me-3"></i></a>
                            <a href=""> <i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="nft-team-card">
                        <div className="nft-team-card-header"></div>
                        <div className="nft-team-card-body pt-3 ps-3">
                            <h2>ARTIST BULL</h2>
                            <h6>Lead Founder</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!</p>
                        </div>
                        <div className="nft-team-card-footer ps-3 pb-3 ">
                            <a href=""> <i className="bi bi-linkedin me-3"></i></a>
                            <a href=""><i className="bi bi-twitter me-3"></i></a>
                            <a href=""> <i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="nft-team-card">
                        <div className="nft-team-card-header"></div>
                        <div className="nft-team-card-body pt-3 ps-3">
                            <h2>ARTIST BULL</h2>
                            <h6>Lead Founder</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquid!</p>
                        </div>
                        <div className="nft-team-card-footer ps-3 pb-3 ">
                            <a href=""> <i className="bi bi-linkedin me-3"></i></a>
                            <a href=""><i className="bi bi-twitter me-3"></i></a>
                            <a href=""> <i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>





            </OwlCarousel >
        </ section>
    )
}

export default NftTeam
