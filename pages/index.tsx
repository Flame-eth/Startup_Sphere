import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";
import SelectCoinModal from "../components/SelectCoinModal";
import { useEffect } from "react";
import { Coin } from "../types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  setReceiveCoin,
  setSendCoin,
  setShowCoinsModal,
} from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar-track-blackPrim lg:scrollbar-thumb-blackTert  lg:scrollbar-thumb-rounded-xl lg:scrollbar-thin text-Inter bg-black/95 text-whitePrim font-Inter`}
    >
      <Head>
        <title>Startup-Sphere</title>
        <meta
          name="description"
          content="DApp for investing in startup ideas"
        />
      </Head>

      <main>
        {/* <Header /> */}
        <Hero />
      </main>

      <footer></footer>
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
