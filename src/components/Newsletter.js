/* eslint-disable no-lone-blocks */
import Column from "../common/components/column";
import Row from "../common/components/row";
import { createText } from "../utils/functions/main";
import CustomInput from "../common/components/Input";
import * as constantStyle from "../utils/Constants/style";
import * as constantText from "../utils/Constants/main";
import styled from "styled-components";

const Container = styled.div`
  width:60%;
  height:200px;
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  padding: 20px 25px;
  outline: solid;
  border-radius:15px;
  color:white;
  background:${constantStyle.BLACK_COLOR};
`;

const Newsletter = () => {
  return (
    <Container>
      <Row>
        <Column newsletter>
          {createText(
            constantText.Newsletter_SUBSCRITING,
            constantText.H2_TEXT,
            constantStyle.FONT_SIZE_20px,
            constantStyle.LETTER_SPACING_1px
          )}
          {createText(
            constantText.Newsletter_OFFER,
            constantText.H2_TEXT,
            constantStyle.FONT_SIZE_15px,
            constantStyle.LETTER_SPACING_1px
          )}
        </Column>
        <CustomInput />
      </Row>
    </Container>
  );
};
export default Newsletter;
