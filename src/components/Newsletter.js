/* eslint-disable no-lone-blocks */
import styled from "styled-components";
import BlackButton from "./BlackButton";

//review -> suggest LayoutComponent ?
const Container = styled.div`
  outline: solid;
  display: flex;
  flex-direction: row;
  height: 200px;
  width:700px;
  padding: 30px 30px;
  // background-color: black;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  border-radius:30px;
  justify-content: space-between;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

// transform by function to choose betwen p and h3 ?
// and review properties ?
const Text = styled.p`
  outline: solid;
  margin: 0px;
  padding: 0px;
`;
const Input = styled.input`
  outline: none;
  border:none;
  width:100px;
  `;
  const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height:100px;
  align-items:center;
  outline:solid;
  width:200px;
  justify-content:space-between;
  
`;
const Newsletter = () => {
  return (
    <Container>
      <InfoWrapper>
        <Text>Abonnez vous :)</Text>
        <Text>
          Obtenez 10% de réduction sur tout les produits de la boutique
        </Text>
      </InfoWrapper>
      <InputWrapper>
        <Input placeholder="@mail" maxLength={5} />
        <BlackButton>Validez</BlackButton>
      </InputWrapper>
    </Container>
  );
};
export default Newsletter;
