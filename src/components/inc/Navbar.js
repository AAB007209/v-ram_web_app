import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar-dark bg-dark shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <Link to="/" class="navbar-brand">
                                    V-RAMP
                                </Link>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarScroll"
                                    aria-controls="navbarScroll"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div
                                    class="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <Link
                                                to="/"
                                                class="nav-link active"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/about" class="nav-link">
                                                About Us
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link
                                                to="/contact"
                                                class="nav-link"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link disabled">
                                                Login
                                            </a>
                                        </li>
                                        {/* <li class="nav-item">
                                            <a class="nav-link disabled">
                                                Register
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
