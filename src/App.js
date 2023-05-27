import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import {AiOutlineInstagram} from "react-icons/ai"
import{FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

function App() {

  const tab1 = ["E SNEAKERS","Nouvelle collection 2023"];
  const tab2 = ["EXPLORER", "Accueil","En vedette", "Nouveauté"];
  const tab3 = ["SUPPORT","Accueil","En vedette","Nouveauté]"];
  const tab4 = [<FaFacebookF />,<AiOutlineInstagram />, <BsTwitter />];
   

  return (
    <Footer firstTab={tab1} secondTab={tab2} thirdTab={tab3} fourthTab={tab4} />
  );
}

export default App;


