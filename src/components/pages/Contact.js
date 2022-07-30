import React from "react";
import profile from "../images/Profile.png";

function Contact() {
    return (
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 md-5 text-center">
                        <h3 className="main-heading">Our Team</h3>
                        <div className="underline mx-auto"></div>
                    </div>

                    <div className="col-md-4 mt-3 p-5">
                        <div className="card shadow">
                            <img
                                src={profile}
                                className="w-100 border-bottom"
                                alt="Services"
                            />
                            <div className="card-body">
                                <h6>Preethi Prerana</h6>
                                <div className="underline"></div>
                                <p>
                                    A 3rd year undergrad student learning
                                    different skills and implementing them.
                                </p>
                                <h6>Email: 1nt19cs142.preethi@nmit.ac.in</h6>
                                {/* <Link to="/services" className="btn btn-link">
                                        Read more
                                    </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 p-5">
                        <div className="card shadow">
                            <img
                                src={profile}
                                className="w-100 border-bottom"
                                alt="Services"
                            />
                            <div className="card-body">
                                <h6>Rakesh R</h6>
                                <div className="underline"></div>
                                <p>
                                    A 3rd year undergrad student learning
                                    different skills and implementing them.
                                </p>
                                <h6>Email: 1nt19cs145.rakesh@nmit.ac.in</h6>
                                {/* <Link to="/services" className="btn btn-link">
                                        Read more
                                    </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 p-5">
                        <div className="card shadow">
                            <img
                                src={profile}
                                className="w-100 border-bottom"
                                alt="Services"
                            />
                            <div className="card-body">
                                <h6>Akash A Benki</h6>
                                <div className="underline"></div>
                                <p>
                                    A 3rd year undergrad student learning
                                    different skills and implementing them.
                                </p>
                                <h6>Email: 1nt19cs020.akash@nmit.ac.in</h6>
                                {/* <Link to="/services" className="btn btn-link">
                                        Read more
                                    </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
