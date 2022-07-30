import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "../inc/Vmc";
import Service1 from "../images/8.jpg";
import Service2 from "../images/3.jpg";
import Service3 from "../images/4.jpg";

function Home() {
    return (
        <div>
            <Slider />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Project</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                V-RAMP which stands for Voice based Remote
                                Medical Assistant During Pandemic is designed
                                and developed with the intention of serving the
                                society by building user-friendly application
                            </p>
                            <Link
                                to="/about"
                                className="btn btn-warning shadow"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission and Vision */}
            <VMC />

            {/* Our Servies */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 md-5 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        <div className="col-md-4 mt-3">
                            <div className="card shadow">
                                <img
                                    src={Service2}
                                    className="w-100 border-bottom"
                                    alt="Services"
                                />
                                <div className="card-body">
                                    <h6>Voice-Bot</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Users can interact with the voice-bot we
                                        provide which will give the priliminary
                                        medications at initial stages.
                                    </p>
                                    <Link
                                        to="/services"
                                        className="btn btn-link"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="card shadow">
                                <img
                                    src={Service3}
                                    className="w-100 border-bottom"
                                    alt="Services"
                                />
                                <div className="card-body">
                                    <h6>Best Doctors</h6>
                                    <div className="underline"></div>
                                    <p>
                                        If the user wants to go further about
                                        then we recommend them the best doctors
                                        available in and around the users
                                        location.
                                    </p>
                                    <Link
                                        to="/services"
                                        className="btn btn-link"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="card shadow">
                                <img
                                    src={Service1}
                                    className="w-100 border-bottom"
                                    alt="Services"
                                />
                                <div className="card-body">
                                    <h6>Recommendation System</h6>
                                    <div className="underline"></div>
                                    <p>
                                        We also recommend the nearest
                                        hospitals,prescribed medications and
                                        much more to the user.
                                    </p>
                                    <Link
                                        to="/services"
                                        className="btn btn-link"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
