import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  outline: solid;
`;
const MainSection = styled.div`
display:flex;
flex-direction:column;
border:1px solid blue;
height:100vh;
margin-top: 100px;


`;
const SellSection = styled.div`
display:flex;
flex-direction:column;
border:1px solid red;

height:100vh;


`;
const Home = () => {
    return (
        <Container>
            <Header />
              <MainSection>
              </MainSection>
              <SellSection>
              </SellSection>
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
