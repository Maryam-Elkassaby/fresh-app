import React from "react";
import Style from "./Navbar.module.css";
import Logo from '../Assets/freshcart-logo.svg'
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" aria-current="page">
                                Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Categories">
                                Categories
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Products">
                                Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Brands">
                                Brands
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Cart">
                                Cart
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li className="nav-item d-flex align-items-center">
                                <i class="fab fa-whatsapp mx-1 cursor-pointer" to="#" ></i>
                                <i class="fab fa-facebook mx-1 cursor-pointer" to="#"></i>
                                <i class="fab fa-instagram mx-1 cursor-pointer" to="#"></i>
                                <i class="fab fa-Twitter mx-1 cursor-pointer" to="#"></i>
                                <i class="fab fa-tiktok mx-1 cursor-pointer" to="#" ></i>
                                <i class="fab fa-youtube mx-1 cursor-pointer" to="#" ></i>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Register">
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
