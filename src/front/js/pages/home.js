import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Customerexperience } from "../component/customerexperience";
import { Jumbotron } from "../component/jumbotron";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Jumbotron />
      <Cards />
      <Customerexperience />
    </>
  );
};
