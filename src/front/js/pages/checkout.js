import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
const Checkout = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <h1 className="m-4">My Bookings:</h1>
      <div className="d-flex">
        {store.cartList.map((items) => {
          return (
            <div className="d-flex">
              <div
                className="card m-4 border border-dark border border-4"
                style={{ width: "18rem" }}
              >
                <img src={items.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <p className="card-text">Name: {items.name}</p>
                  <p className="card-text">
                    Skateboardtype: {items.skateboard_type}
                  </p>
                  <p className="card-text">Email: {items.email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
