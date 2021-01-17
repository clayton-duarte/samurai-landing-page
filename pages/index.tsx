import React from "react";
import { NextPage } from "next";
import styled from "@emotion/styled";

import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Partners mobileOnly />
      <About />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
