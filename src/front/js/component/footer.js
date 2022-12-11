import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <section className="py-20 bg-light overflow-hidden">
      <div className="container">
        <div className="text-center pb-20 border-bottom">
          <a className="d-inline-block mb-20" href="#"></a>
          <ul className="row align-items-center justify-content-center list-unstyled mb-n4">
            <li className="col-12 col-sm-6 col-md-4 col-lg-auto mb-4">
              <a className="btn bg-white py-2 rounded-pill" href="#">
                Our Product Philosophy
              </a>
            </li>
            <li className="col-12 col-sm-6 col-md-4 col-lg-auto mb-4">
              <a className="btn bg-white py-2 rounded-pill" href="#">
                Cash Payment
              </a>
            </li>
            <li className="col-12 col-sm-6 col-md-4 col-lg-auto mb-4">
              <a className="btn bg-white py-2 rounded-pill" href="#">
                User Experiences
              </a>
            </li>
            <li className="col-12 col-sm-6 col-md-4 col-lg-auto mb-4">
              <a className="btn bg-white py-2 rounded-pill" href="#">
                E-Skating-Tutorial
              </a>
            </li>
            <li className="col-12 col-sm-6 col-md-4 col-lg-auto mb-4">
              <a className="btn bg-white py-2 rounded-pill" href="#">
                Nice Skating Tours in Miami
              </a>
            </li>
            <li className="col-12 col-sm-6 col-md-4 col-lg-auto mb-4">
              <a className="btn bg-white py-2 rounded-pill" href="#">
                VIDEOS of E-Skating
              </a>
            </li>
            <li className="col-12 col-sm-6 col-md-4 col-lg-auto mb-4">
              <a className="btn bg-white py-2 rounded-pill" href="#">
                Contact
              </a>
            </li>
            <li className="col-12 col-sm-6 col-md-4 col-lg-auto mb-4">
              <a className="btn bg-white py-2 rounded-pill">
                <Link to="/Aboutus">
                  <p className="btn bg-white py-2 rounded-pill"> About us </p>
                </Link>
              </a>
            </li>
          </ul>
          <div className="row mt-20 text-start">
            <div className="col-12 col-lg-auto mb-10 mb-lg-0">
              <h6 className="mb-3 lead fw-bold text-primary">Contact Us</h6>
              <p className="h4">+49 172 7778409</p>
            </div>
            <div className="col-12 col-lg-auto mb-10 mb-lg-0">
              <h6 className="mb-3 lead fw-bold text-primary">Email</h6>
              <p className="h4">electrical-skateboards-miami@gmail.com</p>
            </div>
            <div className="col-auto ms-md-auto">
              <div className="d-flex flex-wrap align-items-center">
                <h6 className="me-10 mb-0 lead fw-bold text-primary">
                  Follow Us:
                </h6>
                <div className="d-flex">
                  <a className="d-inline-block me-2" href="#">
                    <img
                      className="img-fluid"
                      src="yofte-assets/buttons/facebook-white-circle.svg"
                      alt=""
                    ></img>
                  </a>
                  <a className="d-inline-block me-2" href="#">
                    <img
                      className="img-fluid"
                      src="yofte-assets/buttons/instagram-circle.svg"
                      alt=""
                    ></img>
                  </a>
                  <a className="d-inline-block" href="#">
                    <img
                      className="img-fluid"
                      src="yofte-assets/buttons/twitter-circle.svg"
                      alt=""
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-secondary">© Copyright 2022 4Geeks</p>
        </div>
      </div>
    </section>
  </footer>
);
