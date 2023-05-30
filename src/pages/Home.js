import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SneakerSaleCard from "../components/SneakerSaleCard";
import { createText } from "../utils/functions/main";
import * as constantStyle from "../utils/Constants/style";
import * as constantText from "../utils/Constants/main";
import SneakerCollectionCard from "../components/SneakerCollectionCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  outline: solid;
`;

//this function it use again so create exporting component 
const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  height: 100vh;
  margin-top: 100px;
`;

const SellAndCollectionSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  height: 100vh;
  padding: 10% 10%;
  gap: 45px;
  align-items: center;
`;

const Wrapper = styled.div`
  outline: solid;
  display: flex;
  flex-direction: row;
  padding: 0% 10%;
  gap: 35px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  outline: solid;
`;
const Home = () => {
  return (
    <Container>
      <Header />
      <MainSection></MainSection>
      <SellAndCollectionSection>
        <Title>
          {createText(
            constantText.EN_VEDETTE,
            constantText.H2_TEXT,
            constantStyle.FONT_SIZE_20px,
            constantStyle.LETTER_SPACING_2px
          )}
        </Title>
        <Wrapper>
          <SneakerSaleCard />
          <SneakerSaleCard />
          <SneakerSaleCard />
        </Wrapper>
        <Title>
          {createText(
            constantText.EN_COLLECTION,
            constantText.H2_TEXT,
            constantStyle.FONT_SIZE_20px,
            constantStyle.LETTER_SPACING_2px
          )}
        </Title>
        <Wrapper>
          <SneakerCollectionCard />
          <SneakerCollectionCard />
        </Wrapper>
      </SellAndCollectionSection>
      <Footer />
    </Container>
  );
};
export default Home;

//follow this rules:

// work in other branch to try your gitworkflow

//section header
//section principale
//section en vente
//section collection: deux marque nike / adidas
//revoir le footer (lien a supprimer/modifier/ajouter)
//supprimer les fichiers inutiles ? full.css ?
//rajouter les effets d'animations sur les composants
