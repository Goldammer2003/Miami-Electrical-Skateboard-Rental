import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Cards } from "./component/cards";
import { Customerexperience } from "./component/customerexperience";
import { Signup } from "./pages/signup";
import { Jumbotron } from "./component/jumbotron";
import { Detailedcardsix } from "./pages/detailedcardsix";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detailedcardone" element={<Detailedcardsix />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
      {<p>Hello</p>}
    </div>
  );
};

export default injectContext(Layout);
