import React from "react";
import { NextPage } from "next";

import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <section>banner</section>
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
