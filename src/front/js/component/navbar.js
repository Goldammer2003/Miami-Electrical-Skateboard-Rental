import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <section class="position-relative">
    <div class="py-2 bg-info">
      <div class="d-flex align-items-center justify-content-center">
        <svg class="me-2" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="3.07129" width="4" height="10" rx="2" transform="rotate(-45 0 3.07129)" fill="white"></rect><rect x="8" y="2.82861" width="4" height="10" rx="2" transform="rotate(-45 8 2.82861)" fill="white"></rect></svg>
        <p class="mb-0 small fw-bold text-light">Get a 20% Discount until December!</p>
      </div>
    </div>
    <nav class="navbar p-0 navbar-expand-xl navbar-light flex-column border-bottom">
      <div class="container-fluid bg-light px-12 py-8 py-xl-0">
        <button class="navbar-burger navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="position-relative d-none d-xl-flex navbar-collapse">
          <div class="d-flex w-100 align-items-center justify-content-between">
            <a class="navbar-brand" href="#">
              <img class="img-fluid" src="https://www.bing.com/images/search?view=detailV2&ccid=NvAEb1G3&id=B8A5C5C4FE165E9128672C1F2ABBFAF04A22A116&thid=OIP.NvAEb1G3_lKlV_ZcoP6ncwHaHq&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.36f0046f51b7fe52a557f65ca0fea773%3frik%3dFqEiSvD6uyofLA%26riu%3dhttp%253a%252f%252fwww.calstreets.com%252fsite%252fimages%252ftetzstickers%252fimages%252fskatopia.jpg%26ehk%3dsyphm6vUtzFzDXGZhZx74gaBVajzuncF%252bB%252f%252f2HnWZWA%253d%26risl%3d%" alt="" width="auto"></img>
            </a>
            <ul class="navbar-nav d-flex position-absolute top-50 start-50 translate-middle align-items-center">
              <li class="nav-item me-3"><a class="nav-link" href="#">Products</a></li>
              <li class="nav-item me-3"><a class="nav-link" href="#">History</a></li>
              <li class="nav-item me-3"><a class="nav-link" href="#">Learn E-Skating</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
          <div class="d-flex align-items-center justify-content-end me-xxl-12">
            <a class="link-light text-decoration-none me-10 text-dark" href="#">
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
            <a class="link-light text-decoration-none me-4 d-flex align-items-center" href="#">
              <svg class="text-dark me-3" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span class="d-inline-block text-center bg-primary rounded-circle fw-bold text-white" style="width: 24px; height: 24px;">3</span>
            </a>
          </div>
          <a class="link-dark py-10 px-10 border-start text-decoration-none d-flex align-items-center fw-bold" href="#">
            <svg class="me-3" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span>Sign&nbsp;In</span>
          </a>
        </div>
        <div class="d-xl-none d-flex align-items-center justify-content-end">
          <a class="link-light text-decoration-none me-10 text-dark" href="#">
            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </a>
          <a class="link-light text-decoration-none d-flex align-items-center" href="#">
            <svg class="text-dark me-3" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span class="d-inline-block text-center bg-primary rounded-circle fw-bold text-white" style="width: 24px; height: 24px;">3</span>
          </a>
        </div>
      </div>
    </nav>
    <div class="navbar-menu d-none position-fixed top-0 start-0 bottom-0 w-75 mw-sm" style="z-index: 9999;">
      <div class="navbar-close position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
      <nav class="position-relative h-100 w-100 d-flex flex-column py-6 px-6 bg-white border-end overflow-auto">
        <div class="d-flex align-items-center mb-8">
          <a class="me-auto h6" href="#">
            <img class="img-fluid" src="yofte-assets/logos/yofte-logo.svg" alt="" width="auto">
          </a>
          <button class="navbar-close btn p-0">
            <svg class="text-secondary" style="width: 8px; height: 8px;" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00002 1L1 9.00002M1.00003 1L9.00005 9.00002" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
        <div class="d-flex mb-8 justify-content-between">
          <a class="link-dark text-decoration-none d-inline-flex align-items-center fw-bold" href="#">
            <svg class="me-3" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0006 16.3154C19.1303 16.3154 21.6673 13.799 21.6673 10.6948C21.6673 7.59064 19.1303 5.07422 16.0006 5.07422C12.871 5.07422 10.334 7.59064 10.334 10.6948C10.334 13.799 12.871 16.3154 16.0006 16.3154Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M24.4225 23.8963C23.6678 22.3507 22.4756 21.0445 20.9845 20.1298C19.4934 19.2151 17.7647 18.7295 15.9998 18.7295C14.2349 18.7295 12.5063 19.2151 11.0152 20.1298C9.52406 21.0445 8.33179 22.3507 7.57715 23.8963" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span>Sign&nbsp;In</span>
          </a>
          <div class="d-flex align-items-center">
            <a class="link-dark text-decoration-none me-10" href="#">
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4998 19.2061L2.70115 9.92527C1.92859 9.14433 1.41864 8.1374 1.24355 7.04712C1.06847 5.95684 1.23713 4.8385 1.72563 3.85053V3.85053C2.09464 3.10462 2.63366 2.45803 3.29828 1.96406C3.9629 1.47008 4.73408 1.14284 5.5483 1.00931C6.36252 0.875782 7.19647 0.939779 7.98144 1.19603C8.7664 1.45228 9.47991 1.89345 10.0632 2.48319L11.4998 3.93577L12.9364 2.48319C13.5197 1.89345 14.2332 1.45228 15.0182 1.19603C15.8031 0.939779 16.6371 0.875782 17.4513 1.00931C18.2655 1.14284 19.0367 1.47008 19.7013 1.96406C20.3659 2.45803 20.905 3.10462 21.274 3.85053V3.85053C21.7625 4.8385 21.9311 5.95684 21.756 7.04712C21.581 8.1374 21.071 9.14433 20.2984 9.92527L11.4998 19.2061Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
            <a class="link-dark text-decoration-none d-flex align-items-center" href="#">
              <svg class="me-3" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1159 8.72461H2.50427C1.99709 8.72461 1.58594 9.12704 1.58594 9.62346V21.3085C1.58594 21.8049 1.99709 22.2074 2.50427 22.2074H18.1159C18.6231 22.2074 19.0342 21.8049 19.0342 21.3085V9.62346C19.0342 9.12704 18.6231 8.72461 18.1159 8.72461Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6.34473 6.34469V4.95676C6.34473 3.85246 6.76252 2.79338 7.5062 2.01252C8.24988 1.23165 9.25852 0.792969 10.3102 0.792969C11.362 0.792969 12.3706 1.23165 13.1143 2.01252C13.858 2.79338 14.2758 3.85246 14.2758 4.95676V6.34469" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span class="d-inline-block text-center bg-light rounded-circle fw-bold" style="width: 24px; height: 24px;">3</span>
            </a>
          </div>
        </div>
        <input class="form-control mb-10 py-5 px-8 bg-light border-0" type="search" placeholder="Search">
        <ul class="list-unstyled mb-0 h4">
          <li class="mb-8"><a class="link-dark text-decoration-none" href="#">Products</a></li>
          <li class="mb-8"><a class="link-dark text-decoration-none" href="#">History</a></li>
          <li class="mb-8"><a class="link-dark text-decoration-none" href="#">Learn E-Skating</a></li>
          <li class="mb-8"><a class="link-dark text-decoration-none" href="#">Contact</a></li>
          <li><a class="link-dark text-decoration-none" href="#">Photos</a></li>
        </ul>
      </nav>
    </div>
  </section>
    </section>
  );
};


