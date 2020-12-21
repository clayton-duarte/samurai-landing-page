import React from "react";
import { NextPage } from "next";

import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Banner from "../components/Banner";
import Header from "../components/Header";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Partners />
      <About />
      <Testimonials />
      <section>contato</section>
      <footer>
        <div>social</div>
        <div>copywright</div>
      </footer>
    </>
  );
};

export default Home;
