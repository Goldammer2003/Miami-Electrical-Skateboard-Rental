import React, { Component } from "react";

export const Jumbotron = () => (
  <section className="bg-light">
    <div className="position-relative container" style={{ height: "768px" }}>
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end picturejumbotron">
        <div className="mw-md px-4 ms-md-16 mb-20">
          <h2
            className=" text-white pb-5 ps-5 "
            style={{ marginBottom: "150px", fontSize: "40px", width: "400px" }}
          >
            Rent out Electrical Skatebards in Miami!
          </h2>
        </div>
      </div>
    </div>
  </section>
);
