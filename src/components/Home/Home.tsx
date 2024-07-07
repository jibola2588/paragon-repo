// @ts-nocheck

import React, { useRef } from "react";
import "./home.css";
import DopeNew from "../Img/DopeNew.png";
import StudentsImage from "../Img/StudentImage.png";
import contactImg from "../Img/contactImg.png";
import iconper from "../Img/iconpersonalised.png";
import iconadm from "../Img/iconadm.png";
import iconapp from "../Img/iconapp.png";
import iconexp from "../Img/iconexp.png";
import iconcar from "../Img/iconcar.png";
import iconint from "../Img/iconint.png";
import iconedu from "../Img/iconedu.png";
import iconpre from "../Img/iconpre.png";
import iconext from "../Img/iconext.png";
import { Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { Quote } from "react-bootstrap-icons";
import userOne from "../Img/userOne.png";
import paragonLogo from "../Img/paragonLogo.png";
import instagram from "../Img/instagram.png";
import linkedin from "../Img/linkedin.png";
import facebook from "../Img/facebook.png";
import phone from "../Img/phone.png";
import emailPix from "../Img/email.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Book from "../Img/Book.png";
import ColorCloud from "../Img/ColorCloud.png";
import FadedCloud from "../Img/FadedCloud.png";
import hat from "../Img/hat.png";
import poland from "../Img/poland.png";
import Estonia from "../Img/Estonia.png";
import finland from "../Img/finland.png";
import usa from "../Img/usa.png";
import japan from "../Img/japan.png";
import moldova from "../Img/moldova.png";
import sweden from "../Img/sweden.png";
import singapore from "../Img/singapore.png";
import southkorea from "../Img/south-korea.png";
import luxembourg from "../Img/luxembourg.png";
import canada from "../Img/canada.png";
import ruleone from "../Img/ruleone.png";
import ruletwo from "../Img/ruletwo.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const testimonyArray = [
  `Thanks to Paragon, I felt confident and prepared for my new life in a foreign country. Their guidance was invaluable, 
providing me with the necessary tools and knowledge to navigate this exciting journey. From visa assistance to cultural 
integration tips, Paragon's support was comprehensive and reassuring.`,

  `Paragon made my transition to a foreign country seamless and stress-free. Their expert guidance and support were invaluable, 
helping me feel fully prepared and confident as I embarked on this new chapter of my life. From visa application to cultural orientation,
Paragon's assistance was thorough and tailored to my needs.`,

  `Paragon's expert guidance and support were instrumental in my successful move to a foreign country. 
Thanks to them, I felt confident and well-prepared for this new adventure!`,

  `I am incredibly grateful to Paragon for their invaluable assistance. Thanks to them, 
I felt completely prepared and confident as I started my new life in a foreign country.`,
];

const Home = () => {
  const lastChance = useRef<HTMLDivElement>(null);

  const ScrolltoService = () => {
    lastChance.current.scrollIntoView({ behavior: "smooth" });
    console.log(ScrolltoService, "scrolling");
  };

  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();

    toast.success("Your application has been submitted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result: any) => {
          console.log(result);
        },
        (error: any) => {
          console.log(error);
        }
      );

    form.current.reset();
  };

  return (
    <div className="home-body">
      {/* header section */}
      <Navbar expand="lg" fixed="top" style={{ backgroundColor: "#ffffff" }}>
        <Container>
          <Navbar.Brand
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "30px",
              cursor: "pointer",
            }}
          >
            <img
              className="kelelogo"
              src={paragonLogo}
              style={{ height: "70px", width: "auto" }}
              alt="russian flag"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto  my-lg-0 ms-5">
              <Nav.Link
                href="#home"
                style={{
                  marginLeft: "20px",
                  color: "#3F556B",
                  fontSize: "18px",
                }}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#about"
                style={{
                  marginLeft: "20px",
                  color: "#3F556B",
                  fontSize: "18px",
                }}
              >
                About
              </Nav.Link>

              <Nav.Link
                href="#services"
                style={{
                  marginLeft: "20px",
                  color: "#3F556B",
                  fontSize: "18px",
                }}
              >
                Services
              </Nav.Link>
            </Nav>
            <a href="#contact">
              <Button
                className="bookaservice-btn mx-2"
                style={{
                  backgroundColor: "#F3C545",
                  color: "#00999F",
                  borderRadius: "50px",
                  width: "150px",
                }}
              >
                Contact
              </Button>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* herosection */}
      <div
        id="home"
        className="herosection text-center"
        style={{ marginTop: "" }}
      >
        <h3 style={{ fontSize: "46px", fontWeight: "bold" }}>
          Your Gateway to{" "}
          <span style={{ color: "#00999F" }}>Global Education</span>
        </h3>
        <h3 style={{ fontSize: "46px", fontWeight: "bold" }}>
          Unlocking Opportunities,
        </h3>
        <h3 style={{ fontSize: "46px", fontWeight: "bold" }}>
          Enriching Lives
        </h3>
      </div>
      <div className="text-center mt-5">
        <Button
          onClick={ScrolltoService}
          className="btn-style text-center"
          style={{
            borderRadius: "100px",
            backgroundColor: "#F3C545",
            color: "#00999F",
            width: "200px",
            height: "46px",
            position: "relative",
            zIndex: "999",
          }}
        >
          Our Services
        </Button>
      </div>

      <div className="herosection-img text-center">
        <img className="img-fluid" src={DopeNew} alt="DopeNew" />
      </div>

      {/* floating images */}
      <div className="floating-img">
        <img className="hat" src={hat} alt="hat" />
        <img className="book" src={Book} alt="book" />
        <img className="colorcloud" src={ColorCloud} alt="colorcloud" />
        <img className="fadedcloud" src={FadedCloud} alt="fadedcloud" />
        <img className="fadedcloudtwo" src={FadedCloud} alt="fadedcloud" />
      </div>

      {/* Countries section  */}
      <div className="text-center mb-5" style={{ marginTop: "80px" }}>
        <h3 style={{ fontSize: "36px", fontWeight: "bold" }}>
          Explore <span style={{ color: "#00999F" }}>the</span>{" "}
        </h3>
        <h3 style={{ fontSize: "36px", fontWeight: "bold" }}>
          {" "}
          <span style={{ color: "#00999F" }}>Countries</span> We Support.
        </h3>
      </div>

      <div
        className="compflag"
        style={{
          background: "#DDF2F2",
          marginTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Container>
          <div className="country-grid" style={{ paddingTop: "50px" }}>
            <div className="country-row">
              <div className="country-item">
                <img
                  className="me-2"
                  src={poland}
                  style={{ height: "50px", width: "auto" }}
                  alt="poland"
                />
                <span className="country-name">Poland</span>
              </div>
              <div className="country-item">
                <img
                  className="me-2"
                  src={canada}
                  style={{ height: "50px", width: "auto" }}
                  alt="canada"
                />
                <span className="country-name">Canada</span>
              </div>
              <div className="country-item">
                <img
                  className="me-2"
                  src={usa}
                  style={{ height: "50px", width: "auto" }}
                  alt="usa"
                />
                <span className="country-name">USA</span>
              </div>
              <div className="country-item">
                <img
                  className="me-2"
                  src={Estonia}
                  style={{ height: "50px", width: "auto" }}
                  alt="estonia"
                />
                <span className="country-name">Estonia</span>
              </div>
              <div className="country-item">
                <img
                  className="me-2"
                  src={finland}
                  style={{ height: "50px", width: "auto" }}
                  alt="finland"
                />
                <span className="country-name">Finland</span>
              </div>
              <div className="country-item">
                <img
                  className="me-2"
                  src={japan}
                  style={{ height: "50px", width: "auto" }}
                  alt="japan"
                />
                <span className="country-name">Japan</span>
              </div>
            </div>
            <div className="country-row">
              <div className="country-item">
                <img
                  className="me-2"
                  src={moldova}
                  style={{ height: "50px", width: "auto" }}
                  alt="moldova"
                />
                <span className="country-name">Moldova</span>
              </div>
              <div className="country-item">
                <img
                  className="me-2"
                  src={sweden}
                  style={{ height: "50px", width: "auto" }}
                  alt="sweden"
                />
                <span className="country-name">Sweden</span>
              </div>
              <div className="country-item">
                <img
                  className="me-2"
                  src={singapore}
                  style={{ height: "50px", width: "auto" }}
                  alt="singapore"
                />
                <span className="country-name">Singapore</span>
              </div>
              <div className="country-item">
                <img
                  className="me-2"
                  src={southkorea}
                  style={{ height: "50px", width: "auto" }}
                  alt="southkorea"
                />
                <span className="country-name">South Korea</span>
              </div>
              <div className="country-item">
                <img
                  className="me-2"
                  src={luxembourg}
                  style={{ height: "50px", width: "auto" }}
                  alt="luxembourg"
                />
                <span className="country-name">Luxembourg</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* About Section  */}
      <div id="about" className="about-section mb-5 mt-3">
        <Container>
          <Row>
            <Col className=" text-center mt-5">
              <img
                className="Student_Img"
                src={StudentsImage}
                alt="StudentImage"
              />
            </Col>
            <Col className="mt-5">
              <h2
                className="mb-3 mt-3"
                style={{ fontSize: "36px", fontWeight: "bold" }}
              >
                Shortcut to <br /> Your{" "}
                <span
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: "#00999F",
                  }}
                >
                  {" "}
                  Dream School{" "}
                </span>
              </h2>
              <p className="About-paragon">
                At Paragon Education Excellence, we believe that education has
                the power to transform lives. Our mission is to empower
                individuals to pursue their dreams of studying abroad by
                providing comprehensive educational advisory services
              </p>

              <h5 className="chooseUS mt-3" style={{ fontWeight: "bold" }}>
                Why Choose Us?
              </h5>
              <div className="ruleone">
                <img
                  className=""
                  src={ruleone}
                  style={{ height: "8px", width: "100px", marginTop: "-20px" }}
                  alt="rule"
                />
              </div>

              <div
                className="mb-2"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                <img
                  className="me-3"
                  src={iconper}
                  style={{ height: "50px", width: "auto" }}
                  alt="icon"
                />
                Personalized Approach
              </div>
              <p className="about-paragraphy">
                We understand that each student is unique, with their own goals
                and aspirations. That's why we provide personalized guidance
                tailored to your individual needs.
              </p>

              <div
                className="mb-2"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                <img
                  className="me-3"
                  src={iconext}
                  style={{ height: "50px", width: "auto" }}
                  alt="icon"
                />
                Extensive Network
              </div>
              <p className="about-paragraphy">
                Through our partnerships with prestigious universities and
                institutions around the world, we offer a wide range of options
                to suit your academic and career goals.
              </p>

              <div
                className="mb-2"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                <img
                  className="me-3"
                  src={iconexp}
                  style={{ height: "50px", width: "auto" }}
                  alt="icon"
                />
                Experienced Team
              </div>
              <p className="about-paragraphy">
                Our team of experienced educational advisors and consultants are
                here to support you throughout your journey, from selecting the
                right program to settling into your new life abroad.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Service Section  */}

      <div
        id="services"
        className="mt-3"
        ref={lastChance}
        style={{ background: "#DDF2F2", height: "", paddingTop: "20px" }}
      >
        <Container>
          <h3
            className="text-center"
            style={{ fontSize: "36px", fontWeight: "bold", paddingTop: "50px" }}
          >
            Services Overview
          </h3>
          <div className="d-flex justify-content-center">
            <img
              src={ruletwo}
              style={{ height: "8px", width: "200px", marginTop: "" }}
              alt="rule"
            />
          </div>
          <p className="text-center mt-3 mb-5">
            Empowering Your Educational Journey. Our range of services, from
            admission assistance to <br />
            post-arrival support, ensures a smooth transition into your dream
            academic destination.
          </p>

          <Row className="gx-3 mb-3">
            <Col xs={12} md={4}>
              <div
                className="service-card-item"
                style={{
                  background: "#ffffff",
                  height: "200px",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                <img
                  className="me-3"
                  src={iconadm}
                  style={{ height: "50px", width: "auto" }}
                  alt="icon"
                />
                <div className="mt-3 mb-2" style={{ fontWeight: "bold" }}>
                  Admission Assistance
                </div>
                <p>
                  Personalized consultations to identify goals and aspirations.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div
                className="service-card-item"
                style={{
                  background: "#ffffff",
                  height: "200px",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                <img
                  className="me-3"
                  src={iconint}
                  style={{ height: "50px", width: "auto" }}
                  alt="icon"
                />
                <div
                  className="service-card-item mt-3 mb-2"
                  style={{ fontWeight: "bold" }}
                >
                  Integration Support
                </div>
                <p>
                  Guidance on completing applications, essay editing, and
                  interview preparation.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div
                style={{
                  background: "#ffffff",
                  height: "200px",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                <img
                  className="me-3"
                  src={iconcar}
                  style={{ height: "50px", width: "auto" }}
                  alt="icon"
                />
                <div
                  className="service-card-item mt-3 mb-2"
                  style={{ fontWeight: "bold" }}
                >
                  Career Guidance
                </div>
                <p>
                  Workshops and seminars to prepare students for life abroad.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="gx-3">
            <Col xs={12} md={4}>
              <div
                className="service-card-item"
                style={{
                  background: "#ffffff",
                  height: "200px",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                <img
                  className="me-3"
                  src={iconedu}
                  style={{ height: "50px", width: "auto" }}
                  alt="icon"
                />
                <div
                  className="service-card-item mt-3 mb-2"
                  style={{ fontWeight: "bold" }}
                >
                  Educational Counseling
                </div>
                <p>
                  Tailored guidance sessions to clarify academic objectives and
                  ambitions.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div
                className="service-card-item"
                style={{
                  background: "#ffffff",
                  height: "200px",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                <img
                  className="me-3"
                  src={iconapp}
                  style={{ height: "50px", width: "auto" }}
                  alt="icon"
                />
                <div
                  className="service-card-item mt-3 mb-2"
                  style={{ fontWeight: "bold" }}
                >
                  Application Assistance
                </div>
                <p>
                  Personalized aid in navigating the application process for
                  educational programs.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div
                className="service-card-item"
                style={{
                  background: "#ffffff",
                  height: "200px",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                <img
                  className="me-3"
                  src={iconpre}
                  style={{ height: "50px", width: "auto" }}
                  alt="icon"
                />
                <div
                  className="service-card-item mt-3 mb-2"
                  style={{ fontWeight: "bold" }}
                >
                  Pre-Departure Preparation
                </div>
                <p>
                  Customized support for smooth transitions and preparations
                  before departure.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Testimonial Section  */}
      <div
        id="testimonial"
        className="testimonial-one text-center"
        style={{ marginTop: "50px" }}
      >
        <h3
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#00999F",
            marginTop: "30px",
          }}
        >
          Testimonial
        </h3>
        <p>Discover What Our Clients Have to Say About Their Experience</p>
      </div>

      {/* Testimonial Itself */}

      <div
        className="testimonial-two d-flex justify-content-center align-items-center"
        id="testimonial-wrapper"
        style={{ height: "auto", background: "#F7F9F9" }}
      >
        <div className="row testimonial-section text-white">
          <Carousel>
            <Carousel.Item>
              <div className="carousel-div">
                <Carousel.Caption className="caption">
                  <div className="caption-wrapper">
                    <div className="carousel-img-wrapper">
                      <img alt="" src={userOne}></img>
                    </div>
                    {/* <h3 className='Testi-header'>Testimonial</h3> */}
                    <span>
                      <Quote className="quote-icon" />
                    </span>
                    <p className="testimony-content">{testimonyArray[0]}</p>
                    <p>Mariam</p>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-div">
                <Carousel.Caption className="caption">
                  <div className="caption-wrapper">
                    <div className="carousel-img-wrapper">
                      <img alt="" src={userOne}></img>
                    </div>
                    {/* <h3 className='Testi-header'>Testimonial</h3> */}
                    <span>
                      <Quote className="quote-icon" />
                    </span>
                    <p className="testimony-content">{testimonyArray[1]}</p>
                    <p>Janet</p>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-div">
                <Carousel.Caption className="caption">
                  <div className="caption-wrapper">
                    <div className="carousel-img-wrapper">
                      <img alt="" src={userOne}></img>
                    </div>
                    {/* <h3 className='Testi-header'>Testimonial</h3> */}
                    <span>
                      <Quote className="quote-icon" />
                    </span>
                    <p className="testimony-content">{testimonyArray[2]}</p>
                    <p>Zaniab</p>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-div">
                <Carousel.Caption className="caption">
                  <div className="caption-wrapper">
                    <div className="carousel-img-wrapper">
                      <img
                        width="100px"
                        height="100px"
                        alt=""
                        src={userOne}
                        style={{ borderRadius: "50%" }}
                      ></img>
                    </div>
                    {/* <h3 className='Testi-header'>Testimonial</h3> */}
                    <span>
                      <Quote className="quote-icon" />
                    </span>
                    <p className="testimony-content">{testimonyArray[3]}</p>
                    <p>Adebisi</p>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* Contact Section  */}
      <div id="contact" className="text-center" style={{ marginTop: "50px" }}>
        <h3
          className="contact-section-one"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#00999F",
            marginTop: "30px",
          }}
        >
          Contact Us
        </h3>
        <p className="contact-section-two">
          Ready to embark on your educational journey abroad? <br />
          Contact us today to learn more about how Paragon Education Excellence
          can help you achieve your goals.
        </p>
      </div>
      <div className="contact-section">
    <ToastContainer />
    <Row className="mb-5 justify-content-center">
      <Col xs={12} md={6} className="d-flex flex-column align-items-center order-2 order-md-1">
        <Form onSubmit={sendEmail} ref={form} className="contact-form">
          <Form.Group controlId="full-name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              name="fullname"
              className="mb-3"
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="mb-3"
              required
            />
          </Form.Group>
          <Form.Group controlId="phone-number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              name="phonenumber"
              className="mb-3"
              required
            />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
              name="message"
              className="mb-3"
              required
            />
          </Form.Group>
          <Button type="submit" className="submit-button">
            Submit
          </Button>
        </Form>
      </Col>
      <Col xs={12} md={6} className="d-flex flex-column align-items-center order-1 order-md-2">
        <img
          className="contact-img"
          src={contactImg}
          alt="contact"
        />
      </Col>
    </Row>
  </div>

      {/* Footer Itself */}

      <div
        className=""
        style={{ backgroundColor: "#000000", paddingTop: "20px" }}
      >
        <div className="my-3 px-3 rounded shadow-sm">
          <Row className="pb-5">
            <Col
              sm={4}
              className="text-start footer"
              style={{ padding: "0 50px" }}
            >
              <img
                className="me-3 mb-5 mt-5"
                src={paragonLogo}
                style={{ height: "90px", width: "auto" }}
                alt="icon"
              />

              <p className="text-white">
                At Paragon Education Excellence, we believe that education has
                the power to transform lives. Our mission is to empower
                individuals to pursue their dreams of studying abroad by
                providing comprehensive educational advisory services
              </p>
              <div>
                <img
                  className=""
                  src={instagram}
                  style={{ height: "24px", width: "auto" }}
                  alt="instagram"
                />
                <img
                  className=""
                  src={linkedin}
                  style={{ height: "24px", width: "auto" }}
                  alt="linkedin"
                />
                <img
                  className=""
                  src={facebook}
                  style={{ height: "24px", width: "auto" }}
                  alt="facebook"
                />
              </div>
            </Col>

            <Col
              sm={2}
              className="text-start footer"
              style={{ padding: "0 20px" }}
            >
              <h5 className="text-white mb-5 mt-5">Useful Links</h5>
              <p>
                <span></span>
              </p>
              <div className=" text-white spacer10">About</div>
              <p>
                <span></span>
              </p>
              <div className=" text-white spacer10">Testimonial</div>
              <p>
                <span></span>
              </p>
              <div className=" text-white spacer10">Why choose us?</div>
              <p>
                <span></span>
              </p>
              <div className=" text-white spacer10">Contact</div>
            </Col>

            <Col sm={2} className="text-start" style={{ padding: "0 20px" }}>
              <h5 className="text-white mb-5 mt-5"> Our Services</h5>
              <p>
                <span></span>
              </p>
              <div className=" text-white spacer10">Educational Counseling</div>
              <p>
                <span></span>
              </p>
              <div className=" text-white spacer10">Application Assistance</div>
              <p>
                <span></span>
              </p>
              <div className=" text-white spacer10">Academic Support</div>
              <p>
                <span></span>
              </p>
              <div className=" text-white spacer10">Career Guidance</div>
            </Col>

            <Col sm={2} className="text-start" style={{ padding: "0 20px" }}>
              <h5 className="text-white mb-5 mt-5"> Contact Information </h5>
              <p>
                <span></span>
              </p>
              <div className="text-white">
                <div>
                  <img
                    className=""
                    src={phone}
                    style={{ height: "24px", width: "auto" }}
                    alt="phone"
                  />
                </div>
                +372 5302 6659{" "}
              </div>
              <div className="text-white">
                <img
                  className=""
                  src={emailPix}
                  style={{ height: "24px", width: "auto" }}
                  alt="email"
                />{" "}
                info@paragonacademicex.com
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
