import React from 'react'

import "./Navbar.css"

const Navbar = () => {

    /* Close mobile canvas */
    const closeCanvas = () => {
        if (window.innerWidth < 992) {
            document.querySelector('[data-bs-toggle="collapse"]').click();
        }

    }

    return (

        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mainNavbar">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#MainNavSubContent"
                        aria-controls="MainNavSubContent"
                        aria-expanded="false"

                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="MainNavSubContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2 mb-2 mb-lg-0">
                                <a

                                    onClick={() => closeCanvas()}
                                    className="nav-link d-inline active btn-close-canvas banner"
                                    aria-current="page"
                                    href="#banner"
                                >Home</a
                                >
                            </li>
                            <li className="nav-item mx-2 mb-2 mb-lg-0">
                                <a
                                    onClick={() => closeCanvas()}
                                    className="nav-link d-inline btn-close-canvas collection"
                                    href="#collection"
                                >COLLECTION
                                </a>
                            </li>
                            <li className="nav-item mx-2 mb-2 mb-lg-0">
                                <a onClick={() => closeCanvas()} className="nav-link d-inline btn-close-canvas about" href="#about">ABOUT </a>
                            </li>
                            <li className="nav-item mx-2 mb-2 mb-lg-0">
                                <a
                                    onClick={() => closeCanvas()}
                                    className="nav-link d-inline btn-close-canvas roadmap"
                                    href="#roadmap"
                                >ROADMAP
                                </a>
                            </li>
                            <li className="nav-item mx-2 mb-2 mb-lg-0">
                                <a
                                    onClick={() => closeCanvas()}
                                    className="nav-link d-inline btn-close-canvas team"
                                    href="#team"
                                >TEAM
                                </a>
                            </li>
                            <li className="nav-item mx-2 mb-2 mb-lg-0">
                                <a
                                    onClick={() => closeCanvas()}
                                    className="nav-link d-inline btn-close-canvas faq"
                                    href="#faq"
                                >FAQ
                                </a>
                            </li>
                        </ul>
                        <div className="nav-btn-box">
                            <a href="https://discord.gg/VxkC8zmbWP" target="_blank"> Join Discord </a>
                        </div>
                    </div>
                </div>
            </nav>



        </div>
    )
}

export default Navbar
