/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */

import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0% 230px;
  justify-content: space-between;
`;

const customColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Footer = () => {
  const textStyle = {
    margin: "0px",
    padding: "0px",
  };

  return (
    <Container>
      <customColumn>
        <h2 style={textStyle}>E SNEAKERS</h2>
        <p style={textStyle}>Nouvelle collection 2023</p>
      </customColumn>
      <customColumn>
        <h2 style={textStyle}>EXPLORER</h2>
        <p style={textStyle}>Accueil</p>
        <p style={textStyle}>En vedette</p>
        <p style={textStyle}>Nouveauté</p>
      </customColumn>
      <customColumn>
        <h2 style={textStyle}>SUPPORT</h2>
        <p style={textStyle}>Accueil</p>
        <p style={textStyle}>En vedette</p>
        <p style={textStyle}>Nouveauté</p>
      </customColumn>
      <Wrapper>
        <FaFacebookF />
        <AiOutlineInstagram />
        <BsTwitter />
      </Wrapper>
    </Container>
  );
};

export default Footer;
