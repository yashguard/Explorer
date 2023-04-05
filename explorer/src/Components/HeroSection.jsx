import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bgImg1 from "../image/slider-bg-1.jpg";
import bgImg2 from "../image/slider-bg-1a.jpg";
import bgImg3 from "../image/slider-bg-1b.jpg";

function HeroSection(props) {
  return (
    <section className="hero-section">
      <Carousel fade>
        <Carousel.Item className="vh-100">
          <img className="d-block w-100" src={bgImg1} alt="First slide" />
          <Carousel.Caption>
            <h1 className="display-2 fw-semibold lh-1">
              Digital{" "}
              <span
                style={{
                  color: props.check == true ? `${props.colors}` : "#dc3545",
                  transition: "all 0.5s",
                }}
              >
                Marketing
              </span>
              <br />
              Campaigns
            </h1>
            <p className="fw-normal my-4">
              Explore your digital business agency with Saja and Thanks for
              having a look
              <br />
              latest update and new product.{" "}
            </p>
            <button
              style={{
                backgroundColor: props.check == true ? `${props.colors}` : "#dc3545",
                transition: "all 0.5s"
              }}
              className="common-btn px-4 py-3 rounded-3 border-0 text-white d-block m-auto"
            >
              Explore Us
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="vh-100">
          <img className="d-block w-100" src={bgImg2} alt="First slide" />
          <Carousel.Caption>
            <h1 className="display-2 fw-semibold lh-1">
              Unique{" "}
              <span
                style={{
                  color: props.check == true ? `${props.colors}` : "#dc3545",
                  transition: "all 0.5s"
                }}
              >
                Design
              </span>
              <br />
              Solution
            </h1>
            <p className="fw-normal my-4">
              Explore your digital business agency with Saja and Thanks for
              having a look
              <br />
              latest update and new product.{" "}
            </p>
            <button
              style={{
                backgroundColor: props.check == true ? `${props.colors}` : "#dc3545",
                transition: "all 0.5s"
              }}
              className="common-btn px-4 py-3 rounded-3 border-0 text-white d-block m-auto"
            >
              Explore Us
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="vh-100">
          <img className="d-block w-100" src={bgImg3} alt="First slide" />
          <Carousel.Caption>
            <h1 className="display-2 fw-semibold lh-1">
              Modern{" "}
              <span
                style={{
                  color: props.check == true ? `${props.colors}` : "#dc3545",
                  transition: "all 0.5s"
                }}
              >
                Website
              </span>
              <br />
              Building
            </h1>
            <p className="fw-normal my-4">
              Explore your digital business agency with Saja and Thanks for
              having a look
              <br />
              latest{" "}
            </p>
            <button
              style={{
                backgroundColor: props.check == true ? `${props.colors}` : "#dc3545",
                transition: "all 0.5s"
              }}
              className="common-btn px-4 py-3 rounded-3 border-0 text-white d-block m-auto"
            >
              Explore Us
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default HeroSection;
