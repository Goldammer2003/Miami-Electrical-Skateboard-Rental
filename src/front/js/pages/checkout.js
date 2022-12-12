import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
const Checkout = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      {store.cartList.map((items) => {
        return (
          <div>
            <h1>My Bookings:</h1>
            <h2>{items.name}</h2>
            <h2>{items.skateboard_type}</h2>
            <h2>{items.date}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default Checkout;
