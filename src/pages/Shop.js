import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import SneakerProductCard from "../components/SneakerProductCard";
import MainSection from "../common/components/MainSection";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // outline:solid;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap:30px;
`;
/* haut | horizontal | bas */
const Shop = () => {
  return (
    <Container>

      {/* modify header title: accueil , homme , femme */}
      <Header />
      <MainSection direction="column" padding="10% 20% 10%" height="auto" gap="30px" align="center">
        <RowWrapper>
          <SneakerProductCard />
          <SneakerProductCard />
          <SneakerProductCard />
          <SneakerProductCard />
        </RowWrapper>
         <RowWrapper>
          <SneakerProductCard />
          <SneakerProductCard />
          <SneakerProductCard />
          <SneakerProductCard />
          </RowWrapper>
          <RowWrapper>
          <SneakerProductCard />
          <SneakerProductCard />
          <SneakerProductCard />
          <SneakerProductCard />
        </RowWrapper>
        <Carousel />
        </MainSection>
      <Footer />
    </Container>
  );
};
export default Shop;

//follow this rules:

// work in other branch to try your gitworkflow

//trier la boutique : homme / femme
//faire fonctionner le defilement de produit(carousel ou autre fonction)
