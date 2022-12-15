import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const { store, actions } = useContext(Context);

  const Navigate = useNavigate();
  function handle_signup(e) {
    e.preventDefault();
    fetch(`${store.BACKEND_URL}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        adress: address,
        city: city,
        state: state,
        zipcode: zipcode,
        country: country,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        Navigate("/signin");
      })
      .catch((error) => console.log(error));
  }

  console.log(email);
  return (
    <>
      <div className="position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 mb-12 mb-lg-0">
              <div className="py-20 text-center">
                <a className="d-inline-block h6 mb-14" href="#"></a>
                <h2 className="mb-8">Register to enjoy our greatest deals!</h2>
                <p className="mb-10">Please, do not hesitate</p>
                <form onSubmit={handle_signup}>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-lg mb-4"
                    type="email"
                    placeholder="john@example.com"
                    required
                  ></input>

                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control form-control-lg mb-4"
                    type="password"
                    placeholder="Password"
                    required
                  ></input>
                  <input
                    onChange={(e) => setFirstname(e.target.value)}
                    className="form-control form-control-lg mb-4"
                    type="text"
                    placeholder="Firstname"
                    required
                  />
                  <input
                    onChange={(e) => setLastname(e.target.value)}
                    className="form-control form-control-lg mb-4"
                    type="text"
                    placeholder="Lastname"
                    required
                  />
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control form-control-lg mb-4"
                    type="text"
                    placeholder="adress"
                    required
                  />

                  <input
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control form-control-lg mb-4"
                    type="text"
                    placeholder="city"
                    required
                  />
                  <input
                    onChange={(e) => setState(e.target.value)}
                    className="form-control form-control-lg mb-4"
                    type="text"
                    placeholder="state"
                    required
                  />
                  <input
                    onChange={(e) => setZipcode(e.target.value)}
                    className="form-control form-control-lg mb-4"
                    type="text"
                    placeholder="zipcode"
                    required
                  />
                  <input
                    onChange={(e) => setCountry(e.target.value)}
                    className="form-control form-control-lg mb-4"
                    type="text"
                    placeholder="country"
                    required
                  />

                  <div className="form-check" for="">
                    <input className="form-check-input" type="checkbox"></input>
                    <label className="form-check-label small">
                      By singning up, you agree to our Terms, Data Policy and
                      Cookies.
                    </label>
                  </div>
                  <button className="mt-12 mt-md-16 btn btn-dark" type="submit">
                    JOIN Skatopia
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
