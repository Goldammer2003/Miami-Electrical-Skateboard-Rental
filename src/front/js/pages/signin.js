import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const Navigate = useNavigate();
  function handle_signin(e) {
    e.preventDefault();
    fetch(`${store.BACKEND_URL}/api/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.token);
        //Navigate("/signin");
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    store.isLogin && Navigate("/");
  }, []);
  return (
    <>
      <div className="position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 mb-12 mb-lg-0">
              <div className="py-20 text-center">
                <a className="d-inline-block h6 mb-14" href="#"></a>
                <h2 className="mb-8">
                  Sign In to see your Bookings at our Website from everywhere!
                </h2>
                <p className="mb-10">Please, do not hesitate</p>
                <form onSubmit={handle_signin}>
                  <input
                    className="form-control form-control-lg mb-4"
                    type="email"
                    placeholder="john@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>

                  <input
                    className="form-control form-control-lg mb-4"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>

                  <div className="form-check" for="">
                    <label className="form-check-label small">
                      Don't have an account?{" "}
                      <Link to="/signup" className="text-primary">
                        Register and get started!
                      </Link>
                    </label>
                  </div>
                  <button className="mt-12 mt-md-16 btn btn-dark" type="submit">
                    Sign In
                  </button>
                </form>
              </div>
              <img
                className="d-lg-none w-100"
                style={{ height: "384px" }}
                src="yofte-assets/images/placeholder-sign.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div
          className="d-none d-lg-block position-absolute top-0 bottom-0 end-0 col-lg-6 picturesingnup"
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1524839438798-18cb0977aa49?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixid=MnwzMzIzMzB8MHwxfHNlYXJjaHwxfHxFbGVjdHJpY2FsJTIwU2thdGVib2FyZGluZ3xlbnwwfHx8fDE2Njk5NTE4MjY&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"}
            )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </>
  );
};
