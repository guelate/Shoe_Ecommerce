/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Row from "../common/components/row";
import Column from "../common/components/column";
import { createText } from "../utils/functions/main";
import * as constantStyle from "../utils/Constants/style";
import * as constantText from "../utils/Constants/main";

const Footer = ({ firstTab, secondTab, thirdTab, fourthTab }) => {
  const column_tab_first = firstTab;
  const column_tab_second = secondTab;
  const column_tab_third = thirdTab;
  const column_tab_fourth = fourthTab;

  return (
    <Row footer>
      <Column>
        {column_tab_first.map((element) =>
          createText(
            element,
            constantText.H1_TEXT,
            constantStyle.FONT_SIZE_20px,
            constantStyle.LETTER_SPACING_2px
          )
        )}
      </Column>
      <Column>
        {column_tab_second.map((element) =>
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
      </Column>
    </Row>
  );
};

export default Footer;
