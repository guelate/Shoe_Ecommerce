/* eslint-disable no-lone-blocks */

import CardLayout from "../common/Layout/CardLayout";
import Row from "../common/components/row";
import * as Aicons from "react-icons/ai";
import * as constantStyle from "../utils/Constants/style";
import * as constantText from "../utils/Constants/main";
import { createText } from "../utils/functions/main";
import CardContainer from "../common/Layout/CardContainer";
import CardPicture from "../common/components/CardPicture";
import yeezy1 from"../assets/img/yeezy1.png";

const SneakerProductCard = () => {
  return (
    <CardLayout sneakerProductCard>
      <CardContainer>
        <CardPicture src={yeezy1}/>
        {createText(
          constantText.SneakerProductCard_NIKE_JORDAN,
          constantText.H2_TEXT,
          constantStyle.FONT_SIZE_25px,
          constantStyle.LETTER_SPACING_1px
        )}
        {createText(
          constantText.SneakerSaleCard_PRICE_180,
          constantText.H4_TEXT,
          constantStyle.FONT_SIZE_20px
        )}
        <Row margin="35px 0px 0px 0px;">
          {createText(
            constantText.Sneaker_SHOPPING_CARD,
            constantText.H6_TEXT,
            constantStyle.FONT_SIZE_15px,
            constantStyle.LETTER_SPACING_2px
          )}
          <Aicons.AiOutlineShopping />
        </Row>
      </CardContainer>
    </CardLayout>
  );
};
export default SneakerProductCard;
