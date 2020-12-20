import React from "react";
import { NextPage } from "next";

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
      <section>testemunhos</section>
      <section>contato</section>
      <footer>
        <div>social</div>
        <div>copywright</div>
      </footer>
    </>
  );
};

export default Home;
