/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */

import styled from "styled-components";
import hightNike1 from "../assets/img/hightNike1.png";
import CardLayout from "../common/style/CardLayout";
import CardContainer from "../common/style/CardContainer";
import CardPicture from "../common/style/CardPicture";
import {
  H3_TEXT,
  H2_TEXT,
  H6_TEXT,
  SneakerSaleCard_NIKE1,
  SneakerSaleCard_PRICE_180,
  SneakerSaleCard_SHOPPING_CART,
  SneakerSaleCard_VENTE,
  P_TEXT,
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

// SEE TUTORIAL HOW TO ADD GOOGLE FONTS OR CUSTOM FONT IN REACT !!!

const SneakerSaleCard = () => {
  return (
    <CardLayout sneakerSaleCard>
      <Vente>{SneakerSaleCard_VENTE}</Vente>
      <CardContainer>
        <CardPicture src={hightNike1} />
        {createText(SneakerSaleCard_NIKE1, H2_TEXT)}
        {createText(SneakerSaleCard_PRICE_180, H3_TEXT)}
        {createText(SneakerSaleCard_SHOPPING_CART, P_TEXT)}
      </CardContainer>
    </CardLayout>
  );
};
export default SneakerSaleCard;

/*

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

--h2-font-size: 1.25rem;
letter-spacing: 0.1rem;
font-weight: var(--font-bold);
 --font-bold: 700;

  --body-font: "Poppins", sans-serif;
  --big-font-size: 1.25rem;
  --bigger-font-size: 1.5rem;
  --biggest-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: 0.938rem;
  --smaller-font-size: 0.938rem;

 body {
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: var(--dark-color);
  line-height: 1.6;
}
*/
