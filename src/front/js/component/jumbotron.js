import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/jumbotron.css";
import ReactPlayer from "react-player";

export const Jumbotron = () => {
  return (
    <section className="bg-light pt-4">
      <div className="position-relative container" style={{ height: "768px" }}>
        {/* <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end picturejumbotron">
        <div className="mw-md px-4 ms-md-16 mb-20">
          <h2
            className=" text-white pb-5 ps-5 "
            style={{ marginBottom: "150px", fontSize: "40px", width: "400px" }}
          >
            Rent out Electrical Skateboards in Miami!
          </h2>
        </div>
      </div> */}
        <Carousel interval={null} variant="light">
          <Carousel.Item className="position-relative">
            <img
              className="d-block w-100"
              src="https://static.shuffle.dev/uploads/files/f3/f3a7e512c9216c316e6bdb267d859cb3b15861dd/1-tqqQGzEI0UL9pn4FK5Vufw.jpeg"
              alt="First slide"
            />
            <h2
              className="d-flex flex-column justity-content-start position-absolute text-light"
              style={{ top: "450px", left: "50px" }}
            >
              {" "}
              <span className="d-block text-start">Rent out Electrical </span>
              <span className="d-block text-start">Skateboards in</span>{" "}
              <span className="d-block text-start">Miami!</span>
            </h2>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1579613288371-cb0e63d5aa37?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyfHxFbGVjdHJpY2FsJTIwU2thdGVib2FyZHN8ZW58MHwwfHx8MTY2OTY4NjEyMQ&ixlib=rb-4.0.3&q=80&w=1920"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>One-wheel Skateboards</h3>
              <p>Can you keep balance in one of our new E-Boards?</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ReactPlayer
              className="w-100 h-100"
              url="https://www.youtube.com/watch?v=66zzl2FkAh8?rel=0"
              volume={0.1}
              light={false}
              controls={false}
            />

            <Carousel.Caption>
              <h3>Miami Electrical Skateboards</h3>
              <p>Lets have fun!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};
