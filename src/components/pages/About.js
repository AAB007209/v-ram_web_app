import React from "react";
import { Link } from "react-router-dom";
import VMC from "../inc/Vmc";

function AboutUs() {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="main-heading">Our Project</h3>
                        <div className="underline mx-auto"></div>
                        <p>
                            V-RAMP which stands for Voice based Remote Medical
                            Assistant During Pandemic is designed and developed
                            with the intention of serving the society by
                            building user-friendly application
                        </p>
                        <Link to="/about" className="btn btn-warning shadow">
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
            <VMC />
        </section>
    );
}

export default AboutUs;
