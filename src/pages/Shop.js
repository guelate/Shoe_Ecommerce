import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import SneakerProductCard from "../components/SneakerProductCard";

const Shop = () => {

  return (
    <>
    {/* modify header title: accueil , homme , femme */}
      <Header />
      
      <SneakerProductCard />
      <SneakerProductCard />
      <SneakerProductCard />
      <SneakerProductCard />

      <SneakerProductCard />
      <SneakerProductCard />
      <SneakerProductCard />
      <SneakerProductCard />

      <SneakerProductCard />
      <SneakerProductCard />
      <SneakerProductCard />
      <SneakerProductCard />

   
      <Carousel />
      <Footer />
    </>
  );
};
export default Shop;

//follow this rules:

// work in other branch to try your gitworkflow

//trier la boutique : homme / femme 
//faire fonctionner le defilement de produit(carousel ou autre fonction)
