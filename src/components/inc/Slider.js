import React from "react";
import slider1 from "../images/5.jpg";
import slider4 from "../images/slider4.jpg";
import slider3 from "../images/slider3.jpg";

function Slider() {
    return (
        <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
        >
            <div class="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="50000">
                    <img
                        src={slider1}
                        class="d-block w-100"
                        alt="..."
                        height={700}
                    />
                    <div class="carousel-caption d-none d-md-block">
                        {/* <h5>Picture 1</h5> */}
                        <p>User interacting with the Doctor</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img
                        src={slider4}
                        class="d-block w-100"
                        alt="..."
                        height={700}
                    />
                    <div class="carousel-caption d-none d-md-block">
                        {/* <h5>Picture 2</h5> */}
                        <p>A Team of Doctors available</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img
                        src={slider3}
                        class="d-block w-100"
                        alt="..."
                        height={700}
                    />
                    <div class="carousel-caption d-none d-md-block">
                        {/* <h5>Picture 3</h5> */}
                        <p>Doctor analyzing the Report</p>
                    </div>
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;
