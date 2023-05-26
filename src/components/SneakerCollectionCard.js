import styled from "styled-components";
import CardLayout from "../common/Layout/CardLayout";
import { createText } from "../utils/functions/main";
import Row from "../common/components/row";
import CardContainer from "../common/Layout/CardContainer";
import * as constantStyle from "../utils/Constants/style";
import * as constantText from "../utils/Constants/main";
import CardPicture from "../common/components/CardPicture";
import collection1 from "../assets/img/collection1.png";
import {AiOutlineArrowRight} from "react-icons/ai";
import Column from "../common/components/column";

const SneakerCollectionCard = () => {
  return (
    <CardLayout sneakerCollectionCard>
      <CardContainer sneakerCollectionCard>
        <Column sneakerCollection marginTop>
        {createText(
          constantText.SneakerCollection_Nike,
          constantText.H3_TEXT,
          constantStyle.FONT_SIZE_20px,
          constantStyle.LETTER_SPACING_1px
        )}
        {createText(constantText.Sneaker_Current_Collection,
          constantText.H5_TEXT,
          constantStyle.FONT_SIZE_15px,
          constantStyle.LETTER_SPACING_1px)}
        <Row>
          {createText(constantText.SneakerCollection_EXPLORE,
          constantText.P_TEXT,
          constantStyle.FONT_SIZE_15px,
          constantStyle.LETTER_SPACING_1px)}
          <AiOutlineArrowRight />
        </Row>
        </Column>
        <CardPicture collection src={collection1} />
      </CardContainer>
    </CardLayout>
  );
};
export default SneakerCollectionCard;
