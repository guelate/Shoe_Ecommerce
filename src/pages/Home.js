import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SneakerSaleCard from "../components/SneakerSaleCard";
import { createText } from "../utils/functions/main";
import * as constantStyle from "../utils/Constants/style";
import * as constantText from "../utils/Constants/main";
import SneakerCollectionCard from "../components/SneakerCollectionCard";
import CardPicture from "../common/components/CardPicture";
import yeezy1 from "../assets/img/yeezy1.png";
import BlackButton from "../common/components/BlackButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // outline: solid;
`;

//this function it use again so create exporting component
const MainSection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100vh;
  margin-top: 100px;
  padding: 10% 20% 20%;
`;
// haut | horizontal | bas */
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  // outline: solid;
  width: 100%;
  height: 100%;
  padding: 10% 20%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

const Cercle = styled.div`
  width: 310px;
  height: 310px;
  border-radius: 50%;
  // outline: solid;
  background: ${constantStyle.BLACK_COLOR};
`;

const TextWrapper = styled.div`

  display: flex;
  height: 70%;
  width: 35%;
  flex-direction: column;
  justify-content:space-between;
  // outline: solid;
`;

const SellAndCollectionSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10% 10%;
  gap: 45px;
  align-items: center;
`;

const Wrapper = styled.div`
  // outline: solid;
  display: flex;
  flex-direction: row;
  padding: 0% 10%;
  gap: 35px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  // outline: solid;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <MainSection>
        <HomeWrapper>
          <TextWrapper>
            {createText(
              constantText.STYLE_AND_CONFORT,
              constantText.H2_TEXT,
              constantStyle.FONT_SIZE_20px,
              constantStyle.LETTER_SPACING_1px
            )}
            {createText(
              constantText.HOME_TEXTE,
              constantText.H2_TEXT,
              constantStyle.FONT_SIZE_15px,
              constantStyle.LETTER_SPACING_1px
            )}
            <BlackButton>Explorer !</BlackButton>
          </TextWrapper>
          <Cercle>
            <CardPicture home src={yeezy1} />
          </Cercle>
        </HomeWrapper>
      </MainSection>
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
