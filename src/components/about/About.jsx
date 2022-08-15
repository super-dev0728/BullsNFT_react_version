import React from 'react'
import "./About.css"
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';

const About = () => {
    return (
        <section id="about" className='about-wrapper py-5'>
            <div className='d-flex mb-3 ms-5 ps-3'>
                <Slide left>  <div >04 </div></Slide>
                <Roll left><div className='title-bar-black'></div></Roll>
                <Slide right> <div>About</div></Slide>
            </div>
            <div className='ms-5 ps-3'>
                <h1 className='fw-bold'>THE STORY</h1>
                <h6>Bull's are RAGING!</h6>
            </div>
            <div className="about-content py-5">
                <div className="about-text ms-auto col-lg-6 px-5 my-5">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </div>
                <div className="about-text col-lg-6 px-5 my-5">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </div>
            </div>
        </section>
    )
}

export default About
