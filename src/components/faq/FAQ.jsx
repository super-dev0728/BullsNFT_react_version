import React from 'react'

import "./FAQ.css"
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';

const FAQ = () => {
    return (
        <section id="faq" className='faq-wrapper py-5 '>
            <div className='d-flex mb-3 ms-5 ps-4 text-white'>
                <Slide left>  <div >07 </div></Slide>
                <Roll left><div className='title-bar-black'></div></Roll>
                <Slide right> <div>FAQ</div></Slide>
            </div>
            <h1 className='text-white ms-5 ps-4 faq-title'>BULL'S LODGE NFT</h1>
            <div className="accordion w-75 mx-auto mt-5  " id="FAQ">
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            WHAT IS BULL’S LODGE NFT PROJECT'S VISION AND MISSION?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            Most of us have found ourselves either with NFT Project without utilities or worse, end up with rugpull. As this is not enough, we also have to face with Bearish Market sentiment and it's consequences... When it's sunshine and flowers everything is beautiful. But what about when Market is bloody hell? That was enough and we have made our decision! We want to create a value with Metaverse & In Real Life utilities and benefits for the members of our society. When it comes to earning, we want to create sustainable passive income model for members of Lodge. For this purpose, we have gathered together as volunteers/investors/contributors of Web3 and NFT. We have come together to push each other's back despite how strong the wind is. People from communities across the Web3, Blockchain, Machine Learning and NFT Spaces are now working to build a better COMMUNITY, a better HOME, a better LODGE!
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            WHAT IS BULL’S LODGE NFT AND HOW CAN I BUY?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            Bull’s Lodge is NFT collection on MATIC, a digital art with benefits to holders and it's community. You can earn passive income, attend in our interoperable and cross-chain metaverse and have a place in our Lodge and join us in real life events and activities.
                            You can buy Bull’s through our official website by connecting into your Metamask once minting begins.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            WAIT? YOU GUYS MENTIONED “LODGE”, WHAT DO YOU MEAN?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            Essentially we want to build a Lodge in real life where you can enjoy, chill and share your ideas in our NFT Exhibition and Bar (from now on we call it EXHI-BAR). You will also be able to accommodate soon. Literally a land piece that we build across the Globe.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            WHAT IS THE MINTING PRICE AND MAX SUPPLY?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            The price will be ... MATIC and supply is 10,000 Bulls.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            REAL LIFE AND METAVERSE HUH? HOW ARE YOU GOING TO COVER ALL OF THIS WITH JUST ... MATIC?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            We already own the land piece and in total we will be providing 60% of investment from our funds and via sponsors. Our sales are booster to complete roadmap successfully. NFT sale holds catalyst role in this step. Later, Community Wallet will be created and all the fund collected will actually go into DAO & Metaverse Development alongside our Exclusive Economy Model.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            WHY CREATE A COMMUNITY WALLET IF YOU ARE GOING TO CONTROL EVERYTHING?
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            In early phase we are using our initiative to develop our Lodge. Once minting begins, we are going to create DAO that is completely driven by community. Community Wallet will be used for financial aspects of DAO.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            WHAT ARE 1000 RESERVED BULLS?
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            Reserved Bulls are allocation of NFT to Team and Development. 100 NFT will be held by Team, purposing each person in team to have 1 NFT ultimately. 450 NFT will be held for marketing, giveaways and promotion. Other 450 NFT will be used for collaborations, sponsorships and partnerships.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            WHAT BENEFITS DO I GET BY HOLDING BULL'S LODGE NFT?
                        </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            Rome wasn't built in one day!
                            First of all, you will be welcome in our EXHI <br />
                            -BAR and our NFT's used as ID to prove your place in Lodge. <br />
                            - You will also have benefits in Metaverse & DAO via Community Wallet Funding through Sponsorships, Royalties (Secondary sales) and Exclusive Passive Income Model (Bulliverse). <br />
                            - Moreover you will be decision maker in our society and you will have rights to vote in DAO for real life decisions. <br />
                            - NFT you own will be identity for your presence in special events and your place will be reserved in Art Exhibitions & Galleries. <br />
                            - Top Tier VIP Rooms in Metaverse & in Reality. We are coming with many many giveaways including Merchs, NFTs and Vacations! <br />
                            - There are eco-friendly activities and sustainable opportunities awaiting you in Lodge.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            WHEN CAN I BEGIN MINTING?
                        </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            You can begin minting your Bull once countdown timer is set to zero in Official MINT link (To be announced).
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingEleven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                            WHERE CAN I TRADE MY BULLS?
                        </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            As soon as smart contract testing and audits done, we will be partnering with NFT Marketplaces, NFT Tools and NFT Aggregators where you will be able to list and trade your Bulls.
                            Nevertheless, we will have our own NFT Marketplace which will include our beloved collection, MusicNFTs, Assets of Bull's Lodge NFT Metaverse, Assets & Merchs from our Lodge and more to be included by your decisions via DAO in Bulliverse!
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingTwelwe">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                            HOW MANY BULL'S LODGE NFT'S CAN I PURCHASE?
                        </button>
                    </h2>
                    <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingTwelwe" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            Maximum amount of Bulls NFTs per transaction is 20 and there is no limit per wallet.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingThirteen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                            WHAT WILL HAPPEN IF WHALES OWN HUGE PROPORTION OF NFTS?
                        </button>
                    </h2>
                    <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            We will incentivize people who has more than 50 NFTs to have better distribution among Lodge Community. Regardless of Institution or a Person is investing into our Lodge, we will limit Lodge Management System with one person per wallet. We will then implement Ranking System (which will not effect DAO respectfully) and those who rank up as 'Ambassadors' are going to be Community Leaders with exclusive perks and responsibilities.
                            For more information visit our Roadmap.
                        </div>
                    </div>
                </div>
                <div className="accordion-item border-0 ">
                    <h2 className="accordion-header" id="headingFourTeen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                            WHO IS BEHIND BULL’S LODGE NFT PROJECT?
                        </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingFourTeen" data-bs-parent="#FAQ">
                        <div className="accordion-body">
                            We are people from general society, dedicated and hardworking minds come together as Team of Volunteers. <br />
                            Volunteering is our core motivation to build eco-friendly future with sustainable passive income whether Market is Bullish or Bearish. Our success unveils our presence. <br />
                            We are building a better COMMUNITY, a better HOME, a better LODGE!
                        </div>
                    </div>
                </div>
            </div>
            <h6 className='footer-info w-75 mx-auto mt-5 text-center' >If you can’t find the information you seek here, don’t hesitate to reach out to our super-friendly support team in our Official Discord <a className='dc-link text-decoration-none' href="https://discord.gg/VxkC8zmbWP" target="__blank">[here]</a> .</h6>
        </section>
    )
}

export default FAQ
