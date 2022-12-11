import React from "react";
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container">
        <div className="p-8 p-lg-20 bg-white">
          <h2 className="mb-20">Billing address</h2>
          <div className="row">
            <div className="col-12 col-xl-8">
              <form action="">
                <div className="row">
                  <div className="col-12 col-lg-6 mb-10 mb-lg-0">
                    <div className="mb-10">
                      <label className="form-label" for="">
                        First Name
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <label className="form-label" for="">
                      Username
                    </label>
                    <div className="input-group mt-4 mb-3">
                      <span
                        className="input-group-text bg-white border"
                        id="basic-addon1"
                      >
                        @
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div>
                      <label className="form-label" for="">
                        Last Name
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-12 mt-10 mb-10">
                    <div className="row">
                      <div className="col-12 col-lg-6 mb-10 mb-md-0">
                        <div className="mb-lg-10">
                          <label className="form-label" for="">
                            Address 1
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="d-none d-lg-block">
                          <label className="form-label" for="">
                            Country
                          </label>
                          <select
                            className="form-select py-4 px-8 border"
                            name=""
                            id=""
                          >
                            <option value="1"></option>
                            <option value="2">United States</option>
                            <option value="3">Spain</option>
                            <option value="4">Poland</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="mb-10">
                          <label className="form-label" for="">
                            Address 2
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                        <div className="row">
                          <div className="col-12 col-lg-6 mb-10 mb-lg-0">
                            <label className="form-label" for="">
                              State
                            </label>
                            <select
                              className="form-select py-4 px-8 border"
                              name=""
                              id=""
                            >
                              <option value="1"></option>
                              <option value="2">United States</option>
                              <option value="3">Spain</option>
                              <option value="4">Poland</option>
                            </select>
                          </div>
                          <div className="col-12 col-lg-4">
                            <label className="form-label" for="">
                              Zip Code
                            </label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-8">
                    <div className="form-check mb-6 align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="accountType"
                        value="personal"
                      />
                      <label className="form-check-label" for="">
                        Shipping address is the same as my billing address
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="accountType"
                        value="personal"
                      />
                      <label className="form-check-label" for="">
                        Save this information for next time
                      </label>
                    </div>
                  </div>
                  <div className="col-12 mb-8">
                    <label className="form-label" for="">
                      Payment
                    </label>
                    <div className="form-check mb-6">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        value=""
                        checked=""
                      />
                      <label className="form-check-label" for="">
                        Credit card
                      </label>
                    </div>
                    <div className="form-check mb-6">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        value=""
                      />
                      <label className="form-check-label" for="">
                        Debit card
                      </label>
                    </div>
                    <div className="form-check mb-6">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        value=""
                      />
                      <label className="form-check-label" for="">
                        PayPal
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row mb-10">
                      <div className="col-12 col-lg-6 mb-10 mb-lg-0">
                        <div>
                          <label className="form-label" for="">
                            Name on card
                          </label>
                          <input className="form-control" type="text" />
                          <p className="mt-4 mb-0 small text-secondary">
                            Full name as displayed on card
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div>
                          <label className="form-label" for="">
                            Credit card number
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="mb-10">
                          <label className="form-label" for="">
                            Expiration
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="mb-10">
                          <label className="form-label" for="">
                            CVV
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-xl-4">
              <div className="mb-12 p-6 p-lg-12 bg-info">
                <div className="mb-6 pb-8 border-bottom border-info-light">
                  <h2 className="mb-6 h4 text-white">Order summary</h2>
                  <p className="text-light">
                    Shipping and additional costs are calculated based on values
                    you have entered.
                  </p>
                </div>
                <div className="d-flex mb-2 justify-content-between align-items-center">
                  <span className="text-light">Order subtotal</span>
                  <span className="lead fw-bold text-white">$89.67</span>
                </div>
                <div className="d-flex mb-2 justify-content-between align-items-center">
                  <span className="text-light">Shipping</span>
                  <span className="lead fw-bold text-white">$11.00</span>
                </div>
                <div className="d-flex mb-2 justify-content-between align-items-center">
                  <span className="text-light">Tax</span>
                  <span className="lead fw-bold text-white">$0</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="lead fw-bold text-white">Total</span>
                  <span className="lead fw-bold text-white">$100.67</span>
                </div>
              </div>
              <div className="mw-md mb-12">
                <div className="d-flex flex-wrap flex-md-nowrap align-items-center"></div>
              </div>
              <a className="btn w-100 btn-primary" href="#">
                Go to Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
