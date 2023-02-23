import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";

import { useEffect } from "react";
import { getAllProposals } from "../Blockchain/funder";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popular from "../components/Popular";
import MyProposal from "../components/MyProposals";
import Footer from "../components/Footer";
import VotableProposals from "../components/VotableProposals";

export default function Home() {
  // console.log(allProposals);
  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar-track-blackPrim lg:scrollbar-thumb-blackTert  lg:scrollbar-thumb-rounded-xl lg:scrollbar-thin text-Inter bg-white text-whitePrim font-Inter`}
    >
      <Head>
        <title>Startup-Sphere</title>
        <meta
          name="description"
          content="DApp for investing in startup ideas"
        />
      </Head>

      {/* <Header /> */}
      <Hero />
      <Popular />
      <MyProposal />
      <VotableProposals />
      <Footer />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const getAllProposal = async () => {
    const Proposals = await getAllProposals();
    console.log(Proposals);
  };

  console.log(getAllProposal);

  return {
    props: {}, // will be passed to the page component as props
  };
};
