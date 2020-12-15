import React from "react";
import { NextPage } from "next";

import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <section>sobre</section>
      <section>parceiros</section>
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
