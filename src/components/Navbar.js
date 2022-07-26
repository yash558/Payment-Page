import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white shadow-sm">
                <div className="container-fluid">
                    <div className="">
                        <img src={logo} alt="logo" className='mx-1 mt-1' />
                    </div>
                    <a className="navbar-brand my-0" href="/"><span style={{ color: "orange" }}>E-</span>Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-lg-0 fs-5">
                            <li className="nav-item px-2">
                                <a className="nav-link active" aria-current="page" href="/">Men</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active" href="/">Women</a>
                            </li>

                            <li className="nav-item px-4">
                                <a className="nav-link active" href="/">Kids</a>
                            </li>
                        </ul>
                        <div className="justify-content-sm-center">
                            <ul className='d-flex flex-row fs-4 mt-1 pt-1'>
                                <div className='mx-3'><i className="fa fa-search"></i></div>
                                <div className='mx-3'><i className="fa fa-shopping-cart"></i></div>
                                <div className='mx-3'><i className="fa fa-user-circle-o"></i></div>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar