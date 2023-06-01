/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from "styled-components";
import { createHeaderTitle } from "../utils/functions/main";
import {AiOutlineShopping} from "react-icons/ai"

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding-left: 200px;
  padding-right: 250px;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  z-index: 999; 
  // outline:solid;

`;


const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  gap:10px;

`

const Header = () => {
  return (
    <Container>
      {createHeaderTitle(["E SNEAKER"])}
      <Wrapper>
        {createHeaderTitle(["Accueil", "En vedette", "Nouveautés", "Boutique",<AiOutlineShopping />])}
      </Wrapper>
    </Container>
  );
};
export default Header;


