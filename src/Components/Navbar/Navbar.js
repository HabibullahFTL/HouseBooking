import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">

                <Link to="/" class="navbar-brand">DENTAL CARE</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 text-secondary">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 text-secondary">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 text-secondary">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/contact" class="nav-link ms-3 text-secondary">Contact</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/Login" class="nav-link ms-3 text-secondary">Login</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;