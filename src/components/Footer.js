/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */

import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { createText } from "../utils/functions/main";
import { H2_TEXT, HEADER_E_SNEAKERS } from "../utils/Constants/main";
import * as constantStyle from "../utils/Constants/style";
import * as constantText from "../utils/Constants/main";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2% 230px;
  justify-content: space-between;
`;

const CustomColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  outline: solid;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <CustomColumn>
        {createText(
          constantText.HEADER_E_SNEAKERS,
          constantText.H1_TEXT,
          constantStyle.FONT_SIZE_20px,
          constantStyle.LETTER_SPACING_1px
        )}
        {createText(
          constantText.NEW_COLLECTION,
          constantText.P_TEXT,
          constantStyle.FONT_SIZE_15px,
          constantStyle.LETTER_SPACING_2px
        )}
      </CustomColumn>
      <CustomColumn>
        {createText(
          constantText.EXPLORER,
          constantText.H1_TEXT,
          constantStyle.FONT_SIZE_20px,
          constantStyle.LETTER_SPACING_1px
        )}
        {createText(
          constantText.ACCUEIL,
          constantText.P_TEXT,
          constantStyle.FONT_SIZE_15px,
          constantStyle.LETTER_SPACING_1px
        )}
        {createText(
          constantText.EN_VEDETTE,
          constantText.P_TEXT,
          constantStyle.FONT_SIZE_15px,
          constantStyle.LETTER_SPACING_1px
        )}
        {createText(
          constantText.NEWS,
          constantText.P_TEXT,
          constantStyle.FONT_SIZE_15px,
          constantStyle.LETTER_SPACING_1px
        )}
      </CustomColumn>
      <CustomColumn>
        {createText(
          constantText.SUPPORT,
          constantText.H1_TEXT,
          constantStyle.FONT_SIZE_20px,
          constantStyle.LETTER_SPACING_2px
        )}
        {createText(
          constantText.ACCUEIL,
          constantText.P_TEXT,
          constantStyle.FONT_SIZE_15px,
          constantStyle.LETTER_SPACING_1px
        )}
        {createText(
          constantText.EN_VEDETTE,
          constantText.P_TEXT,
          constantStyle.FONT_SIZE_15px,
          constantStyle.LETTER_SPACING_1px
        )}
        {createText(
          constantText.NEWS,
          constantText.P_TEXT,
          constantStyle.FONT_SIZE_15px,
          constantStyle.LETTER_SPACING_1px
        )}
      </CustomColumn>
      <Wrapper>
        <FaFacebookF />
        <AiOutlineInstagram />
        <BsTwitter />
      </Wrapper>
    </Container>
  );
};

export default Footer;
