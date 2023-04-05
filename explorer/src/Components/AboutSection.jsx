import React from "react";
import img1 from "../image/about-img-1.jpg";
import img2 from "../image/about-img-2.jpg";
import img3 from "../image/about-shape-1.png";
import img4 from "../image/about-shape-2.png";
import img5 from "../image/about-shape-3.png";
import img6 from "../image/about-shape-4.png";
import img7 from "../image/about-shape-5.png";
import img8 from "../image/choose-shape-2.png";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutSection(props) {
  return (
    <section className="about-section padding100">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="about-image col-12 col-md-11 col-lg-8 col-xl-6">
            <img src={img1} className="image-1 rounded-top" alt="" />
            <img src={img2} className="image-2" alt="" />
            <img src={img3} className="shape-1" alt="" />
            <img src={img4} className="shape-2" alt="" />
            <img src={img5} className="shape-3 d-none d-xxl-block" alt="" />
            <img src={img6} className="shape-4 d-none d-xxl-block" alt="" />
            <img src={img7} className="shape-5 d-none d-md-block" alt="" />
            <img src={img8} className="shape-6" alt="" />
          </Col>
          <Col className="col-12 col-md-11 col-lg-8 col-xl-6">
            <div className="common-className">
              <span className="fs-6 fw-bold clr-theme-1 text-capitalize ps-5">
                about company
              </span>
              <h2 className="display-3 fw-bold lh-1">
                We make creative plane for agency solution
              </h2>
              <p className="fs-6 fw-semibold lh-lg my-3">
                Always recognize that your blog's primary purpose is marketing
                and driving new traffic to buy from you. While you do want to
                inform, and in some cases entertain agency. Spark creativity and
                craft beautiful store experiences with design tools that you
                want.
              </p>
              <button
                style={{
                  backgroundColor:
                    props.check == true ? `${props.colors}` : "#dc3545",
                  transition: "all 0.5s",
                }}
                className="common-btn px-4 py-3 rounded-3 border-0 text-white text-uppercase fw-bolder"
              >
                know more
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
