/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Row from "../common/components/row";
import Column from "../common/components/column";
import { createText } from "../utils/functions/main";
import * as constantStyle from "../utils/Constants/style";
import * as constantText from "../utils/Constants/main";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  // outline: solid;
  // gap: ${(props) => (props.gap ? props.gap : "")};
  padding: 0% 230px;
  justify-content: space-between;
`;
//rename
const ColumnFirst = styled.div`
  display: flex;
  flex-direction: column;
  // outline: solid;
  gap:5px;
`;

const Wrapper = styled.div`
  display:flex;
  flex-direction:row;
  // outline: solid;
  gap:20px;

`;

const Footer = () => {
  const textStyle = {
    margin: "0px",
    padding: "0px",
  };

  return (
    <Container>
      <ColumnFirst>
        <h2 style={textStyle}>E SNEAKERS</h2>
        <p style={textStyle}>Nouvelle collection 2023</p>
      </ColumnFirst>
      <ColumnFirst>
        <h2 style={textStyle}>EXPLORER</h2>
        <p style={textStyle}>Accueil</p>
        <p style={textStyle}>En vedette</p>
        <p style={textStyle}>Nouveauté</p>
      </ColumnFirst>
      <ColumnFirst>
        <h2 style={textStyle}>SUPPORT</h2>
        <p style={textStyle}>Accueil</p>
        <p style={textStyle}>En vedette</p>
        <p style={textStyle}>Nouveauté</p>
      </ColumnFirst>
      <Wrapper>
        <FaFacebookF />
        <AiOutlineInstagram />
        <BsTwitter />
      </Wrapper>
    </Container>
  );
};

export default Footer;

{
  /* {column_tab_first.map((element) =>
          createText(
            element,
            constantText.H1_TEXT,
            constantStyle.FONT_SIZE_20px,
            constantStyle.LETTER_SPACING_2px
          )
        )}
      </Column>
      <Column>
        {column_tab_third.map((element) =>
          createText(
            element,
            constantText.H1_TEXT,
            constantStyle.FONT_SIZE_20px,
            constantStyle.LETTER_SPACING_2px
          )
        )}
      </Column>
      <Column>
        {column_tab_fourth.map((element) =>
          createText(
            element,
            constantText.H1_TEXT,
            constantStyle.FONT_SIZE_20px,
            constantStyle.LETTER_SPACING_2px
          )
        )}
      </Column> */
}
