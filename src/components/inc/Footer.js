import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-3">
                        <h6>Project Information</h6>
                        <hr />
                        <p className="para">
                            V-RAMP which stands for Voice based Remote Medical
                            Assistant During Pandemic is designed and developed
                            with the intention of serving the society by
                            building user-friendly application
                        </p>
                    </div>
                    <div className="col-md-4 p-3">
                        <h6>Quick Links</h6>
                        <hr />
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/about">About</Link>
                        </div>
                        <div>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                    <div className="col-md-4 p-3">
                        <h6>Contact Information</h6>
                        <hr />
                        <div>
                            <p className="text-white mb-1">
                                Nitte Meenakshi Institute of Technology,
                                Bangalore
                            </p>
                        </div>
                        <div>
                            <p className="text-white mb-1">+91 888XXXXX92</p>
                        </div>
                        <div>
                            <p className="text-white mb-1">+91 888XXXXX92</p>
                        </div>
                        <div>
                            <p className="text-white mb-1">test@gmail.com</p>
                        </div>
                        {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
