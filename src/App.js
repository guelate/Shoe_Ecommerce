import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function App() {

  const tab1 = [
    "E SNEAKERS",
    "EXPLORER",
    "SUPPORT",
    <FaFacebookF />,
    <AiOutlineInstagram />,
    <BsTwitter />,
  ];
  const tab2 = ["ligne", "ligne","ligne"];
  const tab3 = ["column", "column", "column"];

  return <Footer firstTab={tab1} secondTab={tab2} thirdTab={tab3} />;
}

export default App;
