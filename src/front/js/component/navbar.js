import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaby,
  faCartShopping,
  faMagnifyingGlass,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <section className="position-relative">
      <div className="py-2 bg-info">
        <div className="d-flex align-items-center justify-content-center">
          <svg
            className="me-2"
            width="18"
            height="11"
            viewBox="0 0 18 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="3.07129"
              width="4"
              height="10"
              rx="2"
              transform="rotate(-45 0 3.07129)"
              fill="white"
            ></rect>
            <rect
              x="8"
              y="2.82861"
              width="4"
              height="10"
              rx="2"
              transform="rotate(-45 8 2.82861)"
              fill="white"
            ></rect>
          </svg>
          <p className="mb-0 small fw-bold text-light">
            Get up to a 20% Discount until December!
          </p>
        </div>
      </div>
      <nav className="navbar p-0 navbar-expand-xl navbar-light flex-column border-bottom">
        <div className="container-fluid bg-light px-12 py-8 py-xl-0">
          <button className="navbar-burger navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse">
            <div className="d-flex align-items-center w-100 justify-content-between">
              <div className="d-flex align-items-center">
                <a
                  className="navbar-brand d-flex align-items-center gap-3 py-0"
                  href="#"
                >
                  <Link to="/signup">
                    <img
                      className="img-fluid"
                      src="https://th.bing.com/th/id/R.36f0046f51b7fe52a557f65ca0fea773?rik=FqEiSvD6uyofLA&riu=http%3a%2f%2fwww.calstreets.com%2fsite%2fimages%2ftetzstickers%2fimages%2fskatopia.jpg&ehk=syphm6vUtzFzDXGZhZx74gaBVajzuncF%2bB%2f%2f2HnWZWA%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                      width="50px"
                      title="Home page"
                    ></img>
                  </Link>
                  <h4 className="mb-0">Electical Skateboards</h4>
                </a>
                <div
                  class="input-group mb-3"
                  style={{ width: "225px", height: "20px" }}
                >
                  <span class="input-group-text" id="inputGroup-sizing-default">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="search"
                  />
                </div>
              </div>
              <div className="d-flex gap-2">
                <Link to="/signup">
                  <FontAwesomeIcon
                    className="navbar-icon"
                    icon={faCartShopping}
                    title="Shopping cart"
                  ></FontAwesomeIcon>
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/signup">
                  <FontAwesomeIcon
                    className="navbar-icon"
                    icon={faUser}
                    title="Sign in"
                  ></FontAwesomeIcon>
                </Link>
                <FontAwesomeIcon
                  className="navbar-icon"
                  icon={faFacebook}
                  title="Facebook"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="navbar-icon"
                  icon={faTwitter}
                  title="Twitter"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="navbar-icon"
                  icon={faTiktok}
                  title="Tiktok"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="navbar-icon"
                  icon={faYoutube}
                  title="YouTube"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  className="navbar-icon"
                  icon={faInstagram}
                  title="Instagram"
                ></FontAwesomeIcon>
              </div>
              {/* <ul className="navbar-nav d-flex position-absolute top-50 translate-middle align-items-center">
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">
                    In progress (1)
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">
                    In progress (2)
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#">
                    In progress (3)
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    In progress (4)
                  </a>
                </li>
              </ul> */}
            </div>

            {/* <div className="d-flex align-items-center justify-content-end me-xxl-12">
              <a
                className="link-light text-decoration-none me-10 text-dark"
                href="#"
              >
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <a
                className="link-light text-decoration-none me-4 d-flex align-items-center"
                href="#"
              >
                <svg
                  className="text-dark me-3"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span
                  className="d-inline-block text-center bg-primary rounded-circle fw-bold text-white"
                  style={{ width: "24px", height: "24px" }}
                >
                  3
                </span>
              </a>
            </div> */}
            {/* <a
              className="link-dark py-10 px-10 border-start text-decoration-none d-flex align-items-center fw-bold"
              href="#"
            >
              <svg
                className="me-3"
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <Link to="/signup">
                <span>Sign&nbsp;In</span>
              </Link>
            </a> */}
          </div>
          {/* <div className="d-xl-none d-flex align-items-center justify-content-end">
            <a
              className="link-light text-decoration-none me-10 text-dark"
              href="#"
            >
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a
              className="link-light text-decoration-none d-flex align-items-center"
              href="#"
            >
              <svg
                className="text-dark me-3"
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span
                className="d-inline-block text-center bg-primary rounded-circle fw-bold text-white"
                style={{ width: "24px", height: "24px" }}
              >
                3
              </span>
            </a>
          </div> */}
        </div>
      </nav>
      <div
        className="navbar-menu d-none position-fixed top-0 start-0 bottom-0 w-75 mw-sm"
        style={{ zIndex: "9999" }}
      >
        <div className="navbar-close position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
        <nav className="position-relative h-100 w-100 d-flex flex-column py-6 px-6 bg-white border-end overflow-auto">
          <div className="d-flex align-items-center mb-8">
            <a className="me-auto h6" href="#">
              <img
                className="img-fluid"
                src="yofte-assets/logos/yofte-logo.svg"
                alt=""
                width="auto"
              ></img>
            </a>
            <button className="navbar-close btn p-0">
              <svg
                className="text-secondary"
                style={{ width: "8px", height: "8px" }}
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="d-flex mb-8 justify-content-between">
            <a
              className="link-dark text-decoration-none d-inline-flex align-items-center fw-bold"
              href="#"
            >
              <svg
                className="me-3"
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Sign&nbsp;In</span>
            </a>
            <div className="d-flex align-items-center">
              <a className="link-dark text-decoration-none me-10" href="#">
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <a
                className="link-dark text-decoration-none d-flex align-items-center"
                href="#"
              >
                <svg
                  className="me-3"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="form-control mb-10 py-5 px-8 bg-light border-0"
            type="search"
            placeholder="Search"
          >
            <ul className="list-unstyled mb-0 h4">
              <li className="mb-8">
                <a className="link-dark text-decoration-none" href="#">
                  Products
                </a>
              </li>
              <li className="mb-8">
                <a className="link-dark text-decoration-none" href="#">
                  History
                </a>
              </li>
              <li className="mb-8">
                <a className="link-dark text-decoration-none" href="#">
                  Learn E-Skating
                </a>
              </li>
              <li className="mb-8">
                <a className="link-dark text-decoration-none" href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className="link-dark text-decoration-none" href="#">
                  Photos
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};
