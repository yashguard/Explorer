import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../image/videocall.png";
import img2 from "../image/shield.png";
import img3 from "../image/online-support.png";
import img4 from "../image/choose-1.png";
import img5 from "../image/choose-2.png";
import img6 from "../image/choose-3.png";
import img7 from "../image/choose-shape-1.png";
import img8 from "../image/choose-shape-2.png";
import { BsFillPlayFill } from 'react-icons/bs';

function ChooseSection() {
  return (
    <section className="choose-section padding100">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-lg-12 col-xl-5 col-xxl-6 order-2 order-xl-1">
            <div className="common-class">
              <span className="fs-6 fw-bolder text-danger text-capitalize ps-5">
                Why Choose Us
              </span>
              <h2 className="display-4 fw-bold lh-1 py-3">
                We ensure the best solution for you
              </h2>
            </div>
            <div className="choose-info mt-4">
              <div className="choose-details row my-4">
                <div className="col-1 p-0">
                  <img src={img1} className="w-100" />
                </div>
                <div className="col-11 px-4">
                  <h5 className="fw-bold">User Friendly</h5>
                  <p className="fw-normal">
                    Experiences that keep your customers coming back for more
                    services Makes best effort.
                  </p>
                </div>
              </div>
              <div className="choose-details row my-4">
                <div className="col-1 p-0">
                  <img src={img2} className="w-100" />
                </div>
                <div className="col-11 px-4">
                  <h5 className="fw-bold">Trusted & Secured</h5>
                  <p className="fw-normal">
                    Experiences that keep your customers coming back for more
                    services Makes best effort.
                  </p>
                </div>
              </div>
              <div className="choose-details row my-4">
                <div className="col-1 p-0">
                  <img src={img3} className="w-100" />
                </div>
                <div className="col-11 px-4">
                  <h5 className="fw-bold">24/7 Fast Support</h5>
                  <p className="fw-normal">
                    Experiences that keep your customers coming back for more
                    services Makes best effort.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="choose-area-images text-center col-12 col-lg-12 col-xl-7 col-xxl-6 order-1 order-xl-2">
            <div className="choose-area h-100 col-12 col-md-9 col-lg-8 col-xl-12">
              <img src={img4} className="choose-1 d-none d-sm-block" />
              <img src={img5} className="choose-2" />
              <img src={img6} className="choose-3" />
              <div className="play-button">
                <a href="#" className="d-block m-auto bg-danger fs-3">
                  <BsFillPlayFill />
                </a>
              </div>
              <img src={img7} className="choose-shape-1 d-none d-sm-block" />
              <img src={img8} className="choose-shape-2 d-none d-sm-block" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ChooseSection;
