import React from 'react'

import "./NftCollection.css"

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
            items: 4
        },
        900: {
            items: 3
        }


    }
};
const NftCollection = () => {
    return (
        <section id="collection" className='nft-collection-wrapper py-5'>
            <div className='ps-lg-5 ms-3 mb-5'>
                <div className='d-flex'>
                    <Slide left>  <div>02</div></Slide>
                    <Roll left> <div className='title-bar'></div></Roll>
                    <Slide right>  <div>NFT COLLECTION</div></Slide>
                </div>
                <h1>OUR LODGE'S NFT COLLECTION</h1>
                <p className='w -lg-50'>Each Bull features a combination of unique traits, handcrafted in signature style by our in-house digital artists.</p>
            </div>
            <OwlCarousel


                className="owl-theme  owl-1  owl-carousel"
                loop
                autoplay={true}
                autoplayTimeout={2000}
                margin={10}
                nav
                navText={['PREV', 'NEXT']}

                dots={false}

                {...options}
            >
                <div className="item"><img className='owl-1-img' src="/images/bulls/88.jpeg" alt='' /></div>
                <div className="item"><img className='owl-1-img' src="/images/bulls/11.jpeg" alt='' /></div>
                <div className="item"><img className='owl-1-img' src="/images/bulls/100.jpeg" alt='' /></div>
                <div className="item"><img className='owl-1-img' src="/images/bulls/125.jpeg" alt='' /></div>



            </OwlCarousel>
        </section>
    )
}

export default NftCollection
