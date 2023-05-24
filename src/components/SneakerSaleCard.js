/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */

import styled from "styled-components";
import hightNike1 from "../assets/img/hightNike1.png";
import CardLayout from "../common/style/CardLayout";
import CardContainer from "../common/style/CardContainer";
import CardPicture from "../common/style/CardPicture";
import * as HIAicons from "react-icons/hi";

import {
  H1_TEXT,
  H2_TEXT,
  H4_TEXT,
  H6_TEXT,
  SneakerSaleCard_EXPLORE,
  SneakerSaleCard_NIKE1,
  SneakerSaleCard_PRICE_180,
  SneakerSaleCard_VENTE,
} from "../utils/Constants/main";
import { createText } from "../utils/functions/main";
import Row from "../common/components/row";
import {
  BLACK_COLOR,
  FONT_SIZE_15px,
  FONT_SIZE_20px,
  FONT_SIZE_25px,
  LETTER_SPACING_1px,
  LETTER_SPACING_2px,
  WHITE_COLOR,
} from "../utils/Constants/style";

const Vente = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 25%;
  height: 40px;
  background: ${BLACK_COLOR};
  color: ${WHITE_COLOR};
  border-radius: 7px;
  outline: solid;
  align-items: center;
  text-align: center;
  align-content: center;
  rotate: -90deg;
  left: 20px;
  top: 30px;
  padding: 8px;
`;

const SneakerSaleCard = () => {
  const iconStyle = {
    color: BLACK_COLOR,
    fontSize: "25px",
  };

  return (
    <CardLayout sneakerSaleCard>
      <Vente>
        {createText(
          SneakerSaleCard_VENTE,
          H1_TEXT,
          FONT_SIZE_20px,
          LETTER_SPACING_2px
        )}
      </Vente>
      <CardContainer>
        <CardPicture src={hightNike1} />
        {createText(
          SneakerSaleCard_NIKE1,
          H2_TEXT,
          FONT_SIZE_25px,
          LETTER_SPACING_1px
        )}
        {createText(SneakerSaleCard_PRICE_180, H4_TEXT, FONT_SIZE_20px)}
        <Row margin="35px 0px 0px 0px;">
          {createText(
            SneakerSaleCard_EXPLORE,
            H6_TEXT,
            FONT_SIZE_15px,
            LETTER_SPACING_2px
          )}
          <HIAicons.HiOutlineEye style={iconStyle} />
        </Row>
      </CardContainer>
    </CardLayout>
  );
};
export default SneakerSaleCard;
