import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { DayPicker } from "react-dates";
import { DayPickerRangeController } from "react-dates";
import { toMomentObject } from "react-dates";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
export const Detailedcardsix = () => {
  const runTime = toMomentObject(new Date());
  const [date, setDate] = useState(runTime);
  const Navigate = useNavigate();
  const [focused, setFocused] = useState(true);
  const { store, actions } = useContext(Context);
  //useEffect(() => {
  //if (!store.isLogin) {
  //Navigate("/");
  //}
  //});

  console.log(date._d.toLocaleDateString());
  return (
    <>
      <section className="pt-20 overflow-hidden">
        <div className="d-flex py-5">
          <div className="container ">
            <nav aria-label="breadcrumb mb-8">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a
                    className="text-decoration-none fw-bold text-uppercase text-secondary"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a
                    className="text-decoration-none fw-bold text-uppercase text-secondary"
                    href="#"
                  >
                    E-Skateboard-Single Edition
                  </a>
                </li>
              </ol>
            </nav>
            <div className="row align-items-center mb-24 mb-lg-52">
              <div className="col-12 col-lg-4 mb-10 mb-lg-0">
                <span className="text-secondary">Brille</span>
                <h1 className="mt-2 mb-6 mw-xl">
                  E-Skateboard- Onewheel Edition{" "}
                </h1>
                <div className="mb-8">
                  <button className="btn p-0">
                    <img
                      className="img-fluid"
                      src="yofte-assets/elements/star-gold.svg"
                      alt=""
                    ></img>
                  </button>
                  <button className="btn p-0">
                    <img
                      className="img-fluid"
                      src="yofte-assets/elements/star-gold.svg"
                      alt=""
                    ></img>
                  </button>
                  <button className="btn p-0">
                    <img
                      className="img-fluid"
                      src="yofte-assets/elements/star-gold.svg"
                      alt=""
                    ></img>
                  </button>
                  <button className="btn p-0">
                    <img
                      className="img-fluid"
                      src="yofte-assets/elements/star-gold.svg"
                      alt=""
                    ></img>
                  </button>
                  <button className="btn p-0">
                    <img
                      className="img-fluid"
                      src="yofte-assets/elements/star-gray.svg"
                      alt=""
                    ></img>
                  </button>
                </div>
                <p className="d-inline-block mb-8 h5 text-info">
                  <span>$29.99 Dollars/Day</span>
                  <span
                    className="fw-normal text-secondary text-decoration-line-through"
                    style={{ fontSize: "16px" }}
                  >
                    $33.99
                  </span>
                </p>
                <p className="mw-md text-secondary">
                  Rent out the Electrical Skateboard Onewheel Edition to get to
                  know one very special variant, of the Electrical Skatebards we
                  offer.{" "}
                </p>
              </div>
              <div className="col-12 col-lg-4 mb-40 mb-lg-0">
                <div className="position-relative">
                  <a
                    className="position-absolute top-50 start-0 ms-8 translate-middle-y"
                    href="#"
                  >
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z"
                        fill="#1F40FF"
                      ></path>
                    </svg>
                  </a>
                  <img
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                    src="https://static.shuffle.dev/uploads/files/f3/f3a7e512c9216c316e6bdb267d859cb3b15861dd/photo-1579613288371-cb0e63d5aa37.jfif"
                    alt=""
                  ></img>
                  <a
                    className="position-absolute top-50 end-0 me-8 translate-middle-y"
                    href="#"
                  >
                    <svg
                      width="10"
                      height="18"
                      viewBox="0 0 10 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z"
                        fill="#1F40FF"
                      ></path>
                    </svg>
                  </a>
                  <div className="row justify-content-center mt-n12">
                    <a
                      className="me-4 col-3"
                      href="#"
                      style={{ height: "122px" }}
                    >
                      <img
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                        src="https://static.shuffle.dev/uploads/files/f3/f3a7e512c9216c316e6bdb267d859cb3b15861dd/R.jfif"
                        alt=""
                      ></img>
                    </a>
                    <a
                      className="me-4 col-3"
                      href="#"
                      style={{ height: "122px" }}
                    >
                      <img
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                        src="https://static.shuffle.dev/uploads/files/f3/f3a7e512c9216c316e6bdb267d859cb3b15861dd/OIP.jfif"
                        alt=""
                      ></img>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="row mb-12">
                  <div className="col-6"></div>
                  <div className="col-6"></div>
                </div>
                <div className="d-flex align-items-center mb-14"></div>
                <div className="d-flex align-items-center">
                  <a
                    className="me-1"
                    href="#"
                    style={{ width: "32px", height: "32px" }}
                  ></a>
                  <a
                    className="me-1"
                    href="#"
                    style={{ width: "32px", height: "32px" }}
                  ></a>
                  <a href="#" style={{ width: "32px", height: "32px" }}></a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-between me-auto align-items-center ">
            <SingleDatePicker
              date={date} // momentPropTypes.momentObj or null
              onDateChange={(date) => setDate(date)} // PropTypes.func.isRequired
              focused={focused} // PropTypes.bool
              onFocusChange={(focused) => setFocused(focused)} // PropTypes.func.isRequired
              id="your_unique_id" // PropTypes.string.isRequired,
            />

            <button
              className="btn btn-primary "
              onClick={() => {
                if (store.isLogin) {
                  actions.updateCart({
                    name: store.user.name,
                    email: store.user.email,
                    skateboard_type: "E-Skateboard- Onewheel Edition",
                    image:
                      "https://images.unsplash.com/photo-1579613288371-cb0e63d5aa37?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwyfHxFbGVjdHJpY2FsJTIwU2thdGVib2FyZHN8ZW58MHwwfHx8MTY2OTY4NjEyMQ&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920",
                    date: date._d.toLocaleDateString(),
                  });
                  Navigate("/cart");
                } else {
                  Navigate("/signin");
                }
              }}
            >
              Choose this booking date
            </button>
          </div>
        </div>

        <div className="bg-light mt-52 mt-lg-0">
          <div className="container">
            <div className="position-relative pt-12 pb-20 pt-lg-20">
              <ul className="list-unstyled position-absolute top-0 mt-n40 mt-lg-n16 mb-8 mb-lg-0 row">
                <li className="col-6 col-lg-auto text-center"></li>
                <li className="col-6 col-lg-auto text-center"></li>
                <li className="col-6 col-lg-auto text-center"></li>
                <li className="col-6 col-lg-auto text-center"></li>
              </ul>
              <h4 className="mb-8 text-info">
                Electrical Skateboarding in Miami
              </h4>
              <p className="mw-2xl text-secondary">
                Miami offers countless spots to ride your electrical skateboard
                alongside it's manyy paved beach paths{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
