import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
<section class="position-relative overflow-hidden">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-lg-4 mb-12 mb-lg-0">
        <div class="py-20 text-center">
          <a class="d-inline-block h6 mb-14" href="#">

          </a>
          <h2 class="mb-8">Sign Up to see your Bookings at our Website from everywhere!</h2>
          <p class="mb-10">Please, do not hesitate</p>
          <form action="">
            <input class="form-control form-control-lg mb-4" type="text" placeholder="john@example.com">
            <input class="form-control form-control-lg mb-4" type="password" placeholder="Password">

            <div class="form-check" for="">
              <input class="form-check-input" type="checkbox">
              <label class="form-check-label small">By singning up, you agree to our Terms, Data Policy and Cookies.</label>
            </div>
            <button class="mt-12 mt-md-16 btn btn-dark">JOIN Skatopia</button>
          </form>
        </div>
        <img class="d-lg-none w-100" style="height: 384px;" src="yofte-assets/images/placeholder-sign.png" alt="">
      </div>
    </div>
  </div>
  <div class="d-none d-lg-block position-absolute top-0 bottom-0 end-0 col-lg-6" style="background-image: url('https://images.unsplash.com/photo-1524839438798-18cb0977aa49?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwxfHxFbGVjdHJpY2FsJTIwU2thdGVib2FyZGluZ3xlbnwwfHx8fDE2Njk5NTE4MjY&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920'); background-repeat: no-repeat; background-size: cover; background-position: center;"></div>
</section>


  );
};