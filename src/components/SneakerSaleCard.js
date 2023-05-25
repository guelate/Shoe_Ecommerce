/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */

import styled from "styled-components";
import hightNike1 from "../assets/img/hightNike1.png";
import CardLayout from "../common/Layout/CardLayout";
import CardContainer from "../common/Layout/CardContainer";
import CardPicture from "../common/Layout/CardPicture";
import Row from "../common/components/row";
import * as HIAicons from "react-icons/hi";
import * as constantStyle from "../utils/Constants/style";
import * as constantText from "../utils/Constants/main";
import { createText } from "../utils/functions/main";

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
          constantText.SneakerSaleCard_VENTE,
          constantText.H1_TEXT,
          constantStyle.FONT_SIZE_20px,
          constantStyle.LETTER_SPACING_2px
        )}
      </Vente>
      <CardContainer>
        <CardPicture src={hightNike1} />
        {createText(
          constantText.SneakerSaleCard_NIKE1,
          constantText.H2_TEXT,
          constantStyle.FONT_SIZE_25px,
          constantStyle.LETTER_SPACING_1px
        )}
        {createText(SneakerSaleCard_PRICE_180, H4_TEXT, FONT_SIZE_20px)}
        <Row home margin="35px 0px 0px 0px;">
          {createText(
            constantText.SneakerSaleCard_EXPLORE,
            constantText.H6_TEXT,
            constantStyle.FONT_SIZE_15px,
            constantStyle.LETTER_SPACING_2px
          )}
          <HIAicons.HiOutlineEye style={iconStyle} />
        </Row>
      </CardContainer>
    </CardLayout>
  );
};
export default SneakerSaleCard;
