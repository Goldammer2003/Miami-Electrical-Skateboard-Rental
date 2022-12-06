import React, { Component } from "react";

export const Jumbotron = () => (
  <section className="position-relative pt-20 overflow-hidden">
    <div className="bg-info-light position-absolute w-100 start-0 top-0 bottom-0 mb-12"></div>
    <div
      className="bg-light-light position-absolute start-0 bottom-0"
      style={{ width: "160px", height: "48px" }}
    ></div>
    <div className="bg-info position-absolute col-4 end-0 top-0 bottom-0"></div>
    <div className="container position-relative">
      <img
        className="position-absolute top-0 start-50 ms-n64 mt-64 mt-lg-0"
        style={{ width: "240px" }}
        src="yofte-assets/elements/light-line1.svg"
        alt=""
      ></img>
      <img
        className="position-absolute top-0 end-0 me-lg-40 mt-lg-20"
        style={{ width: "240px" }}
        src="yofte-assets/elements/light-line2.svg"
        alt=""
      ></img>
      <div className="row">
        <div className="col-12 col-lg-5 mb-10 mb-lg-0">
          <div className="mw-sm">
            <h2 className="mb-12 text-white ">
              Rent out Electrical Skateboards in Miami!
            </h2>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className="d-flex position-relative">
            <img
              className="w-50 object-cover"
              style={{ height: "384px", objectFit: "cover" }}
              src="https://static.shuffle.dev/uploads/files/f3/f3a7e512c9216c316e6bdb267d859cb3b15861dd/1-tqqQGzEI0UL9pn4FK5Vufw.jpeg"
              alt=""
            ></img>
            <img
              className="w-50 object-cover"
              style={{ height: "384px", objectFit: "cover" }}
              src="https://static.shuffle.dev/uploads/files/f3/f3a7e512c9216c316e6bdb267d859cb3b15861dd/20905568-112565189442309-1251202519686709248-n-grande.webp"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  </section>
);
