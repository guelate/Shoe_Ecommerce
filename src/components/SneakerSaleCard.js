/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */

import styled from "styled-components";
import hightNike1 from "../assets/img/hightNike1.png";
import CardLayout from "../common/style/CardLayout";
import CardContainer from "../common/style/CardContainer";
import CardPicture from "../common/style/CardPicture";
import {
  H3_TEXT,
  SneakerSaleCard_NIKE1,
  SneakerSaleCard_PRICE_180,
  SneakerSaleCard_SHOPPING_CART,
  SneakerSaleCard_VENTE,
} from "../utils/Constants/main";
import { createText } from "../utils/functions/main";

const Vente = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 25%;
  height: 40px;
  outline: solid;
  align-items: center;
  text-align: center;
  align-content: center;
  rotate: -90deg;
  left: 20px;
  top: 30px;
  padding: 10px;
`;

const SneakerSaleCard = () => {
  return (
    <CardLayout sneakerSaleCard>
      <Vente>{SneakerSaleCard_VENTE}</Vente>
      <CardContainer>
        <CardPicture src={hightNike1} />
        {createText(SneakerSaleCard_NIKE1, H3_TEXT)}
        {createText(SneakerSaleCard_PRICE_180, H3_TEXT)}
        {createText(SneakerSaleCard_SHOPPING_CART, H3_TEXT)}
      </CardContainer>
    </CardLayout>
  );
};
export default SneakerSaleCard;
