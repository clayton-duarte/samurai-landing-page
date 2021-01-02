import React from "react";
import { NextPage } from "next";

import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Pricing from "../components/Pricing";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
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
      <Pricing />
      <section>contato</section>
      <Footer />
    </>
  );
};

export default Home;
